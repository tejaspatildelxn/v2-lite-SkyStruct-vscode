'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Search, Inbox, Send, Star, Trash2, FileText } from 'lucide-react';

const folders = [
  { name: 'Inbox', icon: Inbox, count: 12 },
  { name: 'Sent', icon: Send, count: 5 },
  { name: 'Drafts', icon: FileText, count: 2 },
  { name: 'Starred', icon: Star, count: 3 },
  { name: 'Trash', icon: Trash2, count: 0 },
];

const mails = [
  {
    id: 1,
    sender: 'Mahesh Patil',
    subject: 'Project Horizon Update',
    preview: 'Please find the attached project updates for review...',
    time: '2:30 PM',
    unread: true,
  },
  {
    id: 2,
    sender: 'Alan David',
    subject: 'Meeting Invitation',
    preview: 'You are invited to the project alignment meeting...',
    time: '11:10 AM',
    unread: false,
  },
  {
    id: 3,
    sender: 'SkyStruct HR',
    subject: 'Policy Changes',
    preview: 'We have updated our organization leave policies...',
    time: 'Yesterday',
    unread: false,
  },
];

const OrganizationMail = () => {
  const [activeFolder, setActiveFolder] = useState('Inbox');

  return (
    <div className="flex-1 bg-white h-screen flex">
      {/* Left Folders Sidebar */}
      <div className="w-60 border-r border-slate-200 p-4 bg-slate-50">
        <button className="flex items-center gap-2 w-full px-4 py-2 mb-6 rounded-xl bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-all">
          <Plus className="w-4 h-4" />
          Compose Mail
        </button>

        <div className="space-y-2">
          {folders.map(({ name, icon: Icon, count }) => (
            <button
              key={name}
              onClick={() => setActiveFolder(name)}
              className={`flex items-center justify-between w-full px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                activeFolder === name
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <span className="flex items-center gap-2">
                <Icon className="w-4 h-4" />
                {name}
              </span>
              {count > 0 && (
                <span className="text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full">
                  {count}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Main Mail Section */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
          <h2 className="text-lg font-semibold text-slate-800">{activeFolder}</h2>
          <div className="relative w-80">
            <Search className="absolute left-3 top-2.5 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search mails..."
              className="w-full pl-11 pr-4 py-2 rounded-lg border border-slate-200 shadow-sm text-sm focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>
        </div>

        {/* Mail List */}
        <div className="flex-1 overflow-y-auto">
          {mails.map((mail) => (
            <motion.div
              key={mail.id}
              className={`flex items-center justify-between px-6 py-4 border-b border-slate-100 hover:bg-slate-50 cursor-pointer transition-all ${
                mail.unread ? 'bg-blue-50' : ''
              }`}
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex flex-col">
                <span className="font-semibold text-slate-800">
                  {mail.sender}
                </span>
                <span className="text-sm text-slate-700 font-medium truncate">
                  {mail.subject}
                </span>
                <span className="text-xs text-slate-500 truncate">
                  {mail.preview}
                </span>
              </div>
              <span className="text-xs text-slate-500">{mail.time}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrganizationMail;
