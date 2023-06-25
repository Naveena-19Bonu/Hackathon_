import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import "./Login.css"; // Import the CSS file
import img1 from "../Images/login_image.png"


const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === "" || password.trim() === "") {
      setShowErrorMessage(true);
      setTimeout(() => {
        setShowErrorMessage(false);
      }, 2000);
    } else if (!email.includes("@")) {
      setShowErrorMessage(true);
      setTimeout(() => {
        setShowErrorMessage(false);
      }, 2000);
    } else {
      // Perform login validation or submit form data

      // Navigate to the home page
      // Replace "/home" with the actual path of your home page
      window.location.href = "/home";
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    document.body.classList.toggle("blur", showErrorMessage);
  }, [showErrorMessage]);

  return (
    <div className="login-container">
      <div className="left-section">
        <img src={img1} alt="Logo" />
      </div>
      <div className="right-section">
        <div className="popup-box">
          <h2>Login Now!</h2>
          {showErrorMessage && (
            <div className="error-message">Please fill all details correctly</div>
          )}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="User email"
              value={email}
              onChange={handleEmailChange}
            />
            <div className="password-input">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
          <p> <Link to="/signup" className="signup-button">If you are a new user, SignUp</Link></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
