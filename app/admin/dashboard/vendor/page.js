'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Plus, Edit, Trash, LogOut } from 'lucide-react';

const VendorPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const vendors = [
    { name: 'ABC Constructions', email: 'abc@constructions.com', code: 'VEND-0001', taxNo: '8855', gstin: '526FDF555D', type: 'General Contractor', address: '123 Builder Lane, Mumbai, MH' },
    { name: 'XYZ Suppliers', email: 'xyz@suppliers.in', code: 'VEND-0002', taxNo: '455', gstin: '4554DFG555', type: 'Subcontractor', address: '45 Supply Road, Bengaluru, KA' },
    { name: 'Reliable Steel Traders', email: 'sales@reliablesteel.co.in', code: 'VEND-0003', taxNo: 'AABC1234E', gstin: '27AABC1234E1Z5', type: 'General Contractor', address: 'Plot No. 102, MIDC Industrial Area, Taloja, Navi Mumbai, Maharashtra - 410208' },
    { name: 'Modern Electricals & Co.', email: 'contact@modernel.com', code: 'VEND-0004', taxNo: 'ABCFM5678', gstin: '27ABCFM5678G12Z', type: 'Subcontractor', address: 'Shop 45, Vashi Plaza, Sector 17, Vashi, Navi Mumbai, Maharashtra - 400703' },
    { name: 'Shakti Constructions Pvt Ltd', email: 'info@shakti.com', code: 'VEND-0005', taxNo: 'TAX1001', gstin: 'GSTIN001AAA', type: 'Electrical Contractor', address: 'Pune, Maharashtra' },
    { name: 'Bright Electricals', email: 'sales@brightel.com', code: 'VEND-0006', taxNo: 'TAX1002', gstin: 'GSTIN002BBB', type: 'Plumbing Contractor', address: 'Nashik, Maharashtra' },
    { name: 'AquaFlow Plumbing Works', email: 'contact@aquafl.com', code: 'VEND-0007', taxNo: 'TAX1003', gstin: 'GSTIN003CCC', type: 'Subcontractor', address: 'Shop 45, Vashi Plaza, Sector 17, Vashi, Navi Mumbai, Maharashtra - 400703' },
    { name: 'CoolAir HVAC Solutions', email: 'hvac@coolair.com', code: 'VEND-0008', taxNo: 'TAX1004', gstin: 'GSTIN004DDD', type: 'Vendor', address: 'Mumbai, Maharashtra' },
    { name: 'RoofGuard Services', email: 'support@roofguard.com', code: 'VEND-0009', taxNo: 'TAX1005', gstin: 'GSTIN005EEE', type: 'Vendor', address: 'Pune, Maharashtra' },
  ];

  const filteredVendors = vendors.filter(vendor =>
    vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vendor.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <motion.div 
        className="bg-white w-64 h-full border-r border-slate-200 flex flex-col shadow-sm"
        initial={{ x: -250 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="p-6 border-b border-slate-200">
          <Link href="/" className="flex items-center group">
            <div className="bg-slate-900 h-7 w-7 rounded-md flex items-center justify-center group-hover:bg-slate-800 transition-colors duration-300">
              <span className="text-white font-extrabold text-sm">SS</span>
            </div>
            <motion.div 
              className="ml-2 min-w-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <span className="font-extrabold text-lg text-slate-900 group-hover:text-slate-700 transition-colors duration-300 truncate">
                SkyStruct
              </span>
            </motion.div>
          </Link>
        </div>
        <nav className="flex-1 overflow-y-auto py-4">
          <div className="px-6 space-y-2">
            <Link href="/vendor" className="flex items-center px-4 py-3 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-slate-900 hover:shadow-sm transition-all duration-300">
              <Search className="w-6 h-6 text-slate-500 mr-2" />
              <span className="font-extrabold text-base">Vendor</span>
            </Link>
            <Link href="/projects" className="flex items-center px-4 py-3 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-slate-900 hover:shadow-sm transition-all duration-300">
              <Search className="w-6 h-6 text-slate-500 mr-2" />
              <span className="font-extrabold text-base">Projects</span>
            </Link>
            <Link href="/logout" className="flex items-center px-4 py-3 rounded-lg text-slate-700 hover:bg-red-50 hover:text-red-700 hover:shadow-sm transition-all duration-300">
              <LogOut className="w-6 h-6 text-slate-500 mr-2" />
              <span className="font-extrabold text-base">Logout</span>
            </Link>
          </div>
        </nav>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 p-10 overflow-y-auto">
        <div className="max-w-6xl bg-white rounded-xl shadow-lg p-8 border border-slate-200">
          <div className="flex items-center justify-between mb-8">
            <h1 className="font-extrabold text-3xl text-slate-900">Vendor</h1>
            <div className="flex space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
                />
                <Search className="absolute left-3 top-2 w-5 h-5 text-slate-400" />
              </div>
              <motion.button
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Plus className="w-5 h-5 mr-2" /> Add Vendor
              </motion.button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVendors.map((vendor, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-4 rounded-lg border border-slate-200 hover:bg-white hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-gray-600">{vendor.name.split(' ')[0][0] + (vendor.name.split(' ')[1] || '')[0]}</span>
                  </div>
                  <div>
                    <h3 className="font-extrabold text-xl text-slate-900">{vendor.name}</h3>
                    <p className="text-sm text-slate-500">{vendor.email}</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <p><span className="font-semibold">Vendor Code:</span> {vendor.code}</p>
                  <p><span className="font-semibold">Tax No.:</span> {vendor.taxNo}</p>
                  <p><span className="font-semibold">GSTIN No.:</span> {vendor.gstin}</p>
                  <p><span className="font-semibold">Vendor Type:</span> {vendor.type}</p>
                  <p><span className="font-semibold">Address:</span> {vendor.address}</p>
                </div>
                <div className="flex space-x-2 mt-4">
                  <motion.button
                    className="p-2 bg-yellow-100 text-yellow-600 rounded-full hover:bg-yellow-200 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Edit className="w-4 h-4" />
                  </motion.button>
                  <motion.button
                    className="p-2 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Trash className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorPage;