import React from 'react'
import { useNavigate } from 'react-router-dom';
import SeparateComp from '../Home/SeparateComp';
import Footer from '../Home/Footer';
const About = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/ContactForm'); // Redirect to the contact page when button is clicked
      };
    
  return (
    <>
     <div className="hero-container">
      <h1>We specialize in providing services that are designed to meet your unique needs.</h1>
      <p>Ivan Infotech empowers businesses like yours to drive growth, reduce costs, enhance efficiency, and thrive in the digital age.</p>
      <button onClick={handleClick}>Get a free consultation</button>
    </div>

    {/* portion 2......... */}
    <div className="our-story-container">
      {/* Section Headings */}
      <h2 className="section-title">Our Story</h2>
      <h1 className="section-heading">
        FORMED TO DIGITIZE INNOVATION, GLOBALLY
      </h1>

      {/* Content Section with Two Columns */}
      <div className="content-container">
        <div className="left-content"data-aos="fade-up" data-aos-duration="1000">
          <p>
            Ivan is a family of professionals formed with passionate and dedicated 
            thoughts, dreams, and determination. When there’s a will, there’s a way – 
            This is what Ivan’s leadership team believes, and this belief is the key 
            inspiration of Ivan’s successful journey since 2016.
            <br /><br />
            We were formed with a vision to offer startups and enterprises the opportunity 
            to take their business to a new height with something unique, which helped us 
            in shaping up Ivan.
          </p>
        </div>
        <div className="right-content"data-aos="fade-up" data-aos-duration="1000">
          <p>
            Our dream was to pump up global and national businesses with the rare combination 
            of expert strategies, ultimate IT solutions, creative designs, and development solutions, 
            which we achieved with excellence. There is no looking back since then.
            <br />
            Today, we are an ultimate technology destination delivering 360° IT consulting solutions, globally. Our list of recurring and loyal clientele portrays our capabilities in the best possible way. We know no impede but the only advancement by overcoming every hurdle with fineness, time and again.
          </p>
         <button className="cta-button" onClick={handleClick}>Let’s Build Together</button>
        </div>
      </div>
    </div>
    <SeparateComp/>
    <Footer/>
    </>
  )
}

export default About

