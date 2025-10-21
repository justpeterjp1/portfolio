// where i'll be recycling my code 

import '../css/Navbar.css';
import React, { useState } from 'react';


const Navbar = ({onNavigate}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };
   const handleNavClick = (scrollFn) => {
    scrollFn();           // Scroll to section
    setMenuOpen(false);   // Close menu
  };


  return (<nav>
  <div className="navbar-container navbar">
    <div className="navbar-logo">JP</div>
    <div className="navbar-toggle-div">
        <button
          className={`navbar-toggle ${menuOpen ? 'open' : ''}`}
          onClick={handleToggle}
        >
          <span className="bar top-bar"></span>
          <span className="bar middle-bar"></span>
          <span className="bar bottom-bar"></span>
      </button>

    </div>
    <ul className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
      <li className="navbar-item">
        <button className="navbar-button" onClick={() => handleNavClick(onNavigate.home)}>
          <i className="fas fa-home"></i> Home
        </button>
      </li>
      <li className="navbar-item">
        <button className="navbar-button" onClick={() => handleNavClick(onNavigate.about)}>
          <i className="fas fa-user"></i> About
        </button>
      </li>
      <li className="navbar-item">
        <button className="navbar-button" onClick={() => handleNavClick(onNavigate.projects)}>
          <i className="fas fa-briefcase"></i> Projects
        </button>
      </li>
      <li className="navbar-item">
        <button className="navbar-button" onClick={() => handleNavClick(onNavigate.contact)}>
          <i className="fas fa-envelope"></i> Contact
        </button>
      </li>
    </ul>
  </div>
</nav>

  );
};

export default Navbar;