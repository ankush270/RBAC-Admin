import React, { useState, useMemo } from 'react';
import { Plus } from 'lucide-react';
import { useStore } from '../data/store';
import RoleCard from './RoleCard';
import RoleModal from './roles/RoleModal';
import SearchInput from './common/SearchInput';
import Button from './common/Button';

export default function RoleList() {
  const { roles, deleteRole } = useStore();
  const [selectedRole, setSelectedRole] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRoles = useMemo(() => {
    return roles.filter(role =>
      role.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      role.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [roles, searchQuery]);

  const handleDeleteRole = (roleId) => {
    if (window.confirm('Are you sure you want to delete this role? Users with this role will be assigned the default role.')) {
      deleteRole(roleId);
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold text-gray-900">Roles</h1>
          <p className="mt-2 text-sm text-gray-700">
            Manage roles and their permissions
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <Button
            onClick={() => {
              setSelectedRole(null);
              setIsModalOpen(true);
            }}
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Role
          </Button>
        </div>
      </div>

      <div className="mt-8 sm:w-64">
        <SearchInput
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search roles..."
        />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredRoles.map((role) => (
          <RoleCard
            key={role.id}
            role={role}
            onEdit={() => {
              setSelectedRole(role);
              setIsModalOpen(true);
            }}
            onDelete={() => handleDeleteRole(role.id)}
          />
        ))}
        {filteredRoles.length === 0 && (
          <div className="col-span-full text-center py-12">
            <p className="text-sm text-gray-500">No roles found matching your criteria.</p>
          </div>
        )}
      </div>

      <RoleModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        role={selectedRole}
      />
    </div>
  );
}