import React, { useState } from 'react';
import SubadminFilter from '../../components/subadmin/SubadminFilter';
import SubadminListData from '../../components/subadmin/SubadminListData';
import AddNewSubadmin from '../../components/subadmin/AddNewSubadmin';

const SubadminList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Dummy data - replace with actual API call
  const [subadmins, setSubadmins] = useState([
    {
      id: 1,
      name: 'Mr. Ramesh Kumar',
      subadminId: 'SA2024001',
      department: 'Academic',
      role: 'Department Head',
      status: 'Active',
      email: 'ramesh.kumar@school.com',
      phone: '+91 9876543210'
    },
    {
      id: 2,
      name: 'Mrs. Priya Singh',
      subadminId: 'SA2024002',
      department: 'Administration',
      role: 'Coordinator',
      status: 'Active',
      email: 'priya.singh@school.com',
      phone: '+91 9876543211'
    },
    {
      id: 3,
      name: 'Mr. Amit Verma',
      subadminId: 'SA2024003',
      department: 'Finance',
      role: 'Assistant Head',
      status: 'Inactive',
      email: 'amit.verma@school.com',
      phone: '+91 9876543212'
    },
  ]);

  const departments = ['Academic', 'Administration', 'Finance', 'HR', 'IT', 'Library', 'Sports'];
  const statuses = ['Active', 'Inactive'];

  const filteredSubadmins = subadmins.filter(subadmin => {
    const matchesSearch = subadmin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         subadmin.subadminId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         subadmin.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || subadmin.department === selectedDepartment;
    const matchesStatus = selectedStatus === 'all' || subadmin.status === selectedStatus;
    
    return matchesSearch && matchesDepartment && matchesStatus;
  });

  const handleAddNew = () => {
    setIsModalOpen(true);
  };

  const handleSaveSubadmin = (newSubadmin) => {
    setSubadmins(prev => [...prev, { ...newSubadmin, id: prev.length + 1 }]);
    setIsModalOpen(false);
  };

  const handleEdit = (subadmin) => {
    // TODO: Implement edit subadmin functionality
    console.log('Edit subadmin:', subadmin);
  };

  const handleDelete = (subadminId) => {
    // TODO: Implement delete subadmin functionality
    console.log('Delete subadmin:', subadminId);
  };

  return (
    <div className="p-8 ml-64">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Subadmin List</h1>
        <p className="text-gray-600">Manage and view all subadmins in the school</p>
      </div>

      {/* Filters and Search */}
      <SubadminFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedDepartment={selectedDepartment}
        setSelectedDepartment={setSelectedDepartment}
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
        departments={departments}
        statuses={statuses}
        onAddNew={handleAddNew}
      />

      {/* Subadmins Table */}
      <SubadminListData
        subadmins={filteredSubadmins}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {/* Add New Subadmin Modal */}
      <AddNewSubadmin
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveSubadmin}
      />
    </div>
  );
};

export default SubadminList; 