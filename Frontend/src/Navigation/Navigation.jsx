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
            {activeDropdown === 'services' && (
              <>
                <li>
                  <Link 
                    to="#" 
                    className="connect-btn" 
                    onClick={() => toggleDropdown('services')}
                  >
                    Technologies
                  </Link>
                </li>
              </>
            )}
          </>
        ) : (
          /* Normal menu - desktop or mobile without active dropdown */
          <>
            <li><Link to="/Home" onClick={closeMenu}>Home</Link></li>
            <li className={activeDropdown === 'services' ? 'active-dropdown' : ''}>
              {menuOpen ? (
                <Link to="#" onClick={() => toggleDropdown('services')}>Technologies</Link>
              ) : (
                <>
                  <Link to="#">Technologies</Link>
                  <ul className="dropdown tech-dropdown">
                    <li><Link to="#">.NET</Link></li>
                    <li><Link to="#">Django</Link></li>
                    <li><Link to="#">Xamarin</Link></li>
                    <li><Link to="#">AI</Link></li>
                    <li><Link to="#">Golang</Link></li>
                    <li><Link to="#">Node.js</Link></li>
                    <li><Link to="#">Angular</Link></li>
                    <li><Link to="#">Java</Link></li>
                    <li><Link to="#">PHP</Link></li>
                    <li><Link to="#">AWS</Link></li>
                    <li><Link to="#">JavaScript</Link></li>
                    <li><Link to="#">Power BI</Link></li>
                    <li><Link to="#">C#</Link></li>
                    <li><Link to="#">Kotlin</Link></li>
                    <li><Link to="#">Python</Link></li>
                    <li><Link to="#">C++</Link></li>
                    <li><Link to="#">Google Cloud</Link></li>
                    <li><Link to="#">ML/DL</Link></li>
                    <li><Link to="#">React</Link></li>
                    <li><Link to="#">Ruby</Link></li>
                    <li><Link to="#">Salesforce</Link></li>
                    <li><Link to="#">TypeScript</Link></li>
                    <li><Link to="#">Vue.js</Link></li>
                    <li><Link to="#">Microsoft Azure</Link></li>
                    <li className="all-technologies-link"><Link to="/AllTechnologies">All technologies</Link></li>
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