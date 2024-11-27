# RBAC Dashboard

A modern Role-Based Access Control (RBAC) dashboard built with React, featuring comprehensive user management, role-based permissions, and detailed activity logging.

![RBAC Dashboard](https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=400&fit=crop&q=80)

## Features

### User Management
- 👥 Comprehensive user listing with search and filtering
- ✏️ Create, edit, and delete user accounts
- 🔄 Bulk actions for efficient user management
- 🎭 Role assignment and status management
- 🖼️ User avatars and profile information

### Role Management
- 🛡️ Define and manage custom roles
- 🔐 Granular permission control
- 🔄 Dynamic role updates with user reassignment
- 🏷️ Role-specific attributes and descriptions

### Settings & Configuration
- ⚙️ System-wide configuration options
- 🔒 Security settings management
- 📧 Notification preferences
- 🔑 API key management
- ⏰ Session timeout controls

### Activity Logging
- 📝 Detailed audit trails
- 🕒 Real-time activity monitoring
- 📊 User action tracking
- 💾 Export capabilities
- 🔍 Advanced log filtering

### Security Features
- 🔐 Two-factor authentication support
- 🔒 Password policy management
- ⏳ Session management
- 🚫 Rate limiting controls
- 📝 Access logs

## Getting Started

### Prerequisites
- Node.js 18.0 or higher
- npm 9.0 or higher

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ankush270/RBAC-Admin.git
cd RBAC-Admin
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Project Structure

```
src/
├── components/         # React components
│   ├── common/        # Reusable UI components
│   ├── users/         # User management components
│   ├── roles/         # Role management components
│   └── settings/      # Settings components
├── data/              # Data management
│   ├── mockData.js    # Sample data
│   └── store.js       # Zustand store
└── types/             # TypeScript types
```

## Technology Stack

- **Frontend Framework**: React with Vite
- **State Management**: Zustand
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Routing**: React Router
- **Type Checking**: PropTypes

## Key Features Implementation

### User Management
The dashboard provides a comprehensive user management interface with:
- Real-time search and filtering
- Role-based filtering
- Status management
- Bulk actions for multiple users
- Detailed user profiles

### Role Management
Roles can be managed through an intuitive interface:
- Create and modify roles
- Assign granular permissions
- Visual permission matrix
- Role hierarchy support
- Impact analysis for role changes

### Activity Logging
All system activities are logged with:
- Timestamp
- Actor information
- Action details
- Affected resources
- Export capabilities


## Acknowledgments

- Icons by [Lucide](https://lucide.dev)
- UI components inspired by [Tailwind UI](https://tailwindui.com)
- Sample avatars from [Unsplash](https://unsplash.com)
