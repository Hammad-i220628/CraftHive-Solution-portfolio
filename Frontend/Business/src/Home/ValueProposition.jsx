import React from 'react'
import SeparateComp from './SeparateComp'
import Footer from "./Footer"
import { useNavigate } from 'react-router-dom';
const  ValueProposition = () => {
  const navigate = useNavigate();
  const handleClick = () => {
      navigate('/ContactForm'); 
  }
  return (
    <>
     <div className="value-proposition-container" >
  {/* Header Section */}
  <div className="value-proposition-header">
    <h1 className="value-proposition-title">Why Choose Our Services?</h1>
    <p className="value-proposition-description">
      We offer top-notch development services using the latest technologies, ensuring high-quality solutions tailored to your needs.
    </p>
  </div>
</div>
{/* portion 2...... */}
{/* Key Benefits Section */}
<div className="value-proposition-benefits">
  <div className="value-proposition-benefit"data-aos="flip-left" data-aos-duration="1000">
    <img src="Value1.jpg" alt="Benefit 1" className="value-proposition-benefit-img" />
    <h3 className="value-proposition-benefit-title">Speed and Efficiency</h3>
    <p className="value-proposition-benefit-text">We deliver fast, efficient, and reliable solutions, reducing time-to-market.</p>
  </div>
  <div className="value-proposition-benefit"data-aos="flip-left" data-aos-duration="1000">
    <img src="Value2.jpg" alt="Benefit 2" className="value-proposition-benefit-img" />
    <h3 className="value-proposition-benefit-title">Scalable Solutions</h3>
    <p className="value-proposition-benefit-text">Our solutions are scalable and adaptable to your growing business needs.</p>
  </div>
  <div className="value-proposition-benefit"data-aos="flip-left" data-aos-duration="1000">
    <img src="Value3.jpg" alt="Benefit 3" className="value-proposition-benefit-img" />
    <h3 className="value-proposition-benefit-title">Cross-Platform Development</h3>
    <p className="value-proposition-benefit-text">We specialize in developing apps that work seamlessly across multiple platforms.</p>
  </div>
  <div className="value-proposition-benefit" data-aos="flip-left" data-aos-duration="1000">
    <img src="Value5.jpg" alt="Benefit 4" className="value-proposition-benefit-img" />
    <h3 className="value-proposition-benefit-title">Customer-Centric Approach</h3>
    <p className="value-proposition-benefit-text">Our approach is driven by the needs of the customer, ensuring satisfaction every step of the way.</p>
  </div>
</div>
<SeparateComp/>


   {/* Call to Action Section */}
   <div className="value-proposition-cta">
        <h2 className="value-proposition-cta-title">Ready to get started?</h2>
        <p className="value-proposition-cta-text">Let’s turn your ideas into reality. Contact us today!</p>
        <button onClick={handleClick} className="value-proposition-cta-button">Contact Us</button>
      </div>
      <Footer/>
    </>
  )
}

export default  ValueProposition
