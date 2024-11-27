import React from 'react';
import { Save } from 'lucide-react';
import Button from '../common/Button';

const preferences = {
  security: [
    {
      id: 'session_timeout',
      label: 'Session Timeout',
      description: 'Automatically log out users after period of inactivity',
      type: 'select',
      options: [
        { value: '15', label: '15 minutes' },
        { value: '30', label: '30 minutes' },
        { value: '60', label: '1 hour' },
        { value: '120', label: '2 hours' },
      ],
      defaultValue: '30',
    },
    {
      id: 'mfa_required',
      label: 'Require Two-Factor Authentication',
      description: 'Enforce MFA for all users',
      type: 'toggle',
      defaultValue: true,
    },
  ],
  notifications: [
    {
      id: 'email_notifications',
      label: 'Email Notifications',
      description: 'Send email notifications for important events',
      type: 'toggle',
      defaultValue: true,
    },
    {
      id: 'notification_events',
      label: 'Notification Events',
      description: 'Select events that trigger notifications',
      type: 'multiselect',
      options: [
        { value: 'user_created', label: 'User Created' },
        { value: 'role_modified', label: 'Role Modified' },
        { value: 'permission_changed', label: 'Permission Changed' },
        { value: 'login_failed', label: 'Failed Login Attempts' },
      ],
      defaultValue: ['user_created', 'role_modified'],
    },
  ],
};

export default function SystemPreferences() {
  const [formData, setFormData] = React.useState(() => {
    const initialData = {};
    Object.values(preferences).flat().forEach(pref => {
      initialData[pref.id] = pref.defaultValue;
    });
    return initialData;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Saving preferences:', formData);
    // Here you would typically make an API call to save the preferences
  };

  const handleChange = (id, value) => {
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const renderField = (preference) => {
    switch (preference.type) {
      case 'select':
        return (
          <select
            id={preference.id}
            value={formData[preference.id]}
            onChange={(e) => handleChange(preference.id, e.target.value)}
            className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
          >
            {preference.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      case 'toggle':
        return (
          <button
            type="button"
            className={`${
              formData[preference.id] ? 'bg-indigo-600' : 'bg-gray-200'
            } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2`}
            role="switch"
            aria-checked={formData[preference.id]}
            onClick={() => handleChange(preference.id, !formData[preference.id])}
          >
            <span
              aria-hidden="true"
              className={`${
                formData[preference.id] ? 'translate-x-5' : 'translate-x-0'
              } pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
            />
          </button>
        );
      case 'multiselect':
        return (
          <div className="mt-2 space-y-2">
            {preference.options.map((option) => (
              <label key={option.value} className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData[preference.id].includes(option.value)}
                  onChange={(e) => {
                    const newValue = e.target.checked
                      ? [...formData[preference.id], option.value]
                      : formData[preference.id].filter((v) => v !== option.value);
                    handleChange(preference.id, newValue);
                  }}
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <span className="ml-2 text-sm text-gray-600">{option.label}</span>
              </label>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {Object.entries(preferences).map(([section, items]) => (
        <div key={section} className="space-y-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900 capitalize">
            {section.replace('_', ' ')}
          </h3>
          <div className="space-y-6">
            {items.map((preference) => (
              <div key={preference.id} className="flex items-start justify-between">
                <div className="flex-1 mr-4">
                  <label
                    htmlFor={preference.id}
                    className="block text-sm font-medium text-gray-700"
                  >
                    {preference.label}
                  </label>
                  <p className="text-sm text-gray-500">{preference.description}</p>
                </div>
                <div className="flex-shrink-0">{renderField(preference)}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="flex justify-end">
        <Button type="submit">
          <Save className="h-4 w-4 mr-2" />
          Save Changes
        </Button>
      </div>
    </form>
  );
}