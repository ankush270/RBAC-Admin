import React from 'react';
import { Clock, User, Shield, Settings } from 'lucide-react';
import SearchInput from '../common/SearchInput';

const auditLogs = [
  {
    id: 1,
    action: 'User Created',
    description: 'Created new user "John Smith"',
    actor: 'admin@example.com',
    timestamp: '2024-03-15T10:30:00Z',
    module: 'users',
  },
  {
    id: 2,
    action: 'Role Modified',
    description: 'Updated permissions for "Editor" role',
    actor: 'admin@example.com',
    timestamp: '2024-03-15T09:45:00Z',
    module: 'roles',
  },
  {
    id: 3,
    action: 'Settings Changed',
    description: 'Updated system preferences',
    actor: 'admin@example.com',
    timestamp: '2024-03-15T09:00:00Z',
    module: 'settings',
  },
];

const moduleIcons = {
  users: User,
  roles: Shield,
  settings: Settings,
};

export default function AuditLogs() {
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredLogs = auditLogs.filter(
    log =>
      log.action.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.actor.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="mb-6 sm:w-64">
        <SearchInput
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search audit logs..."
        />
      </div>

      <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
        <ul role="list" className="divide-y divide-gray-200">
          {filteredLogs.map((log) => {
            const Icon = moduleIcons[log.module] || Clock;
            return (
              <li key={log.id} className="px-4 py-4 sm:px-6 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Icon className="h-5 w-5 text-gray-400 mr-3" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">{log.action}</p>
                      <p className="text-sm text-gray-500">{log.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <p className="text-sm text-gray-500">{log.actor}</p>
                    <p className="text-sm text-gray-400">
                      {new Date(log.timestamp).toLocaleString()}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}