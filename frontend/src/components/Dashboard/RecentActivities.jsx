import React from 'react';

const RecentActivities = () => {
  const recentActivities = [
    { id: 1, title: 'Annual Sports Day', date: '2024-03-15', type: 'event' },
    { id: 2, title: 'Parent-Teacher Meeting', date: '2024-03-10', type: 'meeting' },
    { id: 3, title: 'Science Exhibition', date: '2024-03-05', type: 'event' }
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">Recent Activities</h2>
        <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">View All</button>
      </div>
      <div className="space-y-6">
        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
          <div className="bg-blue-100 p-3 rounded-lg">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <h3 className="font-medium text-gray-800">Annual Sports Day</h3>
            <p className="text-sm text-gray-500">March 15, 2024</p>
          </div>
          <span className="ml-auto px-3 py-1 text-xs font-medium bg-blue-100 text-blue-600 rounded-full">
            Upcoming
          </span>
        </div>

        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
          <div className="bg-green-100 p-3 rounded-lg">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <div>
            <h3 className="font-medium text-gray-800">Parent-Teacher Meeting</h3>
            <p className="text-sm text-gray-500">March 10, 2024</p>
          </div>
          <span className="ml-auto px-3 py-1 text-xs font-medium bg-green-100 text-green-600 rounded-full">
            Completed
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecentActivities; 