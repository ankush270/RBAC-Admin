import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { permissions } from '../../data/mockData';
import Button from '../common/Button';
import Badge from '../common/Badge';

export default function RoleForm({ role, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    name: role?.name || '',
    description: role?.description || '',
    permissions: role?.permissions?.map(p => p.id) || [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const togglePermission = (permissionId) => {
    setFormData(prev => ({
      ...prev,
      permissions: prev.permissions.includes(permissionId)
        ? prev.permissions.filter(id => id !== permissionId)
        : [...prev.permissions, permissionId],
    }));
  };

  const permissionsByModule = permissions.reduce((acc, permission) => {
    if (!acc[permission.module]) {
      acc[permission.module] = [];
    }
    acc[permission.module].push(permission);
    return acc;
  }, {});

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          rows={3}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Permissions
        </label>
        <div className="space-y-4">
          {Object.entries(permissionsByModule).map(([module, modulePermissions]) => (
            <div key={module} className="border rounded-lg p-4">
              <h4 className="text-sm font-medium text-gray-900 capitalize mb-2">
                {module}
              </h4>
              <div className="flex flex-wrap gap-2">
                {modulePermissions.map((permission) => (
                  <button
                    key={permission.id}
                    type="button"
                    onClick={() => togglePermission(permission.id)}
                    className={`group relative rounded-md px-3 py-1.5 text-sm font-medium ${
                      formData.permissions.includes(permission.id)
                        ? 'bg-indigo-600 text-white hover:bg-indigo-500'
                        : 'bg-white text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {permission.name}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
        <Button type="submit" className="sm:ml-3">
          {role ? 'Update Role' : 'Create Role'}
        </Button>
        <Button type="button" variant="secondary" onClick={onCancel} className="mt-3 sm:mt-0">
          Cancel
        </Button>
      </div>
    </form>
  );
}

RoleForm.propTypes = {
  role: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    permissions: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
      })
    ),
  }),
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};