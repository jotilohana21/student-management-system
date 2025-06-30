// EditStudent.js
import React, { useState, useEffect } from 'react';

function EditStudent({ selectedStudent, onUpdate, onCancel }) {
  const [formData, setFormData] = useState(selectedStudent);

  useEffect(() => {
    setFormData(selectedStudent);
  }, [selectedStudent]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
  };

  return (
    <div className="form-container">
      <h2>Edit Student</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
        <input type="text" name="course" value={formData.course} onChange={handleChange} required />
        <input type="date" name="dateOfAdmission" value={formData.dateOfAdmission} onChange={handleChange} required />
        <button type="submit" className="update-btn">Update</button>
        <button type="button" onClick={onCancel} className="cancel-btn">Cancel</button>

      </form>
    </div>
  );
}

export default EditStudent;
