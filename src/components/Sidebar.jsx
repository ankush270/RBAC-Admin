import React from 'react';
import { Users, Shield, Settings } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const navigation = [
  { name: 'Users', href: '/', icon: Users },
  { name: 'Roles', href: '/roles', icon: Shield },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="flex h-full w-64 flex-col bg-gray-900">
      <div className="flex h-16 items-center px-4">
        <Shield className="h-8 w-8 text-indigo-500" />
        <span className="ml-2 text-xl font-bold text-white">RBAC Admin</span>
      </div>
      <nav className="flex-1 space-y-1 px-2 py-4">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                to={item.href}
                className={`${
                  isActive
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                } group flex items-center rounded-md px-2 py-2 text-sm font-medium`}
              >
                <item.icon
                  className={`${
                    isActive ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300'
                  } mr-3 h-6 w-6 flex-shrink-0`}
                />
                {item.name}
              </Link>
            </motion.div>
          );
        })}
      </nav>
    </div>
  );
}
