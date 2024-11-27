import React from 'react';
import { Key, Clock, Sliders } from 'lucide-react';
import AuditLogs from './AuditLogs';
import ApiKeys from './ApiKeys';
import SystemPreferences from './SystemPreferences';

const tabs = [
  { name: 'Audit Logs', icon: Clock, component: AuditLogs },
  { name: 'API Keys', icon: Key, component: ApiKeys },
  { name: 'Preferences', icon: Sliders, component: SystemPreferences },
];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = React.useState(0);
  const ActiveComponent = tabs[activeTab].component;

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
          <p className="mt-2 text-sm text-gray-700">
            Manage system settings, view audit logs, and configure API access
          </p>
        </div>
      </div>

      <div className="mt-8">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {tabs.map((tab, index) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(index)}
                className={`${
                  activeTab === index
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                } flex whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium`}
              >
                <tab.icon
                  className={`${
                    activeTab === index ? 'text-indigo-500' : 'text-gray-400'
                  } -ml-0.5 mr-2 h-5 w-5`}
                />
                {tab.name}
              </button>
            ))}
          </nav>
        </div>
        <div className="mt-8">
          <ActiveComponent />
        </div>
      </div>
    </div>
  );
}