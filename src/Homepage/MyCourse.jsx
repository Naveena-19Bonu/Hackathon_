import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import img1 from "../Images/Java.png";
import img2 from "../Images/DBMS.png";
import img3 from "../Images/excel.png";
import img4 from "../Images/AI.png";
import img5 from "../Images/genai.png";
import img6 from "../Images/python.png"
import "./HomePage.css";

const HomePage = () => {
  const images = [img1,img3];
  

  return (
    <div>
      <Navbar />
      <div className="content">
        
        <div className="section">
          <h2 className="mycourse">MY  COURSES</h2>
          <div className="my-course-cards">
            {/* Course Cards */}
            <div className="course-card">
              <img src={img5} alt="Course 1" />
              <div className="course-details">
              <h3 className="course-title">Introduction to Generative AI-The New Era</h3>
                <p className="mentor-name">Mentor: Zaid Sabhil, z scaler</p>
                <button className="enroll-button">Enroll Now</button>
              </div>
            </div>
            
            <div className="course-card">
              <img src={img3} alt="Course 2" />
              <div className="course-details">
              <h3 className="course-title">Advance DBMS(Master Classes)</h3>
                <p className="mentor-name">Mentor: Joan Reddy</p>
                <button className="enroll-button">Enroll Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
