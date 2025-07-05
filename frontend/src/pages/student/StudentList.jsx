import React, { useState } from 'react';
import StudentFilter from '../../components/student/StudentFilter';
import StudentListData from '../../components/student/StudentListData';
import AddNewStudent from '../../components/student/AddNewStudent';

const StudentList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Dummy data - replace with actual API call
  const [students, setStudents] = useState([
    {
      id: 1,
      name: 'Rahul Sharma',
      rollNo: '2024001',
      class: 'Class 10',
      section: 'A',
      status: 'Active',
      email: 'rahul.sharma@school.com',
      phone: '+91 9876543210'
    },
    {
      id: 2,
      name: 'Priya Patel',
      rollNo: '2024002',
      class: 'Class 9',
      section: 'B',
      status: 'Active',
      email: 'priya.patel@school.com',
      phone: '+91 9876543211'
    },
    {
      id: 3,
      name: 'Amit Kumar',
      rollNo: '2024003',
      class: 'Class 10',
      section: 'C',
      status: 'Inactive',
      email: 'amit.kumar@school.com',
      phone: '+91 9876543212'
    },
    // Add more dummy data as needed
  ]);

  const classes = ['Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10', 'Class 11', 'Class 12'];
  const statuses = ['Active', 'Inactive'];

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.rollNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesClass = selectedClass === 'all' || student.class === selectedClass;
    const matchesStatus = selectedStatus === 'all' || student.status === selectedStatus;
    
    return matchesSearch && matchesClass && matchesStatus;
  });

  const handleAddNew = () => {
    setIsModalOpen(true);
  };

  const handleSaveStudent = (newStudent) => {
    setStudents(prev => [...prev, { ...newStudent, id: prev.length + 1 }]);
    setIsModalOpen(false);
  };

  const handleEdit = (student) => {
    // TODO: Implement edit student functionality
    console.log('Edit student:', student);
  };

  const handleDelete = (studentId) => {
    // TODO: Implement delete student functionality
    console.log('Delete student:', studentId);
  };

  return (
    <div className="p-8 ml-64">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Student List</h1>
        <p className="text-gray-600">Manage and view all students in the school</p>
      </div>

      {/* Filters and Search */}
      <StudentFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedClass={selectedClass}
        setSelectedClass={setSelectedClass}
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
        classes={classes}
        statuses={statuses}
        onAddNew={handleAddNew}
      />

      {/* Students Table */}
      <StudentListData
        students={filteredStudents}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {/* Add New Student Modal */}
      <AddNewStudent
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveStudent}
      />
    </div>
  );
};

export default StudentList;
