import React from "react";
import { useNavigate } from 'react-router-dom';
import { FaLaptopCode, FaMobileAlt, FaPaintBrush, FaShoppingCart } from 'react-icons/fa';

const HighlightingServices = () => {
  const navigate = useNavigate();
  const handleClick = () => {
      navigate('/ContactForm'); 
  }
  return (
    <div className="company-overview-container">
      {/* Hero Section */}
      <section className="company-hero">
        <h1>Our Premium Services</h1>
        <p>Transforming your ideas into powerful digital solutions.</p>
      </section>
      {/* Service Categories Section */}
      <section className="service-categories">
        <h2>Explore Our Expertise</h2>
        <div className="categories-grid">
          <div className="category-card" data-aos="fade-up" data-aos-duration="1000">
            <h3>Web Development</h3>
            <p>Custom websites, web apps, and CMS solutions tailored for your business.</p>
          </div>
          <div className="category-card"data-aos="fade-up" data-aos-duration="1000">
            <h3>Mobile App Development</h3>
            <p>Feature-rich iOS & Android apps with seamless user experiences.</p>
          </div>
          <div className="category-card" data-aos="fade-up" data-aos-duration="1000">
            <h3>UI/UX Design</h3>
            <p>Modern, user-friendly designs to enhance engagement and usability.</p>
          </div>
          <div className="category-card"data-aos="fade-up" data-aos-duration="1000">
            <h3>E-Commerce Solutions</h3>
            <p>Scalable and secure online stores to grow your business.</p>
          </div>
        </div>
      </section>

      {/* Service Details Section */}
      
<section className="service-details">
  <h2>What We Offer</h2>
  <div className="details-grid">
    <div className="detail-card"data-aos="fade-zoom-in" data-aos-duration="1000">
      <FaLaptopCode size={60} color="#333" />
      <h3>Web Development</h3>
      <p>From static websites to dynamic platforms, we build high-performance web applications.</p>
    </div>
    <div className="detail-card" data-aos="fade-zoom-in" data-aos-duration="1000">
      <FaMobileAlt size={60} color="#333" />
      <h3>Mobile App Development</h3>
      <p>We create intuitive, high-quality mobile applications for iOS & Android.</p>
    </div>
    <div className="detail-card" data-aos="fade-zoom-in" data-aos-duration="1000">
      <FaPaintBrush size={60} color="#333" />
      <h3>UI/UX Design</h3>
      <p>Our design team ensures a flawless and interactive user experience.</p>
    </div>
    <div className="detail-card"data-aos="fade-zoom-in" data-aos-duration="1000">
      <FaShoppingCart size={60} color="#333" />
      <h3>E-Commerce Solutions</h3>
      <p>From Shopify to custom platforms, we build e-commerce solutions that scale.</p>
    </div>
  </div>
</section>
      {/* Process Section */}
      <section className="service-process">
        <h2>Our Work Process</h2>
        <div className="process-steps">
          <div className="step"data-aos="fade-zoom-in" data-aos-duration="1000">
            <h3>1. Consultation</h3>
            <p>Understanding your requirements and business goals.</p>
          </div>
          <div className="step"data-aos="fade-zoom-in" data-aos-duration="1000">
            <h3>2. Strategy & Planning</h3>
            <p>Defining a roadmap and choosing the right technologies.</p>
          </div>
          <div className="step"data-aos="fade-zoom-in" data-aos-duration="1000">
            <h3>3. Design & Development</h3>
            <p>Creating user-friendly interfaces and building functional solutions.</p>
          </div>
          <div className="step"data-aos="fade-zoom-in" data-aos-duration="1000">
            <h3>4. Testing & Deployment</h3>
            <p>Ensuring quality assurance before delivering the final product.</p>
          </div>
        </div>
      </section>

   

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <h2>Why Choose Crafthive Solution?</h2>
        <div className="choose-grid">
          <div className="choose-item"data-aos="fade-zoom-in" data-aos-duration="1000">
            <h3>Experienced Team</h3>
            <p>Our experts have years of experience in the IT industry.</p>
          </div>
          <div className="choose-item"data-aos="fade-zoom-in" data-aos-duration="1000">
            <h3>Latest Technologies</h3>
            <p>We use the most advanced tools and frameworks for development.</p>
          </div>
          <div className="choose-item"data-aos="fade-zoom-in" data-aos-duration="1000">
            <h3>24/7 Support</h3>
            <p>We provide dedicated support and maintenance services.</p>
          </div>
          <div className="choose-item"data-aos="fade-zoom-in" data-aos-duration="1000">
            <h3>Custom Solutions</h3>
            <p>Every project is tailored to meet specific business needs.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div className="value-proposition-cta">
        <h2 className="value-proposition-cta-title">Ready to get started?</h2>
        <p className="value-proposition-cta-text">Let’s turn your ideas into reality. Contact us today!</p>
        <button onClick={handleClick} className="value-proposition-cta-button">Contact Us</button>
      </div>
     
    </div>
   
  );
};

export default HighlightingServices;
