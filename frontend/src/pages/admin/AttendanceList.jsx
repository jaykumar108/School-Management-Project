import React, { useState } from 'react';
import AttendanceFilter from '../../components/Attendance/AttendanceFilter';
import AttendanceListData from '../../components/Attendance/AttendanceListData';
import AttendanceModal from '../../components/Attendance/AttendanceModal';

const AttendanceList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filters, setFilters] = useState({
    date: '',
    class: '',
    section: '',
    status: ''
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleAddAttendance = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveAttendance = (attendanceData) => {
    // TODO: Implement API call to save attendance
    console.log('Saving attendance:', attendanceData);
    setIsModalOpen(false);
  };

  return (
    <div className="p-6 ml-60">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Attendance Management</h1>
          <button
            onClick={handleAddAttendance}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Add Attendance
          </button>
        </div>

        <AttendanceFilter filters={filters} onFilterChange={handleFilterChange} />
        <AttendanceListData filters={filters} />

        {isModalOpen && (
          <AttendanceModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            onSave={handleSaveAttendance}
          />
        )}
      </div>
    </div>
  );
};

export default AttendanceList; 