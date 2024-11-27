import React from 'react';
import PropTypes from 'prop-types';

const variants = {
  success: 'bg-green-50 text-green-700 ring-green-600/20',
  error: 'bg-red-50 text-red-700 ring-red-600/20',
  info: 'bg-blue-50 text-blue-700 ring-blue-700/10',
  gray: 'bg-gray-50 text-gray-600 ring-gray-500/10',
};

export default function Badge({ children, variant = 'info' }) {
  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${variants[variant]}`}
    >
      {children}
    </span>
  );
}

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['success', 'error', 'info', 'gray']),
};