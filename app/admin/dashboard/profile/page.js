// components/ProfilePage.jsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [isEditing, setIsEditing] = useState(false);

  const userData = {
    name: 'Alan David',
    email: 'alan.david@skystruct.com',
    position: 'Project Manager',
    department: 'Construction Management',
    phone: '+91 98765 43210',
    joinDate: '15 Mar 2022',
    employeeId: 'SKY-EMP-2287',
    address: '123 Construction Avenue, Mumbai, Maharashtra - 400001',
    bio: 'Experienced project manager with 8+ years in construction industry. Specialized in high-rise commercial projects and resource management.'
  };

  const projects = [
    {
      name: 'Grantee Horizon',
      location: 'Next Mumbai',
      status: 'In Design',
      duration: '811 Days',
      budget: 'INR 1.00 B',
      approvedPayment: 'INR 1.31 M',
      daysElapsed: '111',
      daysRemaining: '700'
    },
    {
      name: 'SkyTower Commercial Hub',
      location: 'Mumbai, Maharashtra',
      status: 'In Planning',
      duration: '365 Days',
      budget: 'INR 1.50 B',
      approvedPayment: 'INR 0',
      daysElapsed: '40',
      daysRemaining: '325'
    },
    {
      name: 'Skyline Corporate Tower',
      location: 'Vashti, Navi Mumbai, Maharashtra',
      status: 'In Planning',
      duration: '365 Days',
      budget: 'INR 1.00 M',
      approvedPayment: 'INR 0',
      daysElapsed: '13',
      daysRemaining: '352'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-slate-900 mb-2">User Profile</h1>
          <p className="text-slate-600">Manage your personal information and account settings</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Sidebar - Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              {/* Profile Header */}
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  AD
                </div>
                <h2 className="text-xl font-semibold text-slate-900 mb-1">{userData.name}</h2>
                <p className="text-blue-600 font-medium">{userData.position}</p>
                <p className="text-slate-500 text-sm">{userData.department}</p>
              </div>

              {/* Profile Details */}
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-slate-600 block mb-1">Email</label>
                  <p className="text-slate-900">{userData.email}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-600 block mb-1">Phone</label>
                  <p className="text-slate-900">{userData.phone}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-600 block mb-1">Employee ID</label>
                  <p className="text-slate-900">{userData.employeeId}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-600 block mb-1">Join Date</label>
                  <p className="text-slate-900">{userData.joinDate}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-600 block mb-1">Address</label>
                  <p className="text-slate-900 text-sm">{userData.address}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 space-y-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsEditing(!isEditing)}
                  className="w-full bg-blue-600 text-white py-2.5 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  {isEditing ? 'Save Changes' : 'Edit Profile'}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full border border-slate-300 text-slate-700 py-2.5 px-4 rounded-lg font-medium hover:border-blue-400 hover:text-blue-600 transition-colors"
                >
                  Change Password
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            {/* Tabs */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 mb-6">
              <div className="flex border-b border-slate-200">
                {['personal', 'projects', 'settings', 'activity'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-4 font-medium text-sm transition-colors ${
                      activeTab === tab
                        ? 'text-blue-600 border-b-2 border-blue-600'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)} Info
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="p-6">
                {activeTab === 'personal' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <label className="text-sm font-medium text-slate-600 block mb-2">Full Name</label>
                        <input
                          type="text"
                          defaultValue={userData.name}
                          disabled={!isEditing}
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-slate-100 disabled:text-slate-500"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-slate-600 block mb-2">Email</label>
                        <input
                          type="email"
                          defaultValue={userData.email}
                          disabled={!isEditing}
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-slate-100 disabled:text-slate-500"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-slate-600 block mb-2">Phone</label>
                        <input
                          type="tel"
                          defaultValue={userData.phone}
                          disabled={!isEditing}
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-slate-100 disabled:text-slate-500"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-slate-600 block mb-2">Position</label>
                        <input
                          type="text"
                          defaultValue={userData.position}
                          disabled={!isEditing}
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-slate-100 disabled:text-slate-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-600 block mb-2">Bio</label>
                      <textarea
                        defaultValue={userData.bio}
                        disabled={!isEditing}
                        rows={3}
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-slate-100 disabled:text-slate-500"
                      />
                    </div>
                  </motion.div>
                )}

                {activeTab === 'projects' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Assigned Projects</h3>
                    <div className="space-y-4">
                      {projects.map((project, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ y: -2 }}
                          className="bg-slate-50 rounded-xl p-4 border border-slate-200 hover:shadow-sm transition-all"
                        >
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h4 className="font-semibold text-slate-900">{project.name}</h4>
                              <p className="text-sm text-slate-600">{project.location}</p>
                            </div>
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                              {project.status}
                            </span>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div>
                              <p className="text-slate-600">Duration</p>
                              <p className="font-semibold text-slate-900">{project.duration}</p>
                            </div>
                            <div>
                              <p className="text-slate-600">Budget</p>
                              <p className="font-semibold text-slate-900">{project.budget}</p>
                            </div>
                            <div>
                              <p className="text-slate-600">Approved</p>
                              <p className="font-semibold text-slate-900">{project.approvedPayment}</p>
                            </div>
                            <div>
                              <p className="text-slate-600">Progress</p>
                              <p className="font-semibold text-slate-900">
                                {project.daysElapsed} / {project.daysRemaining} days
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Recent Activity</h3>
              <div className="space-y-3">
                {[
                  'Updated project timeline for Grantee Horizon',
                  'Approved vendor payment for SkyTower materials',
                  'Created new project: Green City Apartments',
                  'Completed safety inspection at Skyline site'
                ].map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center p-3 bg-slate-50 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-sm text-slate-700">{activity}</span>
                    <span className="ml-auto text-xs text-slate-500">2h ago</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;