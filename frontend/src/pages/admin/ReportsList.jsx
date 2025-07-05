import React, { useState } from 'react';
import ReportsFilter from '../../components/Reports/ReportsFilter';
import ReportsListData from '../../components/Reports/ReportsListData';
import GenerateReportModal from '../../components/Reports/GenerateReportModal';

const ReportsList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filters, setFilters] = useState({
    reportType: '',
    startDate: '',
    endDate: '',
    class: '',
    section: ''
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveReport = (reportData) => {
    // TODO: Implement API call to save report data
    console.log('Saving report:', reportData);
  };

  return (
    <div className="p-6 ml-64 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold text-gray-900">Reports</h1>
          <button
            onClick={handleOpenModal}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Generate Report
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <ReportsFilter filters={filters} onFilterChange={handleFilterChange} />
          <div className="mt-6">
            <ReportsListData filters={filters} />
          </div>
        </div>

        <GenerateReportModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSave={handleSaveReport}
        />
      </div>
    </div>
  );
};

export default ReportsList; 