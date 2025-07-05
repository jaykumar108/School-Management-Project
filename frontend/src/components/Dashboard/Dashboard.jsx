import React, { useState } from 'react';
import AttendanceOverview from './AttendanceOverview';
import RecentActivities from './RecentActivities';
import TodoModal from '../Todo/TodoModal';

const Dashboard = () => {
  const [isTodoModalOpen, setIsTodoModalOpen] = useState(false);
  const stats = [
    { 
      id: 1, 
      title: 'Total Students', 
      value: '1,250',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      borderColor: 'border-blue-100'
    },
    { 
      id: 2, 
      title: 'Total Teachers', 
      value: '45',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      ),
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
      borderColor: 'border-green-100'
    },
    { 
      id: 3, 
      title: 'Total Classes', 
      value: '32',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
      borderColor: 'border-purple-100'
    },
    { 
      id: 4, 
      title: 'Total Revenue', 
      value: '₹45,000',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-600',
      borderColor: 'border-yellow-100'
    }
  ];

  const recentActivities = [
    { id: 1, title: 'Annual Sports Day', date: '2024-03-15', type: 'event' },
    { id: 2, title: 'Parent-Teacher Meeting', date: '2024-03-10', type: 'meeting' },
    { id: 3, title: 'Science Exhibition', date: '2024-03-05', type: 'event' }
  ];

  const handleOpenTodoModal = () => {
    setIsTodoModalOpen(true);
  };

  const handleCloseTodoModal = () => {
    setIsTodoModalOpen(false);
  };

  const handleSaveTodo = (todoData) => {
    // TODO: Implement save todo functionality
    console.log('Saving todo:', todoData);
  };

  return (
    <div className="p-8 ml-64 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="mb-8 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">School Dashboard</h1>
            <p className="text-gray-500 mt-1">Welcome back, Admin</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-64 pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <svg className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <button 
              onClick={handleOpenTodoModal}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              Add Todo
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Generate Report
            </button>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div 
            key={stat.id} 
            className={`${stat.bgColor} rounded-2xl p-6 border ${stat.borderColor} hover:shadow-lg transition-all duration-300`}
          >
            <div className="flex items-center justify-between">
              <div className={`${stat.textColor} p-3 rounded-xl bg-white shadow-sm`}>
                {stat.icon}
              </div>
              <div className="text-right">
                <p className="text-gray-500 text-sm font-medium">{stat.title}</p>
                <p className={`text-2xl font-bold ${stat.textColor} mt-1`}>{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AttendanceOverview />
        <RecentActivities />
      </div>

      {/* Todo Modal */}
      <TodoModal
        isOpen={isTodoModalOpen}
        onClose={handleCloseTodoModal}
        onSave={handleSaveTodo}
      />
    </div>
  );
};

export default Dashboard; 