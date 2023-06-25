import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // Import Link from 'react-router-dom'
import './Navbar.css';
import img1 from "../Images/logo_main.png";

class Navbar extends Component {
  state = {
    clicked: false
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    const { clicked } = this.state;

    return (
      <nav className="NavbarItems">
        <div className="navbar-logo">
          <img src={img1} alt="logo" className="logo" />
        </div>
        <div className={clicked ? "menu-icons active" : "menu-icons"} onClick={this.handleClick}>
          <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
          <li>
            <a href="" className="nav-links">
              <Link to="/home" className="Homebutton">
                Home
              </Link>
            </a>
          </li>
          <li className="dropdown">
            <a href="" className="nav-links">
              <i className="fa-solid fa-circle-info"></i>
              Courses
            </a>
            <div className="dropdown-content">
              <Link to="/all-courses" className="dropdown-link">
                All Courses
              </Link>
              <Link to="/my-courses" className="dropdown-link">
                My Courses
              </Link>
            </div>

          </li>
          <li>
            <a href="" className="nav-links">
              <i className="fa-solid fa-handshake-angle"></i>
              Friends
            </a>
          </li>
          <li>
            <a href="" className="nav-links">
              <Link to="/contactus" className="Homebutton">
                ContactUs
              </Link>
            </a>
          </li>
          <li className="dropdown">
            <a href="" className="nav-links">
              <i className="fa-solid fa-house-user"></i>
              Profile
            </a>
            <div className="dropdown-content">
            <Link to="/profile" className="dropdown-link">
                Profile
              </Link>
              <Link to="/" className="dropdown-link">
                Logout
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
