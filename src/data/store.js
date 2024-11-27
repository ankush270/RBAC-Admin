import { create } from 'zustand';
import { users as initialUsers, roles as initialRoles } from './mockData';

export const useStore = create((set) => ({
  users: initialUsers,
  roles: initialRoles,
  
  addUser: (user) => set((state) => ({
    users: [...state.users, { ...user, id: crypto.randomUUID() }]
  })),
  
  updateUser: (updatedUser) => set((state) => ({
    users: state.users.map((user) => 
      user.id === updatedUser.id ? updatedUser : user
    )
  })),
  
  deleteUser: (userId) => set((state) => ({
    users: state.users.filter((user) => user.id !== userId)
  })),
  
  addRole: (role) => set((state) => ({
    roles: [...state.roles, { ...role, id: crypto.randomUUID() }]
  })),
  
  updateRole: (updatedRole) => set((state) => ({
    roles: state.roles.map((role) => 
      role.id === updatedRole.id ? updatedRole : role
    )
  })),
  
  deleteRole: (roleId) => set((state) => ({
    roles: state.roles.filter((role) => role.id !== roleId),
    users: state.users.map((user) => 
      user.role.id === roleId 
        ? { ...user, role: state.roles[0] } // Assign default role
        : user
    )
  }))
}));