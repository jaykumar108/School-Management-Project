import React, { useState } from 'react';
import FeesFilter from '../../components/Fees/FeesFilter';
import FeesListData from '../../components/Fees/FeesListData';
import AddFeesModal from '../../components/Fees/AddFeesModal';

const FeesList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filters, setFilters] = useState({
    studentName: '',
    class: '',
    section: '',
    status: '',
    month: ''
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleAddFees = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveFees = (feesData) => {
    // TODO: Implement API call to save fees
    console.log('Saving fees:', feesData);
    setIsModalOpen(false);
  };

  return (
    <div className="p-6 ml-60">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Fees Management</h1>
          <button
            onClick={handleAddFees}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Add Fees
          </button>
        </div>

        <FeesFilter filters={filters} onFilterChange={handleFilterChange} />
        <FeesListData filters={filters} />

        {isModalOpen && (
          <AddFeesModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            onSave={handleSaveFees}
          />
        )}
      </div>
    </div>
  );
};

export default FeesList; 