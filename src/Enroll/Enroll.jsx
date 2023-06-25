import React from 'react';
import "./Enroll.css";
import Navbar from "../Navbar/Navbar";
import img1 from "../Images/genai.png";
const Enroll = () => {
  return (
      <div>
          <Navbar/>
      
    <div className="container">
      <div className="left-card">
        <div className="card-content">
          <img src={img1} alt="Image" />
          <h2>Artificial intelligence and workshop for beginners</h2>
          <p>Course  overview:</p>
          <ul>
            <li>10 hours video</li>
            <li>download resources</li>
            <li>Quizes </li>
            <li>Helper tool</li>
          </ul>
        </div>
      </div>
      <div className="right-container">
        <div className="blue-container">
          <h2>Artificial intelligence and workshop for beginners</h2>
          <h3>Master Artificial Intelligence from basics and master this course</h3>
          <p>TUROR - Joan reddy</p>
          <p>Course created on - 25/08/2021</p>
          <p>number of people enrolled : 456</p>
          <p>RATING 4.7/5.0</p>

        </div>
        
        <div className="requirements">
          <h2>Requirements</h2>
          <p>High School Maths</p>
          <p>Basic Python knowledge</p>


        </div>
        <div className="description">
          <h2>Description</h2>
          <p>Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems. Specific applications of AI 
               include expert systems, natural language processing, speech recognition and machine vision</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Enroll;
