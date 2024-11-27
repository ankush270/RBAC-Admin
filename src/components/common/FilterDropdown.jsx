import React from 'react';
import PropTypes from 'prop-types';
import { Filter } from 'lucide-react';

export default function FilterDropdown({ value, onChange, options, label }) {
  return (
    <div className="relative inline-block">
      <label className="sr-only">{label}</label>
      <div className="group inline-flex items-center">
        <Filter className="mr-2 h-5 w-5 text-gray-400" aria-hidden="true" />
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="rounded-md border-0 py-1.5 pl-3 pr-8 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        >
          <option value="">All {label}s</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

FilterDropdown.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  label: PropTypes.string.isRequired,
};