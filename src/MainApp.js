// App.js
import React, { useState } from 'react';
import './App.css';
import { initialStudents } from './mockData';
import StudentList from './components/StudentList';
import AddStudent from './components/AddStudent';
import EditStudent from './components/EditStudent'; // New import

function MainApp() {
  const [students, setStudents] = useState(initialStudents);
  const [editingStudent, setEditingStudent] = useState(null); // New state for edit mode

  // Add Student
  const handleAddStudent = (student) => {
    setStudents([...students, student]);
  };

  // Delete Student
  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure you want to delete this student?");
    if (confirm) {
      setStudents(students.filter(student => student.id !== id));
    }
  };

  // Edit Student - Load student into edit form
  const handleEdit = (student) => {
    setEditingStudent(student);
  };

  // Update Student - Replace updated student in list
  const handleUpdateStudent = (updatedStudent) => {
    const updatedList = students.map(s => s.id === updatedStudent.id ? updatedStudent : s);
    setStudents(updatedList);
    setEditingStudent(null); // Exit edit mode
  };

  // Cancel Edit
  const handleCancelEdit = () => {
    setEditingStudent(null);
  };

  return (
    <div className="container">
      <h1>Student Management System</h1>

      {/* Show Edit Form OR Add Form */}
      {editingStudent ? (
        <EditStudent
          selectedStudent={editingStudent}
          onUpdate={handleUpdateStudent}
          onCancel={handleCancelEdit}
        />
      ) : (
        <AddStudent onAdd={handleAddStudent} />
      )}

      {/* Student list below */}
      <StudentList
        students={students}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
}

export default MainApp;
