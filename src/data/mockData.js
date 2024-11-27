export const permissions = [
    { id: '1', name: 'read:users', description: 'View users', module: 'users' },
    { id: '2', name: 'write:users', description: 'Create/Edit users', module: 'users' },
    { id: '3', name: 'delete:users', description: 'Delete users', module: 'users' },
    { id: '4', name: 'read:roles', description: 'View roles', module: 'roles' },
    { id: '5', name: 'write:roles', description: 'Create/Edit roles', module: 'roles' },
    { id: '6', name: 'read:reports', description: 'View reports', module: 'reports' },
  ];
  
  export const roles = [
    {
      id: '1',
      name: 'Admin',
      description: 'Full system access',
      permissions: permissions,
    },
    {
      id: '2',
      name: 'Editor',
      description: 'Can manage content',
      permissions: permissions.filter(p => p.name.startsWith('read') || p.name === 'write:users'),
    },
    {
      id: '3',
      name: 'Viewer',
      description: 'Read-only access',
      permissions: permissions.filter(p => p.name.startsWith('read')),
    },
  ];
  
  export const users = [
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      role: roles[0],
      status: 'active',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: roles[1],
      status: 'active',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    },
    {
      id: '3',
      name: 'Bob Wilson',
      email: 'bob@example.com',
      role: roles[2],
      status: 'inactive',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    },
  ];