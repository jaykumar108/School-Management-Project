import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Dashboard/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './pages/admin/Login';
import StudentList from './pages/student/StudentList';
import TeacherList from './pages/Teacher/TeacherList';
import SubadminList from './pages/Subadmin/SubadminList';
import AdminSettingPage from './pages/admin/AdminSettingPage';
import AttendanceList from './pages/admin/AttendanceList';
import FeesList from './pages/admin/FeesList';
import ReportsList from './pages/admin/ReportsList';
function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={
            <>
              <Sidebar />
              <Dashboard />
            </>
          } />
          <Route path="/students" element={
            <>
              <Sidebar />
              <StudentList />
            </>
          } />
          <Route path="/teachers" element={
            <>
              <Sidebar />
              <TeacherList />
            </>
          } />
          <Route path="/subadmins" element={
            <>
              <Sidebar />
              <SubadminList />
            </>
            
          } />
          <Route path="/admin-settings" element={
            <>
              <Sidebar />
              <AdminSettingPage />
            </>
          } />
          <Route path="/attendance" element={
            <>
              <Sidebar />
              <AttendanceList />
            </>
          } />
          <Route path="/fees" element={
            <>
              <Sidebar />
              <FeesList />
            </>   
          } />
          <Route path="/reports" element={
            <>
              <Sidebar />
              <ReportsList />
            </>
          } />
        </Routes> 
      </div>
    </BrowserRouter>
  );
}

export default App; 