import React from "react";
// import "./Test.css"; // Import the CSS file for styles

const Navbar = () => {
  return (
    <nav className="navbar-custom">
      <div className="navbar-logo">
        <img src="logo.png" alt="Logo" className="navbar-logo-img" />
        <span className="navbar-title">PractyWiz</span>
      </div>
      <ul className="navbar-links">
        <li className="navbar-item">
          <a href="#mentorclub">MENTORCLUB</a>
        </li>
        <li className="navbar-item">
          <a href="#casestudies">CASE STUDIES</a>
        </li>
        <li className="navbar-item">
          <a href="#ai" className="navbar-item-ai">
            AI
          </a>
        </li>
        <li className="navbar-item">
          <a href="#aboutus">ABOUT US</a>
        </li>
        <li className="navbar-item">
          <a href="#contact">CONTACT US</a>
        </li>
      </ul>
      <div className="navbar-buttons">
        <button className="navbar-login-btn">LOGIN</button>
        <button className="navbar-signup-btn">SIGN UP</button>
      </div>
    </nav>
  );
};

export default Navbar;
