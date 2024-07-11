import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import DepartmentManagement from './components/DepartmentManagement';
import CourseOversight from './components/CourseOversight';
import ManageCourses from './components/ManageCourses';
import Students from './components/Students';
import StudentProfilePage from './components/StudentProfilePage';
import CourseProgress from './components/CourseProgress';

function App() {
  return (
    <Router>
      <div className="App flex flex-col md:flex-row h-screen">
        <Navbar />
        <div className="flex-1 flex-1 overflow-auto">
          <Routes>
            <Route path="/hod/home" element={<Dashboard />} />
            <Route path="/hod/department-management" element={<DepartmentManagement />} />
            <Route path="/hod/course-oversight" element={<CourseOversight />} />
            <Route path="/hod/manage-courses" element={<ManageCourses />} />
            <Route path="/hod/students" element={<Students />} />
            <Route path="/students/:id" element={<StudentProfilePage />} />
             <Route path="/course-progress" element={<CourseProgress />} />
         
            {/* Add other routes here */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
