import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import img1 from "../Images/Java.png";
import img2 from "../Images/DBMS.png";
import img3 from "../Images/excel.png";
import img4 from "../Images/AI.png";
import img5 from "../Images/genai.png";
import img6 from "../Images/python.png"
import "./HomePage.css";

const Allcourse = () => {
  const images = [img1,img2,img3,img4,img5,img6];
  

  return (
    <div>
      <Navbar />
      <div className="content">
        
        <div className="section">
          <h2 className="allcourse" >ALL  COURSES</h2>
          <div className="all-course-cards">
            {/* Course Cards */}
            <div className="course-card">
              <img src={img1} alt="Course 1" />
              <div className="course-details">
              <h3 className="course-title">Java Programming Training for Beginners</h3>
                <p className="mentor-name">Mentor: Kiran Kumar Singh</p>
                <button className="enroll-button">Enroll Now</button>
              </div>
            </div>
            <div className="course-card">
              <img src={img2} alt="Course 2" />
              <div className="course-details">
              <h3 className="course-title">Advance DBMS(Master Classes)</h3>
                <p className="mentor-name">Mentor: Joan Reddy</p>
                <button className="enroll-button">Enroll Now</button>
              </div>
            </div>
            <div className="course-card">
              <img src={img4} alt="Course 3" />
              <div className="course-details">
              <h3 className="course-title">Artificial Intelligence and Workshop for Beginners</h3>
                <p className="mentor-name">Mentor: Zaid Sabhil, z scaler</p>
                <button className="enroll-button">Enroll Now</button>
              </div>
            </div>
            <div className="course-card">
              <img src={img3} alt="Course 3" />
              <div className="course-details">
              <h3 className="course-title">Excel Sheets Crash Course Full Video</h3>
                <p className="mentor-name">Mentor: Rashmi Gautam, Joan Reddy</p>
                <button className="enroll-button">Enroll Now</button>
              </div>
            </div>
            <div className="course-card">
              <img src={img5} alt="Favorite 2" />
              <div className="course-details">
              <h3 className="course-title">Introduction to Generative AI-The New Era</h3>
                <p className="mentor-name">Mentor: Zaid Sabhil, z scaler</p>
                <button className="enroll-button">Enroll Now</button>
              </div>
            </div>
            <div className="course-card">
              <img src={img6} alt="Course 3" />
              <div className="course-details">
              <h3 className="course-title">Python Programming from basics to advanced learning</h3>
                <p className="mentor-name">Mentor: Zaid Sabhil, Joan Reddy</p>
                <button className="enroll-button">Enroll Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allcourse;
