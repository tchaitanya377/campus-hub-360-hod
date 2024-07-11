// src/pages/ManageCourses.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const ManageCourses = () => {
  const [courses, setCourses] = useState([
    { id: 'CSE101', name: 'Introduction to Computer Science', faculty: 'Dr. Smith' },
    { id: 'CSE102', name: 'Data Structures', faculty: 'Dr. Johnson' },
    // Add more initial courses as needed
  ]);

  const [newCourse, setNewCourse] = useState({ id: '', name: '', faculty: '' });
  const [editingCourse, setEditingCourse] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCourse({ ...newCourse, [name]: value });
  };

  const handleAddCourse = () => {
    setCourses([...courses, newCourse]);
    setNewCourse({ id: '', name: '', faculty: '' });
  };

  const handleEditCourse = (course) => {
    setEditingCourse(course);
  };

  const handleUpdateCourse = () => {
    setCourses(courses.map(course => (course.id === editingCourse.id ? editingCourse : course)));
    setEditingCourse(null);
  };

  const handleDeleteCourse = (id) => {
    setCourses(courses.filter(course => course.id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Manage Courses</h1>
      
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">{editingCourse ? 'Edit Course' : 'Add New Course'}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            name="id"
            value={editingCourse ? editingCourse.id : newCourse.id}
            onChange={handleInputChange}
            placeholder="Course ID"
            className="p-2 border border-gray-300 rounded"
            disabled={editingCourse ? true : false}
          />
          <input
            type="text"
            name="name"
            value={editingCourse ? editingCourse.name : newCourse.name}
            onChange={handleInputChange}
            placeholder="Course Name"
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="faculty"
            value={editingCourse ? editingCourse.faculty : newCourse.faculty}
            onChange={handleInputChange}
            placeholder="Faculty"
            className="p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          onClick={editingCourse ? handleUpdateCourse : handleAddCourse}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4"
        >
          {editingCourse ? 'Update Course' : 'Add Course'}
        </button>
      </div>

      <div className="bg-white shadow rounded-lg p-5">
        <h2 className="text-2xl font-bold mb-4">Course List</h2>
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">Course ID</th>
              <th className="border border-gray-300 p-2">Course Name</th>
              <th className="border border-gray-300 p-2">Faculty</th>
              <th className="border border-gray-300 p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id}>
                <td className="border border-gray-300 p-2">{course.id}</td>
                <td className="border border-gray-300 p-2">{course.name}</td>
                <td className="border border-gray-300 p-2">{course.faculty}</td>
                <td className="border border-gray-300 p-2">
                  <button
                    onClick={() => handleEditCourse(course)}
                    className="bg-green-500 text-white px-4 py-2 rounded-lg mr-2"
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button
                    onClick={() => handleDeleteCourse(course.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageCourses;
