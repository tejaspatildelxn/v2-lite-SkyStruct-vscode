'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search, Grid3X3, List, Filter, ChevronRight,
  User, Briefcase, Building2, Settings, Clock, Target, DollarSign
} from 'lucide-react';

const ProjectsPage = () => {
  const [activeTab, setActiveTab] = useState('All Projects');
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);

  const projectStats = [
    { label: 'Total Projects', value: '24', change: '+12%', icon: Briefcase },
    { label: 'In Progress', value: '8', change: '+3', icon: Clock },
    { label: 'Completed', value: '14', change: '+5', icon: Target },
    { label: 'Total Budget', value: '₹45.2B', change: '+18%', icon: DollarSign }
  ];

  const tabs = [
    { name: 'All Projects', count: 24 },
    { name: 'In Planning', count: 3 },
    { name: 'In Design', count: 4 },
    { name: 'In Progress', count: 8 },
    { name: 'Under Review', count: 2 },
    { name: 'Completed', count: 14 }
  ];

  const projects = [
    {
      id: 1,
      name: 'Granite Horizon - Premium Residential Complex',
      description: 'Premium residential complex with modern amenities and luxury lifestyle for families',
      location: 'Navi Mumbai, Maharashtra',
      status: 'In Design',
      priority: 'High',
      progress: 14,
      duration: 811,
      budget: 'INR 1.00 B',
      elapsed: 111,
      remaining: 700,
      manager: 'Raj Patel',
      team: 12,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop',
      icon: '🏗️',
      statusColor: 'bg-blue-100 text-blue-700 border-blue-200'
    },
    {
      id: 2,
      name: 'Skyline Corporate Tower',
      description: 'High-rise corporate office tower with eco-friendly design',
      location: 'Vashi, Navi Mumbai',
      status: 'In Planning',
      priority: 'Medium',
      progress: 5,
      duration: 365,
      budget: 'INR 1.50 B',
      elapsed: 40,
      remaining: 325,
      manager: 'Amit Sharma',
      team: 20,
      avatar: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=40&h=40&fit=crop',
      icon: '🏢',
      statusColor: 'bg-yellow-100 text-yellow-700 border-yellow-200'
    },
    {
      id: 3,
      name: 'ConstructHub Industrial Park',
      description: 'Large scale industrial park with logistics and warehouse support',
      location: 'Nerul, Maharashtra',
      status: 'In Progress',
      priority: 'High',
      progress: 45,
      duration: 540,
      budget: 'INR 2.00 B',
      elapsed: 240,
      remaining: 300,
      manager: 'Neha Gupta',
      team: 30,
      avatar: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=40&h=40&fit=crop',
      icon: '🏭',
      statusColor: 'bg-green-100 text-blue-700 border-blue-200'
    },
    {
      id: 4,
      name: 'Green City Apartments',
      description: 'Affordable housing apartments with modern facilities',
      location: 'Nagpur, Maharashtra',
      status: 'Completed',
      priority: 'Low',
      progress: 100,
      duration: 730,
      budget: 'INR 500.00 M',
      elapsed: 730,
      remaining: 0,
      manager: 'Karan Mehta',
      team: 15,
      avatar: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=40&h=40&fit=crop',
      icon: '🏠',
      statusColor: 'bg-purple-100 text-blue-700 border-blue-200'
    },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.status.toLowerCase().includes(searchTerm.toLowerCase());

    if (activeTab === 'All Projects') return matchesSearch;
    return matchesSearch && project.status === activeTab;
  });

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Low':
        return 'bg-green-100 text-green-700 border-green-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const handleStatClick = (label) => {
    if (label === 'Total Projects') setActiveTab('All Projects');
    if (label === 'In Progress') setActiveTab('In Progress');
    if (label === 'Completed') setActiveTab('Completed');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Projects Overview</h1>
              <p className="text-gray-600">Manage and track all your construction projects</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative w-64">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-6 py-3 border-2 border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 font-medium placeholder:text-gray-400 text-gray-700"
                />
              </div>
              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFilterOpen(!filterOpen)}
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-5 py-3 rounded-xl font-medium hover:from-blue-600 hover:to-blue-700 transition-all shadow-md hover:shadow-lg"
                >
                  <Filter className="w-4 h-4" />
                  <span>Process</span>
                </motion.button>
                {filterOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-20">
                    {tabs.map((tab) => (
                      <button
                        key={tab.name}
                        onClick={() => { setActiveTab(tab.name); setFilterOpen(false); }}
                        className={`flex items-center justify-between w-full px-4 py-2 text-sm ${activeTab === tab.name ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700 hover:bg-gray-50'}`}
                      >
                        {tab.name}
                        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">{tab.count}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex rounded-xl border-2 border-gray-300 p-1 bg-gray-100">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  <Grid3X3 className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  <List className="w-5 h-5" />
                </motion.button>
              </div>
              <div className="relative group">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-lg font-bold cursor-pointer shadow-lg hover:shadow-xl transition-all"
                >
                  AD
                </motion.div>
                <div className="absolute right-0 top-14 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors">
                    <User size={16} /> My Profile
                  </a>
                  <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors">
                    <Briefcase size={16} /> My Projects
                  </a>
                  <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors">
                    <Building2 size={16} /> Company
                  </a>
                  <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors">
                    <Settings size={16} /> Settings
                  </a>
                  <hr className="my-2 border-gray-200" />
                  <a href="#" className="flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    Log Out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {projectStats.map((stat, i) => {
            const Icon = stat.icon;

            // Pick theme color based on label
            const getIconColor = (label) => {
              switch (label) {
                case "Total Projects":
                  return "text-blue-600";
                case "In Progress":
                  return "text-orange-500";
                case "Completed":
                  return "text-green-600";
                case "Total Budget":
                  return "text-teal-600";
                default:
                  return "text-gray-700";
              }
            };

            return (
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                transition={{ type: "spring", stiffness: 300 }}
                key={i}
                onClick={() => handleStatClick(stat.label)}
                className="bg-white rounded-3xl shadow-xl border border-gray-200 p-6 flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center">
                    <Icon className={`w-7 h-7 ${getIconColor(stat.label)}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{stat.value}</h3>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                      {stat.label}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-medium text-green-600">{stat.change}</span>
              </motion.div>
            );
          })}
        </div>

        {/* Project Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={viewMode === 'grid' ? 'grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8' : 'space-y-6'}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
              transition={{ type: 'spring', stiffness: 300 }}
              className={`bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden ${viewMode === 'list' ? 'flex flex-col md:flex-row md:items-stretch p-6 gap-6' : 'flex flex-col'}`}
            >
              {/* Card Top - Changed to darker blue */}
              <div className="bg-blue-600 px-6 py-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/20 rounded-full translate-y-12 -translate-x-12"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl">
                      {project.icon}
                    </div>
                    <div className="max-w-[250px]">
                      <h3 className="font-bold text-xl text-white truncate">{project.name}</h3>
                      <p className="text-blue-100 text-sm truncate">{project.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border ${project.statusColor}`}>
                      {project.status}
                    </span>
                    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border ${getPriorityColor(project.priority)}`}>
                      {project.priority}
                    </span>
                  </div>
                </div>
              </div>
              <div className={`p-6 ${viewMode === 'list' ? 'flex flex-col justify-between w-full md:w-2/3' : 'flex-1'}`}>
                <div className="mb-4 max-w-[300px]">
                  <p className="text-gray-600 text-sm truncate">{project.description}</p>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center p-2">
                      <Clock className="w-5 h-5 text-gray-700 font-bold" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Duration</p>
                      <p className="text-gray-900 text-sm font-semibold">{project.duration}d</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center p-2">
                      <DollarSign className="w-5 h-5 text-gray-700 font-bold" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Budget</p>
                      <p className="text-gray-900 text-sm font-semibold">{project.budget}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center p-2">
                      <User className="w-5 h-5 text-gray-700 font-bold" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Team</p>
                      <p className="text-gray-900 text-sm font-semibold">{project.team}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center p-2">
                      <Target className="w-5 h-5 text-gray-700 font-bold" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Timeline</p>
                      <p className="text-gray-900 text-sm font-semibold">{project.elapsed}d/{project.remaining}d</p>
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-gray-500 font-medium uppercase tracking-wide">Progress</span>
                    <span className="text-gray-700 font-semibold">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div style={{ width: `${project.progress}%` }} className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full" />
                  </div>
                </div>
                <div className={`flex items-center ${viewMode === 'list' ? 'justify-between' : 'justify-between'}`}>
                  <div className="flex items-center gap-3">
                    <img src={project.avatar} alt={project.manager} className="w-10 h-10 rounded-full border border-gray-200" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">{project.manager}</p>
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Manager</p>
                    </div>
                  </div>

                  {/* View button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all shadow-md hover:shadow-lg"
                  >
                    View <ChevronRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsPage;