import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
      {/* Logo */}
      <div className="logo">
        <Link to="/Home" className="logo-container">
          <img src="Company Logo.webp" alt="CraftHive Solutions Logo" className="logo-img" />
          <div className="logo-text">
            CraftHive <br /> Solution
          </div>
        </Link>
      </div>

      {/* Desktop and Mobile Menu */}
      <ul className={`desktop-menu ${menuOpen ? 'mobile-menu' : ''}`}>
        <li>
          <Link to="#">Home</Link>
          <ul className="dropdown">
            <li><Link to="/ValueProposition"> Value Proposition </Link></li>
            <li><Link to="/CompanyOverview"> Company Overview</Link></li>
            <li><Link to="/HighlightingServices"> Highlighting Services</Link></li>
          </ul>
        </li>
        <li>
          <Link to="#">Services</Link>
          <ul className="dropdown">
            <li><Link to="/AIServices"> AI Automation </Link></li>
            <li><Link to="/WebDevelopment"> Web Development</Link></li>
          </ul>
        </li>
        <li><Link to="/portfolio">Projects</Link></li> {/* Direct link */}
        <li><Link to="/About">About Us</Link></li>   {/* Direct link */}
        <li><Link to="/ContactForm" className='connect-btn'>Contact Us</Link></li> {/* Direct link */}
      </ul>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navigation;