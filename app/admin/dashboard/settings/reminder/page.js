'use client';

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reminders = [
  { 
    id: 1,
    subject: "adsq", 
    moduleName: "RFI", 
    projectName: "Granite Horizon"
  },
  { 
    id: 2,
    subject: "Activity Expired", 
    moduleName: "Activity", 
    projectName: "Granite Horizon"
  },
  { 
    id: 3,
    subject: "Document Review", 
    moduleName: "Documents", 
    projectName: "Granite Horizon"
  },
  { 
    id: 4,
    subject: "Meeting Scheduled", 
    moduleName: "Calendar", 
    projectName: "Granite Horizon"
  }
];

export default function RemindersPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;
  const totalPages = Math.ceil(reminders.length / itemsPerPage);

  const currentReminders = reminders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Reminders</h1>
        <p className="text-gray-600 mt-1">Manage your system reminders</p>
      </div>

      {/* Reminders List */}
      <div className="space-y-6">
        {currentReminders.map((reminder) => (
          <div key={reminder.id} className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Subject : {reminder.subject}</h2>
            </div>
            
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex items-center">
                <span className="font-medium w-32">Module Name :</span>
                <span className="text-gray-900">{reminder.moduleName}</span>
              </div>
              
              <div className="flex items-center">
                <span className="font-medium w-32">Project Name :</span>
                <span className="text-gray-900">{reminder.projectName}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-8 space-x-4">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`flex items-center px-4 py-2 rounded-lg border ${
            currentPage === 1
              ? "text-gray-400 border-gray-300 cursor-not-allowed"
              : "text-gray-700 border-gray-300 hover:bg-gray-50"
          }`}
        >
          <ChevronLeft size={16} className="mr-1" />
          Previous
        </button>
        
        <span className="text-sm text-gray-600">
          Page {currentPage} of {totalPages}
        </span>
        
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`flex items-center px-4 py-2 rounded-lg border ${
            currentPage === totalPages
              ? "text-gray-400 border-gray-300 cursor-not-allowed"
              : "text-gray-700 border-gray-300 hover:bg-gray-50"
          }`}
        >
          Next
          <ChevronRight size={16} className="ml-1" />
        </button>
      </div>

      {/* Simple Pagination (Alternative as shown in screenshot) */}
      <div className="flex justify-center items-center mt-8 space-x-4">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`text-sm ${
            currentPage === 1 ? "text-gray-400 cursor-not-allowed" : "text-gray-700 hover:text-blue-600"
          }`}
        >
          &lt; Previous
        </button>
        
        <span className="text-sm text-gray-600">{currentPage}</span>
        
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`text-sm ${
            currentPage === totalPages ? "text-gray-400 cursor-not-allowed" : "text-gray-700 hover:text-blue-600"
          }`}
        >
          Next &gt;
        </button>
      </div>
    </div>
  );
}