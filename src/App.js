import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage/Login";
import HomePage from "./Homepage/HomePage"; // Assuming you have a separate component for the home page
import Contactus from "./Contact/Contactus"
import SignupPage from "./Signup/Signup";
import Allcourse from "./Homepage/AllCourse"
import Mycourse from "./Homepage/MyCourse"
import Profile from "./Profile/Profile";
import Enroll from "./Enroll/Enroll";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/Contactus" element={<Contactus />} />
        <Route path="/signup" element={<SignupPage />}/>
        <Route path="/all-courses" element={<Allcourse />}/>
        <Route path="/my-courses" element={<Mycourse />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/contactus" element={<Contactus />}/>
        <Route path="/enroll" element={<Enroll />}/>
      </Routes>
    </Router>
  );
};

export default App;
