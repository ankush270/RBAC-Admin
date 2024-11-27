import React from 'react';
import PropTypes from 'prop-types';

const variants = {
  primary: 'bg-indigo-600 text-white hover:bg-indigo-500',
  secondary: 'bg-white text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50',
  danger: 'bg-red-600 text-white hover:bg-red-500',
};

export default function Button({ children, variant = 'primary', className = '', ...props }) {
  return (
    <button
      className={`inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold shadow-sm ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  className: PropTypes.string,
};