import React from "react";
import Footer from "./Footer";

import { MdOutlineRocket } from "react-icons/md";
import { GiDarkSquad } from "react-icons/gi";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { RiReservedFill } from "react-icons/ri";
import { RiShakeHandsLine } from "react-icons/ri";
import { MdOutlineVerticalAlignTop } from "react-icons/md";


const CompanyOverview = () => {
  
 
  return (
    <>
    <div className="company-overview-container">
      {/* Hero Section */}
      <section className="company-hero">
        <h1>Welcome to Crafthive Solution</h1>
        <p>Your Partner in Digital Transformation</p>
      </section>

      {/* About Us Section */}
      <section className="company-about" >
        <h2>About Us</h2>
        <p style={{color:"white",fontWeight:"bold"}} >
          Crafthive Solution is a technology-driven company specializing in innovative 
          solutions for businesses worldwide. Our expertise spans across web & mobile 
          app development, cloud solutions, UI/UX design, and IT consulting.
        </p>
      </section>

      {/* Our Mission & Vision Section */}
      <section className="company-mission-vision">
        <div className="mission"data-aos="flip-left" data-aos-duration="1000">
          <h2>Our Mission</h2>
          <p>
            To empower businesses by delivering cutting-edge digital solutions 
            that enhance growth and productivity.
          </p>
        </div>
        <div className="vision"data-aos="flip-right" data-aos-duration="1000">
          <h2>Our Vision</h2>
          <p>
            To become a global leader in providing scalable and secure 
            IT solutions for businesses of all sizes.
          </p>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="company-services">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-item"data-aos="flip-left" data-aos-duration="1000">Custom Software Development</div>
          <div className="service-item"data-aos="flip-left" data-aos-duration="1000">Web & Mobile App Development</div>
          <div className="service-item"data-aos="flip-left" data-aos-duration="1000">UI/UX Design & Branding</div>
          <div className="service-item"data-aos="flip-left" data-aos-duration="1000">Cloud Solutions</div>
          <div className="service-item"data-aos="flip-left" data-aos-duration="1000">E-commerce Solutions</div>
          <div className="service-item"data-aos="flip-left" data-aos-duration="1000">IT Consulting</div>
        </div>
      </section>

      {/* Company Stats Section */}
      <div className="team-container">
  <div className="team-box" data-aos="flip-left" data-aos-duration="1000">
    <MdOutlineRocket className="team-icon" />
    <h2>8+</h2>
    <div style={{ fontSize: '1rem', color: 'white' }}>Years Experience</div>
  </div>
  <div className="team-box" data-aos="flip-left" data-aos-duration="1000">
    <GiDarkSquad className="team-icon" />
    <h2>120+</h2>
    <div style={{ fontSize: '1rem', color: 'white' }}>Talented Squad</div>
  </div>
  <div className="team-box" data-aos="flip-left" data-aos-duration="1000">
    <HiOutlineDesktopComputer className="team-icon" />
    <h2>500+</h2>
    <div style={{ fontSize: '1rem', color: 'white' }}>Projects Delivered</div>
  </div>
  <div className="team-box" data-aos="flip-left" data-aos-duration="1000">
    <RiReservedFill className="team-icon" />
    <h2>40+</h2>
    <div style={{ fontSize: '1rem', color: 'white' }}>Countries Served</div>
  </div>
  <div className="team-box" data-aos="flip-left" data-aos-duration="1000">
    <RiShakeHandsLine className="team-icon" />
    <h2>99%</h2>
    <div style={{ fontSize: '1rem', color: 'white' }}>Client Satisfaction</div>
  </div>
  <div className="team-box" data-aos="flip-left" data-aos-duration="1000">
    <MdOutlineVerticalAlignTop className="team-icon" />
    <h2>Top</h2>
    <div style={{ fontSize: '1rem', color: 'white' }}>Top Rating</div>
  </div>
</div>
      
      {/* Our Team Section */}
      <section className="company-team">
        <h2 style={{color:"white",fontSize:"2rem"}}>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="uzairimg.png" alt="Team Member 1" />
            <h3>Uzair ul Haq</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <img src="zayadimg.jpeg" alt="Team Member 2" style={{height:"140px"}}/>
            <h3>Muhammad Zayad</h3>
            <p>CTO</p>
          </div>
          <div className="team-member">
            <img src="kamranimg.jpeg" alt="Team Member 3" style={{borderRadius:"95px",height:"160px"}} />
            <h3>Muhammad Kamran  </h3>
            <p>Lead Developer</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="company-testimonials">
        <h2 style={{fontSize:"2rem"}}>What Our Clients Say</h2>
        <div className="testimonial">
          <p>
            "Crafthive Solution transformed our business with their innovative 
            web development services. Highly recommended!"
          </p>
          <h4>- Sarah Johnson</h4>
        </div>
        <div className="testimonial">
          <p>
            "Their team is highly skilled and delivered beyond our expectations. 
            We loved working with them!"
          </p>
          <h4>- David Wilson</h4>
        </div>
      </section>

     
    </div>
    <Footer/>
    </>
  );
};

export default CompanyOverview;
