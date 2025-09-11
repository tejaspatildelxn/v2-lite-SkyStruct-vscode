'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Pencil, Trash2, Plus, Filter, Calendar } from "lucide-react";

const schedules = [
  {
    report: "Weekly RFI Summary",
    module: "RFI",
    project: "Granite Horizon",
    frequency: "Weekly",
    nextRun: "2025-09-15 09:00 AM",
    status: "Active",
  },
  {
    report: "Monthly BOQ Update",
    module: "BOQ",
    project: "Granite Horizon",
    frequency: "Monthly",
    nextRun: "2025-10-01 06:00 PM",
    status: "Active",
  },
  {
    report: "Daily Activity Log",
    module: "Activity",
    project: "Granite Horizon",
    frequency: "Daily",
    nextRun: "2025-09-11 08:00 AM",
    status: "Paused",
  },
];

export default function ScheduleReportPage() {
  const [search, setSearch] = useState("");

  const filteredSchedules = schedules.filter(
    (s) =>
      s.report.toLowerCase().includes(search.toLowerCase()) ||
      s.module.toLowerCase().includes(search.toLowerCase()) ||
      s.project.toLowerCase().includes(search.toLowerCase()) ||
      s.frequency.toLowerCase().includes(search.toLowerCase())
  );

  // Status colors
  const statusColors = {
    Active: "bg-green-100 text-green-600",
    Paused: "bg-gray-200 text-gray-700",
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <h1 className="text-xl font-bold text-gray-800">Schedule Reports</h1>

        {/* Search */}
        <div className="flex-1 max-w-md w-full relative">
          <Search className="absolute left-3 top-3 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search schedules..."
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

      {/* Schedule List */}
      <div className="space-y-4">
        {filteredSchedules.map((s, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition"
          >
            {/* Info */}
            <div>
              <p className="text-sm font-medium text-gray-800 flex items-center gap-2">
                <Calendar className="text-gray-500" size={16} />
                {s.report}
              </p>
              <p className="text-sm text-gray-500">
                <span className="font-medium">Module:</span> {s.module}
              </p>
              <p className="text-sm text-gray-500">
                <span className="font-medium">Project:</span> {s.project}
              </p>
              <p className="text-sm text-gray-500">
                <span className="font-medium">Frequency:</span> {s.frequency}
              </p>
              <p className="text-sm text-gray-500">
                <span className="font-medium">Next Run:</span> {s.nextRun}
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
                  statusColors[s.status] || "bg-gray-100 text-gray-600"
                }`}
              >
                {s.status}
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
