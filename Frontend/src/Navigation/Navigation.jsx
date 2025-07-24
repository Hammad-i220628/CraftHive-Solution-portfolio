import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => {
    setMenuOpen(false);
    setActiveDropdown(null);
  };
  
  const toggleDropdown = (dropdownName) => {
    if (menuOpen) { // Only work in mobile view
      setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
    }
  };

  return (
    <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
      {/* Logo */}
      <div className="logo">
        <Link to="/Home" className="logo-container" onClick={closeMenu}>
          <img src="Company Logo.webp" alt="CraftHive Solutions Logo" className="logo-img" />
          <div className="logo-text">
            CraftHive <br /> Solution
          </div>
        </Link>
      </div>

      {/* Desktop and Mobile Menu */}
      <ul className={`desktop-menu ${menuOpen ? 'mobile-menu' : ''}`}>
        {/* Show different content based on whether we're in mobile view and have active dropdown */}
        {menuOpen && activeDropdown ? (
          /* Mobile view with active dropdown - show only the dropdown content */
          <>
            {activeDropdown === 'home' && (
              <>
                <li>
                  <Link 
                    to="#" 
                    className="connect-btn" 
                    onClick={() => toggleDropdown('home')}
                  >
                    Home
                  </Link>
                </li>
                <li><Link to="/ValueProposition" onClick={closeMenu}>Value Proposition</Link></li>
                <li><Link to="/CompanyOverview" onClick={closeMenu}>Company Overview</Link></li>
                <li><Link to="/HighlightingServices" onClick={closeMenu}>Highlighting Services</Link></li>
              </>
            )}
            {activeDropdown === 'services' && (
              <>
                <li>
                  <Link 
                    to="#" 
                    className="connect-btn" 
                    onClick={() => toggleDropdown('services')}
                  >
                    Services
                  </Link>
                </li>
                <li><Link to="/AIServices" onClick={closeMenu}>AI Automation</Link></li>
                <li><Link to="/WebDevelopment" onClick={closeMenu}>Web Development</Link></li>
              </>
            )}
          </>
        ) : (
          /* Normal menu - desktop or mobile without active dropdown */
          <>
            <li className={activeDropdown === 'home' ? 'active-dropdown' : ''}>
              {menuOpen ? (
                <Link to="#" onClick={() => toggleDropdown('home')}>Home</Link>
              ) : (
                <>
                  <Link to="#">Home</Link>
                  <ul className="dropdown">
                    <li><Link to="/ValueProposition"> Value Proposition </Link></li>
                    <li><Link to="/CompanyOverview"> Company Overview</Link></li>
                    <li><Link to="/HighlightingServices"> Highlighting Services</Link></li>
                  </ul>
                </>
              )}
            </li>
            <li className={activeDropdown === 'services' ? 'active-dropdown' : ''}>
              {menuOpen ? (
                <Link to="#" onClick={() => toggleDropdown('services')}>Services</Link>
              ) : (
                <>
                  <Link to="#">Services</Link>
                  <ul className="dropdown">
                    <li><Link to="/AIServices"> AI Automation </Link></li>
                    <li><Link to="/WebDevelopment"> Web Development</Link></li>
                  </ul>
                </>
              )}
            </li>
            <li><Link to="/Portfolio" onClick={closeMenu}>Projects</Link></li>
            <li><Link to="/About" onClick={closeMenu}>About Us</Link></li>
            <li><Link to="/ContactForm" className='connect-btn' onClick={closeMenu}>Contact Us</Link></li>
          </>
        )}
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