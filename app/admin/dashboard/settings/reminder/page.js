'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Pencil, Trash2, Plus, Filter, Clock } from "lucide-react";

const reminders = [
  { title: "Submit RFI Report", date: "2025-09-15 10:00 AM", project: "Granite Horizon", status: "Upcoming" },
  { title: "Client Meeting", date: "2025-09-12 02:00 PM", project: "Granite Horizon", status: "Overdue" },
  { title: "Submittal Review", date: "2025-09-20 11:00 AM", project: "Granite Horizon", status: "Upcoming" },
  { title: "Activity Deadline", date: "2025-09-09 05:00 PM", project: "Granite Horizon", status: "Completed" },
];

export default function ReminderPage() {
  const [search, setSearch] = useState("");

  const filteredReminders = reminders.filter(
    (reminder) =>
      reminder.title.toLowerCase().includes(search.toLowerCase()) ||
      reminder.project.toLowerCase().includes(search.toLowerCase()) ||
      reminder.status.toLowerCase().includes(search.toLowerCase())
  );

  // Status colors
  const statusColors = {
    Upcoming: "bg-blue-100 text-blue-600",
    Completed: "bg-green-100 text-green-600",
    Overdue: "bg-red-100 text-red-600",
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <h1 className="text-xl font-bold text-gray-800">Reminders</h1>

        {/* Search */}
        <div className="flex-1 max-w-md w-full relative">
          <Search className="absolute left-3 top-3 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search reminders..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        {/* Controls */}
        <div className="flex gap-2">
          <button className="p-2 rounded-xl bg-green-100 hover:bg-green-200 transition shadow">
            <Plus className="text-green-600" />
          </button>
          <button className="p-2 rounded-xl bg-blue-100 hover:bg-blue-200 transition shadow">
            <Filter className="text-blue-600" />
          </button>
        </div>
      </div>

      {/* Reminder List */}
      <div className="space-y-4">
        {filteredReminders.map((reminder, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition"
          >
            {/* Reminder Info */}
            <div>
              <p className="text-sm font-medium text-gray-800 flex items-center gap-2">
                <Clock className="text-gray-500" size={16} />
                {reminder.title}
              </p>
              <p className="text-sm text-gray-500">
                <span className="font-medium">Date:</span> {reminder.date}
              </p>
              <p className="text-sm text-gray-500">
                <span className="font-medium">Project:</span> {reminder.project}
              </p>
            </div>

            {/* Actions + Status */}
            <div className="flex items-center gap-3">
              <button className="p-2 rounded-lg bg-yellow-100 hover:bg-yellow-200 transition">
                <Pencil className="text-yellow-600" size={16} />
              </button>
              <button className="p-2 rounded-lg bg-red-100 hover:bg-red-200 transition">
                <Trash2 className="text-red-600" size={16} />
              </button>
              <span
                className={`px-3 py-1 text-xs font-medium rounded-full ${
                  statusColors[reminder.status] || "bg-gray-100 text-gray-600"
                }`}
              >
                {reminder.status}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-8 text-sm">
        <button className="px-3 py-1 rounded-lg border text-gray-600 hover:bg-gray-100">
          Previous
        </button>
        <span className="px-3 py-1 rounded-lg bg-blue-500 text-white">1</span>
        <button className="px-3 py-1 rounded-lg border text-gray-600 hover:bg-gray-100">
          Next
        </button>
      </div>
    </div>
  );
}
