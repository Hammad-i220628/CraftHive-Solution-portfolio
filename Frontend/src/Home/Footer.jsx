import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaHandshake } from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("Button Clicked!");
    navigate('/ContactForm'); // Redirect to the contact page when button is clicked
  };

  return (
    <>
      <div className='convo-div'>
        <h1>LET'S CREATE <span className="highlight-text">SOMETHING PHENOMENAL</span></h1>
        <h2><span className="sub-highlight">IT ALL STARTS WITH A</span> CONVERSATION</h2>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        {/* Left Section */}
        <div className="footer-left">
          <div className="logo-section">
            <img src="Company Logo.webp" alt="Logo" className="logo" />
            <h3 className="company-name">CraftHive Solutions</h3>
          </div>
          <div className="contact-details">
            <p>📍 InnoVista Rawal DHA Avanue Mall, DHA 1 Rawalpindi</p>
            <p>📧 Email: uzair332@gmail.com</p>
            <p>📞 Phone: +92 334 0545803</p>
          </div>
          <button onClick={handleClick} className="build-btn">
            <FaHandshake className="icon" /> Let's Build Together
          </button>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <div className="office-location">
            <h4>Our Office</h4>
            <p> InnoVista Rawal DHA Avanue Mall, DHA 1 Rawalpindi</p>
          </div>
          <div className="social-media">
            <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaFacebookF />
            </Link>
            
            <Link to="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedinIn />
            </Link>
            <Link to="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaInstagram />
            </Link>
          </div>
        </div>
      </footer>

      {/* Bottom Section */}
      {/* <div className="footer-bottom">
        <p>&copy; CraftHive Solutions Pvt. Ltd. All Rights Reserved</p>
        <div className="footer-links">
          <Link to="/faq">FAQ</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-conditions">Terms and Conditions</Link>
          <Link to="/disclaimer">Disclaimer</Link>
          <Link to="/user-agreement">User Agreement</Link>
          <Link to="/cancellation-refund">Cancellation & Refund Policy</Link>
          <Link to="/ContactForm">Contact Us</Link>
        </div>
      </div> */}
    </>
  );
};

export default Footer;
