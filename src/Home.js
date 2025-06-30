import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import studentImg from './assets/Students.jpg';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-bg">
    <div className="home-container">
      <h1>Student Management System</h1>
      <p className="subtext">
          This system allows you to manage student records with ease. <br />
          You can <strong>add</strong> new students, <strong>edit</strong> their information, and <strong>delete</strong> outdated entries. <br />
          The interface is clean, responsive, and built using <strong>React.js</strong>. <br />
          Perfect for learning real-world form handling and state management.
      </p>
       <img src={studentImg} alt="Students" className="home-image" />

      <button onClick={() => navigate('/app')} className="add-btn">Add Students</button>
    </div>
    </div>
  );
}

export default Home;
