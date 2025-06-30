// AddStudent.js
import React, { useState } from 'react';

function AddStudent({ onAdd }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    dateOfAdmission: ''
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = {
      id: Date.now(),
      ...formData,
    };
    onAdd(newStudent);
    setSuccess(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      course: '',
      dateOfAdmission: ''
    });
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="form-container">
      <h2>Add Student</h2>
      {success && <p className="success-message">Student added successfully!</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
        <input type="text" name="course" placeholder="Course" value={formData.course} onChange={handleChange} required />
        <input type="date" name="dateOfAdmission" value={formData.dateOfAdmission} onChange={handleChange} required />
        <button type="submit" className="add-btn">Add Student</button>
      </form>
    </div>
  );
}

export default AddStudent;
