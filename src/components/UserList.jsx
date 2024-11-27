import React, { useState, useMemo } from 'react';
import { Plus } from 'lucide-react';
import { useStore } from '../data/store';
import UserRow from './UserRow';
import UserModal from './users/UserModal';
import SearchInput from './common/SearchInput';
import FilterDropdown from './common/FilterDropdown';
import Button from './common/Button';

export default function UserList() {
  const { users, roles, deleteUser } = useStore();
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const roleOptions = roles.map(role => ({
    value: role.id,
    label: role.name,
  }));

  const statusOptions = [
    { value: 'active', label: 'Active' },
    { value: 'inactive', label: 'Inactive' },
  ];

  const filteredUsers = useMemo(() => {
    return users.filter(user => {
      const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesRole = !roleFilter || user.role.id === roleFilter;
      const matchesStatus = !statusFilter || user.status === statusFilter;
      return matchesSearch && matchesRole && matchesStatus;
    });
  }, [users, searchQuery, roleFilter, statusFilter]);

  const handleDeleteUser = (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      deleteUser(userId);
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold text-gray-900">Users</h1>
          <p className="mt-2 text-sm text-gray-700">
            Manage user accounts and their roles
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <Button
            onClick={() => {
              setSelectedUser(null);
              setIsModalOpen(true);
            }}
          >
            <Plus className="h-4 w-4 mr-2" />
            Add User
          </Button>
        </div>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <div className="sm:w-64">
          <SearchInput
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search users..."
          />
        </div>
        <div className="flex gap-4">
          <FilterDropdown
            value={roleFilter}
            onChange={setRoleFilter}
            options={roleOptions}
            label="Role"
          />
          <FilterDropdown
            value={statusFilter}
            onChange={setStatusFilter}
            options={statusOptions}
            label="Status"
          />
        </div>
      </div>

      <div className="mt-6 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                      User
                    </th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Role
                    </th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Status
                    </th>
                    <th className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {filteredUsers.map((user) => (
                    <UserRow
                      key={user.id}
                      user={user}
                      onEdit={() => {
                        setSelectedUser(user);
                        setIsModalOpen(true);
                      }}
                      onDelete={() => handleDeleteUser(user.id)}
                    />
                  ))}
                </tbody>
              </table>
              {filteredUsers.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-sm text-gray-500">No users found matching your criteria.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <UserModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        user={selectedUser}
      />
    </div>
  );
}