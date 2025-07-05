import React from 'react';

const AttendanceOverview = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">Attendance Overview</h2>
        <select className="border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>This Week</option>
          <option>This Month</option>
          <option>This Year</option>
        </select>
      </div>
      <div className="h-80 flex items-center justify-center text-gray-500">
        [Attendance Chart will be rendered here]
      </div>
    </div>
  );
};

export default AttendanceOverview; 