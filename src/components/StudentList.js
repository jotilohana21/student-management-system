import React, { useState } from 'react';

function StudentList({ students, onDelete, onEdit }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.course.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name or course"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <table>
        <thead>
          <tr>
            <th>Name</th><th>Email</th><th>Phone</th><th>Course</th><th>Date</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map(student => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.phone}</td>
              <td>{student.course}</td>
              <td>{student.dateOfAdmission}</td>
              <td>
                {/* Working Edit Button */}
                <button className="edit-btn" onClick={() => onEdit(student)}>Edit</button>
                
                {/* Delete Button */}
                <button className="delete-btn" onClick={() => onDelete(student.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
