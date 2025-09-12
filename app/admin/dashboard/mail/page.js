'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, Inbox, Send, Star, Trash2, FileText, Plus, X
} from 'lucide-react';

const OrganizationMail = () => {
  const [activeFolder, setActiveFolder] = useState('Inbox');
  const [searchTerm, setSearchTerm] = useState('');
  const [isComposing, setIsComposing] = useState(false);
  const [newMail, setNewMail] = useState({ recipient: '', subject: '', body: '' });

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

  const mailStats = [
    { label: 'Total Mails', value: '20', change: '+2', icon: Inbox },
    { label: 'Unread Mails', value: '12', change: '+1', icon: FileText },
    { label: 'Sent Mails', value: '5', change: '+0', icon: Send },
    { label: 'Starred Mails', value: '3', change: '+0', icon: Star },
  ];

  const filteredMails = mails.filter((mail) =>
    (mail.sender.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mail.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mail.preview.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (activeFolder === 'Inbox' || mail[activeFolder.toLowerCase()])
  );

  const getIconColor = (label) => {
    switch (label) {
      case 'Total Mails':
        return 'text-blue-600';
      case 'Unread Mails':
        return 'text-green-600';
      case 'Sent Mails':
        return 'text-purple-600';
      case 'Starred Mails':
        return 'text-orange-600';
      default:
        return 'text-gray-700';
    }
  };

  const openComposeModal = () => {
    setIsComposing(true);
    setNewMail({ recipient: '', subject: '', body: '' });
  };

  const closeComposeModal = () => {
    setIsComposing(false);
  };

  const handleComposeChange = (e) => {
    const { name, value } = e.target;
    setNewMail((prev) => ({ ...prev, [name]: value }));
  };

  const sendMail = () => {
    if (!newMail.recipient || !newMail.subject || !newMail.body) {
      alert('All fields are required.');
      return;
    }
    // Simulate sending mail (in a real app, this would be an API call)
    console.log('Sending mail:', newMail);
    closeComposeModal();
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
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Organization Mail</h1>
              <p className="text-gray-600">Manage your organization communications</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative w-64">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search mails..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-6 py-3 border-2 border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 font-medium placeholder:text-gray-400 text-gray-700"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openComposeModal}
                className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-5 py-3 rounded-xl font-medium hover:from-blue-600 hover:to-blue-700 transition-all shadow-md hover:shadow-lg"
              >
                <Plus className="w-4 h-4" />
                <span>Compose Mail</span>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {mailStats.map((stat, i) => {
            const Icon = stat.icon;

            return (
              <motion.div
                whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
                transition={{ type: 'spring', stiffness: 300 }}
                key={i}
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

        {/* Main Content */}
        <div className="flex bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
          {/* Left Folders Sidebar */}
          <div className="w-60 border-r border-gray-200 p-4 bg-gray-50">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openComposeModal}
              className="flex items-center gap-2 w-full px-4 py-3 mb-6 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold shadow-md hover:from-blue-600 hover:to-blue-700 transition-all"
            >
              <Plus className="w-4 h-4" />
              Compose Mail
            </motion.button>

            <div className="space-y-2">
              {folders.map(({ name, icon: Icon, count }) => (
                <motion.button
                  key={name}
                  onClick={() => setActiveFolder(name)}
                  whileHover={{ scale: 1.02 }}
                  className={`flex items-center justify-between w-full px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeFolder === name
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
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
                </motion.button>
              ))}
            </div>
          </div>

          {/* Mail List */}
          <div className="flex-1 flex flex-col">
            <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
              <h2 className="text-lg font-semibold text-gray-900">{activeFolder}</h2>
            </div>
            <div className="flex-1 overflow-y-auto">
              {filteredMails.map((mail) => (
                <motion.div
                  key={mail.id}
                  className={`flex items-center justify-between px-6 py-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-all ${
                    mail.unread ? 'bg-blue-50' : ''
                  }`}
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="flex flex-col">
                    <span className="font-bold text-gray-900">{mail.sender}</span>
                    <span className="text-sm text-gray-700 font-semibold truncate max-w-md">
                      {mail.subject}
                    </span>
                    <span className="text-sm text-gray-500 truncate max-w-md">
                      {mail.preview}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500 font-medium">{mail.time}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Compose Mail Modal */}
        <AnimatePresence>
          {isComposing && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="bg-white rounded-3xl shadow-xl p-8 max-w-md w-full mx-4"
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Compose Mail</h2>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={closeComposeModal}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="w-6 h-6" />
                  </motion.button>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Recipient</label>
                    <input
                      type="email"
                      name="recipient"
                      value={newMail.recipient}
                      onChange={handleComposeChange}
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900 font-semibold"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={newMail.subject}
                      onChange={handleComposeChange}
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900 font-semibold"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Body</label>
                    <textarea
                      name="body"
                      value={newMail.body}
                      onChange={handleComposeChange}
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900 font-semibold resize-none h-32"
                    />
                  </div>
                </div>
                <div className="flex justify-end gap-4 mt-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={closeComposeModal}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-300 transition-all"
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={sendMail}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all shadow-md hover:shadow-lg"
                  >
                    Send
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default OrganizationMail;