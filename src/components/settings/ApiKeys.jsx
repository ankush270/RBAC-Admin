import React from 'react';
import { Plus, Copy, Eye, EyeOff } from 'lucide-react';
import Button from '../common/Button';

const apiKeys = [
  {
    id: 1,
    name: 'Production API Key',
    key: 'sk_prod_123456789',
    createdAt: '2024-03-01T00:00:00Z',
    lastUsed: '2024-03-15T10:30:00Z',
  },
  {
    id: 2,
    name: 'Development API Key',
    key: 'sk_dev_987654321',
    createdAt: '2024-03-10T00:00:00Z',
    lastUsed: '2024-03-15T09:45:00Z',
  },
];

export default function ApiKeys() {
  const [showKey, setShowKey] = React.useState({});

  const toggleKeyVisibility = (id) => {
    setShowKey(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div>
      <div className="mb-6">
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Generate New API Key
        </Button>
      </div>

      <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
                Name
              </th>
              <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                API Key
              </th>
              <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Created
              </th>
              <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Last Used
              </th>
              <th className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {apiKeys.map((apiKey) => (
              <tr key={apiKey.id}>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
                  {apiKey.name}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <code className="font-mono">
                      {showKey[apiKey.id] ? apiKey.key : '••••••••••••••••'}
                    </code>
                    <button
                      onClick={() => toggleKeyVisibility(apiKey.id)}
                      className="ml-2 text-gray-400 hover:text-gray-600"
                    >
                      {showKey[apiKey.id] ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                    <button
                      onClick={() => copyToClipboard(apiKey.key)}
                      className="ml-2 text-gray-400 hover:text-gray-600"
                    >
                      <Copy className="h-4 w-4" />
                    </button>
                  </div>
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {new Date(apiKey.createdAt).toLocaleDateString()}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {new Date(apiKey.lastUsed).toLocaleString()}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  <Button variant="danger" className="ml-2">
                    Revoke
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}