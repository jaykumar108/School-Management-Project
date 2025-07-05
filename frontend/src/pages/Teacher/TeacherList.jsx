import React, { useState } from 'react';
import TeacherFilter from '../../components/Teacher/TeacherFilter';
import TeacherListData from '../../components/Teacher/TeacherListData';
import AddNewTeacher from '../../components/Teacher/AddNewTeacher';

const TeacherList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Dummy data - replace with actual API call
  const [teachers, setTeachers] = useState([
    {
      id: 1,
      name: 'Dr. Rajesh Kumar',
      teacherId: 'T2024001',
      subject: 'Mathematics',
      qualification: 'Ph.D. in Mathematics',
      status: 'Active',
      email: 'rajesh.kumar@school.com',
      phone: '+91 9876543210'
    },
    {
      id: 2,
      name: 'Prof. Sunita Sharma',
      teacherId: 'T2024002',
      subject: 'Physics',
      qualification: 'M.Sc. Physics',
      status: 'Active',
      email: 'sunita.sharma@school.com',
      phone: '+91 9876543211'
    },
    {
      id: 3,
      name: 'Dr. Amit Patel',
      teacherId: 'T2024003',
      subject: 'Chemistry',
      qualification: 'Ph.D. in Chemistry',
      status: 'Inactive',
      email: 'amit.patel@school.com',
      phone: '+91 9876543212'
    },
  ]);

  const subjects = ['Mathematics', 'Science', 'English', 'History', 'Geography', 'Physics', 'Chemistry', 'Biology'];
  const statuses = ['Active', 'Inactive'];

  const filteredTeachers = teachers.filter(teacher => {
    const matchesSearch = teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         teacher.teacherId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         teacher.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject = selectedSubject === 'all' || teacher.subject === selectedSubject;
    const matchesStatus = selectedStatus === 'all' || teacher.status === selectedStatus;
    
    return matchesSearch && matchesSubject && matchesStatus;
  });

  const handleAddNew = () => {
    setIsModalOpen(true);
  };

  const handleSaveTeacher = (newTeacher) => {
    setTeachers(prev => [...prev, { ...newTeacher, id: prev.length + 1 }]);
    setIsModalOpen(false);
  };

  const handleEdit = (teacher) => {
    // TODO: Implement edit teacher functionality
    console.log('Edit teacher:', teacher);
  };

  const handleDelete = (teacherId) => {
    // TODO: Implement delete teacher functionality
    console.log('Delete teacher:', teacherId);
  };

  return (
    <div className="p-8 ml-64">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Teacher List</h1>
        <p className="text-gray-600">Manage and view all teachers in the school</p>
      </div>

      {/* Filters and Search */}
      <TeacherFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedSubject={selectedSubject}
        setSelectedSubject={setSelectedSubject}
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
        subjects={subjects}
        statuses={statuses}
        onAddNew={handleAddNew}
      />

      {/* Teachers Table */}
      <TeacherListData
        teachers={filteredTeachers}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {/* Add New Teacher Modal */}
      <AddNewTeacher
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveTeacher}
      />
    </div>
  );
};

export default TeacherList; 