'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Home,
  Users,
  Calendar,
  CreditCard,
  FileText,
  Package,
  CheckCircle,
  BarChart3,
  Folder,
  Clock,
  CheckSquare,
  FileCheck,
  MessageSquare,
  RotateCcw,
  Eye,
  PieChart,AlertCircle
} from "lucide-react";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock data for dashboard stats
  const projectStats = [
    { label: "Total Projects", value: 50, icon: Folder, change: "+5%" },
    { label: "In Progress", value: 25, icon: AlertCircle, change: "+2%" },
    { label: "Completed", value: 15, icon: CheckSquare, change: "+3%" },
    { label: "Total Budget", value: "INR 10M", icon: CreditCard, change: "+10%" },
  ];

  return (
    <div className="h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-3xl shadow-xl border border-gray-200 mx-6 mt-6">
        <div className="flex items-center gap-6">
          <h1 className="text-xl font-bold text-gray-800 max-w-[200px] truncate">Granite Horizon Very Long Project Name</h1>
        </div>
        
        <div className="flex items-center gap-6">
          {/* Navigation Tabs */}
          <nav className="flex space-x-1 bg-gray-100 rounded-xl p-1">
            {[
              { name: "Dashboard", icon: Home, tab: "overview" },
              { name: "Project Resources", icon: Users, tab: "resources" },
              { name: "Project Planning", icon: Calendar, tab: "planning" },
              { name: "Payment", icon: CreditCard, tab: "payment" },
              { name: "Work Order", icon: FileText, tab: "workorder" },
              { name: "Inventory", icon: Package, tab: "inventory" },
              { name: "Approvals", icon: CheckCircle, tab: "approvals" },
              { name: "Reports", icon: BarChart3, tab: "reports" },
            ].map(({ name, icon: Icon, tab }) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === tab
                    ? "bg-blue-100 text-blue-600"
                    : "text-gray-600 hover:text-gray-900 hover:bg-white"
                }`}
              >
                <Icon size={16} />
                <span>{name}</span>
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content - Full Screen */}
      <div className="flex-1 overflow-y-auto p-6">
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
                onClick={() => {}}
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

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Drawing Status Chart */}
          <motion.div
            whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white rounded-3xl shadow-xl border border-gray-200 p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-800">Drawing Status Chart</h2>
              <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                View All
              </button>
            </div>
            <div className="h-64 bg-gray-100 rounded-xl flex items-center justify-center">
              <div className="text-center text-gray-500">
                <PieChart size={40} className="mx-auto mb-2" />
                <p>Drawing status visualization</p>
              </div>
            </div>
          </motion.div>

          {/* Purchase Order Status Chart */}
          <motion.div
            whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white rounded-3xl shadow-xl border border-gray-200 p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-800">Purchase Order Status Chart</h2>
              <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                View All
              </button>
            </div>
            <div className="h-64 bg-gray-100 rounded-xl flex items-center justify-center">
              <div className="text-center text-gray-500">
                <BarChart3 size={40} className="mx-auto mb-2" />
                <p>Purchase order status visualization</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Recent Activity */}
        <motion.div
          whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-white rounded-3xl shadow-xl border border-gray-200 p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-800">Recent Activity</h2>
            <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Clock size={18} className="text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800">New RFI created</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                  Completed
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}