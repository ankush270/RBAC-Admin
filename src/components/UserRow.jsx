import React from 'react';
import PropTypes from 'prop-types';
import { Edit2, Trash2 } from 'lucide-react';
import Badge from './common/Badge';

export default function UserRow({ user, onEdit, onDelete }) {
  return (
    <tr>
      <td className="whitespace-nowrap py-4 pl-4 pr-3 sm:pl-6">
        <div className="flex items-center">
          <div className="h-10 w-10 flex-shrink-0">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src={user.avatar}
              alt=""
            />
          </div>
          <div className="ml-4">
            <div className="font-medium text-gray-900">{user.name}</div>
            <div className="text-gray-500">{user.email}</div>
          </div>
        </div>
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        <Badge variant="info">{user.role.name}</Badge>
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        <Badge variant={user.status === 'active' ? 'success' : 'error'}>
          {user.status}
        </Badge>
      </td>
      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
        <button
          onClick={onEdit}
          className="text-indigo-600 hover:text-indigo-900 mr-4"
        >
          <Edit2 className="h-4 w-4" />
        </button>
        <button 
          onClick={onDelete}
          className="text-red-600 hover:text-red-900"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </td>
    </tr>
  );
}

UserRow.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    role: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    status: PropTypes.oneOf(['active', 'inactive']).isRequired,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};