'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Users, Filter, Pencil } from 'lucide-react';

const members = [
  {
    id: 1,
    name: 'Alan David',
    email: 'vipap4378@acedby.com',
    role: 'Project Admin',
    lastLogin: '10 Sep 2025 6:28 PM',
    projects: [
      'ConstructHub',
      'Granite Horizon',
      'Green City Apartments',
      'Skyline Corporate Tower',
      'SkyTower Commercial Hub',
    ],
    status: 'Active',
    avatar: '/avatars/alan.png',
  },
  {
    id: 2,
    name: 'Mukesh Sinha',
    email: 'vikashoffice38@gmail.com',
    role: 'Consultant',
    lastLogin: '29 Jul 2025 12:32 PM',
    projects: ['Granite Horizon'],
    status: 'Active',
    avatar: '/avatars/mukesh.png',
  },
  {
    id: 3,
    name: 'Vicky',
    email: 'viyjp3112@acedby.com',
    role: 'Contractor',
    lastLogin: 'Not logged in yet',
    projects: ['Granite Horizon'],
    status: 'Active',
    avatar: '/avatars/vicky.png',
  },
];

const MembersPage = () => {
  const [search, setSearch] = useState('');

  const filteredMembers = members.filter(
    (m) =>
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex-1 bg-white p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Members</h1>
        <div className="flex items-center gap-3">
          <div className="relative w-72">
            <input
              type="text"
              placeholder="Search members..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-4 pr-10 py-2 rounded-lg border border-slate-200 shadow-sm text-sm focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <Filter className="absolute right-3 top-2.5 w-5 h-5 text-slate-400" />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium shadow hover:bg-blue-700 transition">
            <Plus className="w-4 h-4" /> Add Member
          </button>
          <button className="p-2 rounded-lg border border-slate-200 hover:bg-slate-100 transition">
            <Users className="w-4 h-4 text-slate-600" />
          </button>
        </div>
      </div>

      {/* Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMembers.map((member) => (
          <motion.div
            key={member.id}
            whileHover={{ scale: 1.02 }}
            className="p-5 rounded-xl border border-slate-200 shadow-sm bg-white hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-start gap-4">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-12 h-12 rounded-full object-cover border"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h2 className="font-semibold text-slate-900">{member.name}</h2>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700">
                    {member.status}
                  </span>
                </div>
                <p className="text-sm text-slate-600">{member.email}</p>
              </div>
              <button className="p-2 rounded-md hover:bg-slate-100">
                <Pencil className="w-4 h-4 text-slate-500" />
              </button>
            </div>

            <div className="mt-3 space-y-1">
              <p className="text-sm">
                <span className="font-medium text-slate-700">Role:</span>{' '}
                {member.role}
              </p>
              <p className="text-sm">
                <span className="font-medium text-slate-700">Last Login:</span>{' '}
                {member.lastLogin}
              </p>
              <p className="text-sm">
                <span className="font-medium text-slate-700">Projects:</span>
              </p>
              <div className="flex flex-wrap gap-2 mt-1">
                {member.projects.map((p, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 rounded-md bg-slate-100 text-slate-700"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MembersPage;
