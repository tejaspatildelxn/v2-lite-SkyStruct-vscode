// components/DashboardSlidebar.jsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LogOut } from 'lucide-react';
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
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      name: 'Organization Mail',
      path: '/admin/dashboard/mail',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      name: 'Users',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      submenu: [
        { name: 'Member', path: '/admin/dashboard/member' },
        { name: 'Vendor', path: '/admin/dashboard/vendor' }
      ]
    },
    {
      name: 'Settings',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      submenu: [
        { name: 'Permissions', path: '/admin/dashboard/permissions' },
        { name: 'Event', path: '/admin/dashboard/event' },
        { name: 'Reminder', path: '/admin/dashboard/reminder' },
        { name: 'Schedule', path: '/admin/dashboard/schedule' }
      ]
    },
    {
      name: 'My Projects',
      path: '/admin/dashboard/projects',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
        </svg>
      )
    }
  ];

  return (
    <motion.aside
      animate={{ width: collapsed ? 78 : 250 }}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className="relative bg-white h-screen border-r border-slate-200 flex flex-col"
    >
      {/* Collapse Button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute top-1/2 -right-3 transform -translate-y-1/2 bg-slate-100 hover:bg-slate-200 border border-slate-300 w-6 h-14 flex items-center justify-center rounded-md shadow-sm transition"
      >
        <motion.svg
          animate={{ rotate: collapsed ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-4 h-4 text-slate-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </motion.svg>
      </button>

      {/* Header */}
      <div className="p-4 border-b border-slate-200 flex items-center gap-3">
        <div className="bg-slate-900 h-8 w-8 rounded-md flex items-center justify-center">
          <span className="text-white font-bold text-xs">SS</span>
        </div>
        <AnimatePresence>
          {!collapsed && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="font-bold text-lg text-slate-900"
            >
              SkyStruct <span className="text-blue-500">V2</span>
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* User Profile */}
      <div className="p-4 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-xs">
            AD
          </div>
          <AnimatePresence>
            {!collapsed && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.25 }}
              >
                <h3 className="font-semibold text-slate-900">Alan David</h3>
                <p className="text-xs text-slate-500">Project Manager</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 overflow-y-auto py-3">
        <ul className="px-2 space-y-1">
          {menuItems.map((item) => (
            <li key={item.name}>
              {item.submenu ? (
                <>
                  {/* Parent with Submenu */}
                  <button
                    onClick={() => toggleSubmenu(item.name)}
                    className={`w-full flex items-center justify-start px-3 py-2 rounded-lg transition-all duration-200 group focus:outline-none ${
                      activeItem === item.name
                        ? 'bg-blue-50 text-blue-600 border border-blue-200 shadow-sm'
                        : 'text-slate-700 hover:bg-slate-50 hover:shadow-sm hover:text-slate-900'
                    }`}
                  >
                    <span
                      className={`mr-3 flex-shrink-0 ${
                        activeItem === item.name ? 'text-blue-600' : 'text-slate-500'
                      }`}
                    >
                      {item.icon}
                    </span>
                    {!collapsed && <span className="font-medium text-sm tracking-wide">{item.name}</span>}
                    {!collapsed && (
                      <motion.svg
                        animate={{ rotate: openSubmenu === item.name ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="w-4 h-4 ml-auto text-slate-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </motion.svg>
                    )}
                  </button>

                  {/* Submenu Items */}
                  <AnimatePresence>
                    {openSubmenu === item.name && !collapsed && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="ml-8 mt-1 space-y-1 overflow-hidden"
                      >
                        {item.submenu.map((sub) => (
                          <li key={sub.name}>
                            <Link href={sub.path}>
                              <button
                                onClick={() => setActiveItem(sub.name)}
                                className={`w-full flex items-center justify-start px-3 py-2 text-left rounded-lg text-sm transition-all duration-200 ${
                                  activeItem === sub.name
                                    ? 'bg-blue-100 text-blue-600'
                                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                                }`}
                              >
                                {sub.name}
                              </button>
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <Link href={item.path}>
                  <button
                    onClick={() => setActiveItem(item.name)}
                    className={`w-full flex items-center justify-start px-3 py-2 rounded-lg transition-all duration-200 group focus:outline-none ${
                      activeItem === item.name
                        ? 'bg-blue-50 text-blue-600 border border-blue-200 shadow-sm'
                        : 'text-slate-700 hover:bg-slate-50 hover:shadow-sm hover:text-slate-900'
                    }`}
                  >
                    <span
                      className={`mr-3 flex-shrink-0 ${
                        activeItem === item.name ? 'text-blue-600' : 'text-slate-500'
                      }`}
                    >
                      {item.icon}
                    </span>
                    {!collapsed && <span className="font-medium text-sm tracking-wide">{item.name}</span>}
                  </button>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer - Logout */}
      <div className="p-4 border-t border-slate-200">
        <button className="w-full flex items-center justify-start px-3 py-2 rounded-lg text-sm transition-all duration-200 group text-slate-600 hover:bg-red-50 hover:text-red-600 hover:shadow-sm">
          <LogOut className="w-4 h-4 mr-3" />
          <AnimatePresence>
            {!collapsed && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.25 }}
              >
                Logout
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>
    </motion.aside>
  );
};

export default DashboardSlidebar;
