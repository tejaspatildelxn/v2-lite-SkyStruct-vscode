'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Grid, List, Search } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    name: 'Granite Horizon',
    location: 'Navi Mumbai',
    status: 'In Design',
    duration: 811,
    budget: 'INR 1.00 B',
    approvedPayment: 'INR 1.31 M',
    elapsed: 111,
    remaining: 700,
    logo: 'https://via.placeholder.com/80',
  },
  {
    id: 2,
    name: 'Skyline Corporate Tower',
    location: 'Vashi, Navi Mumbai, Maharashtra',
    status: 'In Planning',
    duration: 365,
    budget: 'INR 1.50 B',
    approvedPayment: 'INR 0',
    elapsed: 40,
    remaining: 325,
    logo: 'https://via.placeholder.com/80',
  },
  {
    id: 3,
    name: 'ConstructHub',
    location: 'Nerul',
    status: 'In Tender',
    duration: 365,
    budget: 'INR 1.00 M',
    approvedPayment: 'INR 0',
    elapsed: 13,
    remaining: 352,
    logo: 'https://via.placeholder.com/80',
  },
  {
    id: 4,
    name: 'Green City Apartments',
    location: 'Nagpur, Maharashtra',
    status: 'In Planning',
    duration: 365,
    budget: 'INR 500.00 M',
    approvedPayment: 'INR 0',
    elapsed: 9,
    remaining: 356,
    logo: 'https://via.placeholder.com/80',
  },
];

const tabs = [
  'All',
  'In Planning',
  'In Design',
  'In Tender',
  'Under Construction',
  'Completed',
  'On Hold',
  'Cancelled',
];

const ProjectsPage = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [view, setView] = useState('grid');

  return (
    <div className="flex-1 bg-white p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Tabs (Evenly spaced, modern look) */}
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`w-full py-2 text-sm font-medium rounded-lg transition-all ${
                activeTab === tab
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Search + View Toggle */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-2.5 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search projects by name, location, or status..."
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 text-sm shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            />
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setView('grid')}
              className={`p-2 rounded-lg border transition-all ${
                view === 'grid'
                  ? 'bg-blue-50 border-blue-400 text-blue-600 shadow-sm'
                  : 'border-slate-200 text-slate-500 hover:bg-slate-50'
              }`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setView('list')}
              className={`p-2 rounded-lg border transition-all ${
                view === 'list'
                  ? 'bg-blue-50 border-blue-400 text-blue-600 shadow-sm'
                  : 'border-slate-200 text-slate-500 hover:bg-slate-50'
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Project Cards */}
        <div
          className={
            view === 'grid'
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'
              : 'space-y-4'
          }
        >
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              className="border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all bg-white group"
              whileHover={{ y: -5 }}
            >
              {/* Project Header */}
              <div className="flex flex-col items-center text-center mb-4">
                <motion.img
                  src={project.logo}
                  alt={project.name}
                  className="w-16 h-16 rounded-lg mb-3 object-cover shadow-md group-hover:scale-105 transition-transform"
                  whileHover={{ rotate: 2 }}
                />
                <h2 className="font-bold text-lg text-slate-900">
                  {project.name}
                </h2>
                <p className="text-sm text-slate-500">{project.location}</p>
                <span className="mt-2 inline-block text-xs font-semibold px-3 py-1 bg-blue-50 text-blue-600 rounded-full shadow-sm">
                  {project.status}
                </span>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-y-4 text-sm text-slate-800">
                <div>
                  <p className="text-xs text-slate-500">Duration</p>
                  <p className="font-semibold">{project.duration} Days</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Budget</p>
                  <p className="font-semibold">{project.budget}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Approved Payment</p>
                  <p className="font-semibold">{project.approvedPayment}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Elapsed / Remaining</p>
                  <p className="font-semibold">
                    {project.elapsed} / {project.remaining}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
