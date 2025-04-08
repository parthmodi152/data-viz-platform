import { Bell, ClipboardList, CloudUpload, Home, Menu, Settings, Zap } from "lucide-react";

// Navigation tabs configuration
export const NAVIGATION_TABS = [
  {
    id: 'home',
    name: 'Home',
    path: '/',
    icon: Home
  },
  {
    id: 'notifications',
    name: 'Notifications',
    path: '/notifications',
    icon: Bell
  },
  {
    id: 'tasks',
    name: 'Tasks',
    path: '/tasks',
    icon: ClipboardList
  },
  {
    id: 'uploads',
    name: 'Uploads',
    path: '/uploads',
    icon: CloudUpload
  },
  {
    id: 'settings',
    name: 'Settings',
    path: '/settings',
    icon: Settings
  }
];

// Topbar navigation configurations based on active tab
export const getTopbarNavigation = (currentPath: string) => {
  if (currentPath === '/' || currentPath === '/home') {
    return [
      { name: 'Charging Stations', path: '/', active: true },
      { name: 'Fleet Sizing', path: '/fleet', active: false },
      { name: 'Parking', path: '/parking', active: false }
    ];
  } else if (currentPath.includes('/notifications')) {
    return [
      { name: 'All Notifications', path: '/notifications', active: true },
      { name: 'Unread', path: '/notifications/unread', active: false },
      { name: 'Archived', path: '/notifications/archived', active: false }
    ];
  } else if (currentPath.includes('/tasks')) {
    return [
      { name: 'Active Tasks', path: '/tasks', active: true },
      { name: 'Completed', path: '/tasks/completed', active: false },
      { name: 'Assigned', path: '/tasks/assigned', active: false }
    ];
  } else if (currentPath.includes('/uploads')) {
    return [
      { name: 'Recent Uploads', path: '/uploads', active: true },
      { name: 'Shared Files', path: '/uploads/shared', active: false },
      { name: 'Storage', path: '/uploads/storage', active: false }
    ];
  } else if (currentPath.includes('/settings')) {
    return [
      { name: 'User Settings', path: '/settings', active: true },
      { name: 'System Settings', path: '/settings/system', active: false },
      { name: 'Integrations', path: '/settings/integrations', active: false }
    ];
  }
  return [];
};

// Get page header info based on current path
export const getPageInfo = (currentPath: string) => {
  if (currentPath === '/' || currentPath.includes('/home')) {
    return { icon: Zap, title: 'Charging Station' };
  } else if (currentPath.includes('/notifications')) {
    return { icon: Bell, title: 'Notifications' };
  } else if (currentPath.includes('/tasks')) {
    return { icon: ClipboardList, title: 'Task Management' };
  } else if (currentPath.includes('/uploads')) {
    return { icon: CloudUpload, title: 'File Uploads' };
  } else if (currentPath.includes('/settings')) {
    return { icon: Settings, title: 'Settings' };
  }
  return { icon: Home, title: 'Home Dashboard' };
};
