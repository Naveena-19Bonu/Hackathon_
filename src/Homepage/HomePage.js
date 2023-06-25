import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import img1 from "../Images/Java.png";
import img2 from "../Images/DBMS.png";
import img3 from "../Images/excel.png";
import img4 from "../Images/AI.png";
import img5 from "../Images/genai.png";
import img6 from "../Images/python.png";
import "./HomePage.css";

const EnrollButton = () => {
  return <Link to="/enroll">
  <button className="enroll-button">Enroll Now</button>
</Link>
};

const ViewMoreButton = ()=>{
  return <Link to="/all-courses">
  <button className="view-more-button">View More...</button>
</Link>
}

const HomePage = () => {
  const images = [img1, img2, img3, img4, img5, img6];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      <Navbar />
      <div className="content">
        <div className="image-slider">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className={index === currentImageIndex ? "active" : ""}
            />
          ))}
          <div className="slider-overlay"></div>
        </div>
        <div className="section">
          <h2 className="section-heading">Latest Trending Courses</h2>
          <div className="course-cards">
            {/* Course Cards */}
            <div className="course-card">
              <img src={img1} alt="Course 1" />
              <div className="course-details">
                <h3 className="course-title">Artificial Intelligence and Workshop for Beginners</h3>
                <p className="mentor-name">Mentor: Zaid Sabhil, z scaler</p>
                <button className="enroll-button">Enroll Now</button>
              </div>
            </div>
            <div className="course-card">
              <img src={img2} alt="Course 2" />
              <div className="course-details">
                <h3 className="course-title">Artificial Intelligence and Workshop for Beginners</h3>
                <p className="mentor-name">Mentor: Zaid Sabhil, z scaler</p>
                <button className="enroll-button">Enroll Now</button>
              </div>
            </div>
            <div className="course-card">
              <img src={img3} alt="Course 3" />
              <div className="course-details">
                <h3 className="course-title">Artificial Intelligence and Workshop for Beginners</h3>
                <p className="mentor-name">Mentor: Zaid Sabhil, z scaler</p>
                <button className="enroll-button">Enroll Now</button>
              </div>
            </div>
          </div>
          <ViewMoreButton />
        </div>
        <div className="section">
          <h2 className="section-heading">Your Related Courses</h2>
          <div className="course-cards">
            {/* Course Cards */}
            <div className="course-card">
              <img src={img4} alt="Favorite 1" />
              <div className="course-details">
                <h3 className="course-title">Artificial Intelligence and Workshop for Beginners</h3>
                <p className="mentor-name">Mentor: Zaid Sabhil, zscaler</p>
                <button className="enroll-button">Enroll Now</button>
              </div>
            </div>
            <div className="course-card">
              <img src={img5} alt="Favorite 2" />
              <div className="course-details">
                <h3 className="course-title">Artificial Intelligence and Workshop for Beginners</h3>
                <p className="mentor-name">Mentor: Zaid Sabhil, z scaler</p>
                <EnrollButton />
              </div>
            </div>
            <div className="course-card">
              <img src={img6} alt="Favorite 3" />
              <div className="course-details">
                <h3 className="course-title">Artificial Intelligence and Workshop for Beginners</h3>
                <p className="mentor-name">Mentor: Zaid Sabhil, z scaler</p>
                <button className="enroll-button">Enroll Now</button>
              </div>
            </div>
          </div>
          <ViewMoreButton />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
