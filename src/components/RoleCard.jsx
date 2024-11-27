import React from 'react';
import PropTypes from 'prop-types';
import { Shield, Edit2, Trash2 } from 'lucide-react';

export default function RoleCard({ role, onEdit, onDelete }) {
  return (
    <div className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm hover:border-gray-400">
      <div className="flex-shrink-0">
        <Shield className="h-10 w-10 text-indigo-500" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="focus:outline-none">
          <span className="absolute inset-0" aria-hidden="true" />
          <p className="text-sm font-medium text-gray-900">{role.name}</p>
          <p className="truncate text-sm text-gray-500">
            {role.description}
          </p>
        </div>
        <div className="mt-2">
          <div className="flex flex-wrap gap-1">
            {role.permissions.slice(0, 3).map((permission) => (
              <span
                key={permission.id}
                className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
              >
                {permission.name}
              </span>
            ))}
            {role.permissions.length > 3 && (
              <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                +{role.permissions.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="flex-shrink-0">
        <button 
          onClick={onEdit}
          className="text-indigo-600 hover:text-indigo-900 mr-2"
        >
          <Edit2 className="h-4 w-4" />
        </button>
        <button 
          onClick={onDelete}
          className="text-red-600 hover:text-red-900"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

RoleCard.propTypes = {
  role: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    permissions: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};