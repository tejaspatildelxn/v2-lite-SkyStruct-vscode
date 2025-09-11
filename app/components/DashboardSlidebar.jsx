'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LogOut, 
  ChevronDown, 
  LayoutDashboard,
  Mail,
  Users,
  Settings,
  FolderOpen,
  UserCheck,
  Store,
  Shield,
  Calendar,
  Bell,
  Clock,
  ChevronLeft
} from 'lucide-react';
import Link from 'next/link';

const DashboardSlidebar = () => {
  const [activeItem, setActiveItem] = useState('Project Overview');
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [collapsed, setCollapsed] = useState(false);

  const toggleSubmenu = (menu) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  const menuItems = [
    {
      name: 'Project Overview',
      path: '/admin/dashboard/projects',
      icon: LayoutDashboard,
      badge: '24',
      badgeColor: 'bg-blue-100 text-blue-700'
    },
    {
      name: 'Organization Mail',
      path: '/admin/dashboard/mail',
      icon: Mail,
      badge: '12',
      badgeColor: 'bg-red-100 text-red-700'
    },
    {
      name: 'Users',
      icon: Users,
      submenu: [
        { 
          name: 'Member', 
          path: '/admin/dashboard/member',
          icon: UserCheck,
          badge: '156'
        },
        { 
          name: 'Vendor', 
          path: '/admin/dashboard/vendor',
          icon: Store,
          badge: '48'
        }
      ]
    },
    {
      name: 'Settings',
      icon: Settings,
      submenu: [
        { 
          name: 'Permissions', 
          path: '/admin/dashboard/permissions',
          icon: Shield
        },
        { 
          name: 'Event', 
          path: '/admin/dashboard/event',
          icon: Calendar,
          badge: '3'
        },
        { 
          name: 'Reminder', 
          path: '/admin/dashboard/reminder',
          icon: Bell,
          badge: '7'
        },
        { 
          name: 'Schedule', 
          path: '/admin/dashboard/schedule',
          icon: Clock
        }
      ]
    },
    {
      name: 'My Projects',
      path: '/admin/dashboard/projects',
      icon: FolderOpen,
      badge: '8',
      badgeColor: 'bg-green-100 text-green-700'
    }
  ];

  return (
    <motion.aside
      animate={{ width: collapsed ? 85 : 280 }}
      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
      className="relative bg-white h-screen border-r-2 border-gray-100 flex flex-col shadow-xl"
    >
      {/* Collapse Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setCollapsed(!collapsed)}
        className="absolute top-1/2 -right-5 transform -translate-y-1/2 bg-white hover:bg-gray-50 border-2 border-gray-200 w-10 h-10 flex items-center justify-center rounded-xl shadow-lg transition-all hover:shadow-xl z-50"
      >
        <motion.div
          animate={{ rotate: collapsed ? 180 : 0 }}
          transition={{ duration: 0.35 }}
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </motion.div>
      </motion.button>

      {/* Header */}
      <div className="p-6 border-b-2 border-gray-100">
        <div className="flex items-center gap-4">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-blue-500 to-blue-600 h-12 w-12 rounded-2xl flex items-center justify-center shadow-lg"
          >
            <span className="text-white font-bold text-lg">SS</span>
          </motion.div>
          <AnimatePresence>
            {!collapsed && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.35 }}
              >
                <h1 className="font-bold text-xl text-gray-900">
                  SkyStruct <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">V2</span>
                </h1>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Lite Version</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* User Profile Card - compact & collapse friendly */}
      <div className="px-6 py-4 border-b-2 border-gray-100">
        {collapsed ? (
          // Collapsed → just avatar (same size as logo)
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold shadow-lg">
                AD
              </div>
              <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
          </div>
        ) : (
          // Expanded → gradient card with details
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl p-3 border border-blue-200 flex items-center gap-3"
          >
            <div className="relative flex-shrink-0">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold shadow-lg">
                AD
              </div>
              <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.35 }}
              >
                <h3 className="font-semibold text-sm text-gray-900 leading-tight">Alan David</h3>
                <p className="text-[11px] text-gray-500 font-medium uppercase tracking-wide">Manager</p>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 overflow-y-auto py-4 px-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.name;
            const hasSubmenu = item.submenu;
            const isSubmenuOpen = openSubmenu === item.name;

            return (
              <li key={item.name}>
                {hasSubmenu ? (
                  <>
                    {/* Parent with Submenu */}
                    <motion.button
                      whileHover={{ x: collapsed ? 0 : 4 }}
                      onClick={() => toggleSubmenu(item.name)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl transition-all duration-300 group ${
                        isActive
                          ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg'
                          : 'text-gray-700 hover:bg-gray-50 hover:shadow-md'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`flex-shrink-0 ${isActive ? 'text-white' : 'text-gray-500'}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        {!collapsed && (
                          <span className="font-medium text-sm">{item.name}</span>
                        )}
                      </div>
                      {!collapsed && (
                        <motion.div
                          animate={{ rotate: isSubmenuOpen ? 180 : 0 }}
                          transition={{ duration: 0.35 }}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </motion.div>
                      )}
                    </motion.button>

                    {/* Submenu Items */}
                    <AnimatePresence>
                      {isSubmenuOpen && !collapsed && (
                        <motion.ul
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35, ease: 'easeInOut' }}
                          className="mt-2 ml-4 space-y-1 overflow-hidden"
                        >
                          {item.submenu.map((sub) => {
                            const SubIcon = sub.icon;
                            const isSubActive = activeItem === sub.name;
                            
                            return (
                              <li key={sub.name}>
                                <Link href={sub.path}>
                                  <motion.button
                                    whileHover={{ x: 4 }}
                                    onClick={() => setActiveItem(sub.name)}
                                    className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl transition-all duration-300 ${
                                      isSubActive
                                        ? 'bg-blue-50 text-blue-600 border border-blue-200'
                                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                    }`}
                                  >
                                    <div className="flex items-center gap-3">
                                      <SubIcon className="w-4 h-4" />
                                      <span className="text-sm font-medium">{sub.name}</span>
                                    </div>
                                    {sub.badge && (
                                      <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full font-medium">
                                        {sub.badge}
                                      </span>
                                    )}
                                  </motion.button>
                                </Link>
                              </li>
                            );
                          })}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link href={item.path}>
                    <motion.button
                      whileHover={{ x: collapsed ? 0 : 4 }}
                      onClick={() => setActiveItem(item.name)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl transition-all duration-300 group ${
                        isActive
                          ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg'
                          : 'text-gray-700 hover:bg-gray-50 hover:shadow-md'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`flex-shrink-0 ${isActive ? 'text-white' : 'text-gray-500'}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        {!collapsed && (
                          <span className="font-medium text-sm">{item.name}</span>
                        )}
                      </div>
                      {!collapsed && item.badge && (
                        <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                          isActive 
                            ? 'bg-white/20 text-white' 
                            : item.badgeColor || 'bg-gray-100 text-gray-600'
                        }`}>
                          {item.badge}
                        </span>
                      )}
                    </motion.button>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

{/* Footer - Logout */}
<div className="p-6 border-t-2 border-gray-100">
  {collapsed ? (
    // Collapsed → light blue gradient square
    <div className="flex justify-center">
      <motion.div 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-12 h-12 bg-gradient-to-r from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center text-blue-700 shadow-md hover:shadow-lg cursor-pointer"
      >
        <LogOut className="w-6 h-6" />
      </motion.div>
    </div>
  ) : (
    // Expanded → full-width gradient button
    <motion.button 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-2xl bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 font-medium shadow-md hover:shadow-lg transition-all duration-300"
    >
      <LogOut className="w-5 h-5" />
      <AnimatePresence>
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.35 }}
        >
          Logout
        </motion.span>
      </AnimatePresence>
    </motion.button>
  )}
</div>


    </motion.aside>
  );
};

export default DashboardSlidebar;
