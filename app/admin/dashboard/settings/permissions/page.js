'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Eye, Pencil, Plus } from "lucide-react";

const roles = [
  { name: "Project Admin", key: "PROJECT_ADMIN", status: "Active" },
  { name: "Consultant", key: "Consultant", status: "Active" },
  { name: "Approver", key: "Approver", status: "Active" },
  { name: "Contractor", key: "Contractor", status: "Active" },
];

const tabs = [
  "Role Permission",
  "User Permission",
  "Approval Workflow",
  "Dashboard Permission",
];

export default function PermissionsPage() {
  const [activeTab, setActiveTab] = useState("Role Permission");
  const [search, setSearch] = useState("");

  const filteredRoles = roles.filter(
    (role) =>
      role.name.toLowerCase().includes(search.toLowerCase()) ||
      role.key.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Tabs */}
      <div className="flex gap-6 border-b border-gray-200 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 text-sm font-medium transition ${
              activeTab === tab
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-blue-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <h1 className="text-xl font-bold text-gray-800">{activeTab}</h1>

        <div className="flex-1 max-w-md w-full relative">
          <Search className="absolute left-3 top-3 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search role..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        <button className="p-2 rounded-xl bg-green-100 hover:bg-green-200 transition shadow">
          <Plus className="text-green-600" />
        </button>
      </div>

      {/* Role List */}
      <div className="space-y-4">
        {filteredRoles.map((role, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition"
          >
            {/* Role Info */}
            <div>
              <p className="text-sm">
                <span className="font-medium">Role Name:</span>{" "}
                <span className="text-gray-800">{role.name}</span>
              </p>
              <p className="text-sm text-gray-500">
                <span className="font-medium">Role Key:</span> {role.key}
              </p>
            </div>

            {/* Actions + Status */}
            <div className="flex items-center gap-3">
              <button className="p-2 rounded-lg bg-yellow-100 hover:bg-yellow-200 transition">
                <Pencil className="text-yellow-600" size={16} />
              </button>
              <button className="p-2 rounded-lg bg-blue-100 hover:bg-blue-200 transition">
                <Eye className="text-blue-600" size={16} />
              </button>
              <span className="px-3 py-1 text-xs font-medium text-green-600 bg-green-100 rounded-full">
                {role.status}
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
