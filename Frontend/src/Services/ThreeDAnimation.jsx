import React from 'react'
import { TiTickOutline } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';
import { FaFilm, FaCubes, FaBuilding } from "react-icons/fa";
import { MdOutlineRocket } from "react-icons/md";
import { GiDarkSquad } from "react-icons/gi";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { RiReservedFill } from "react-icons/ri";
import { RiShakeHandsLine } from "react-icons/ri";
import { MdOutlineVerticalAlignTop } from "react-icons/md";
import { FaTools, FaClipboardCheck, FaHeadset, FaCogs } from "react-icons/fa";
import Footer from "../Home/Footer"
const ThreeDAnimation = () => {
  const navigate = useNavigate();
  const handleClick = () => {
      navigate('/ContactForm'); 
  }
  return (
    <>
    <div className='ThreeD-one'>
    <h1>Custom <span style={{color:"#FDF897",fontSize:"2.4rem"}}> 3d animation </span>  services<br/> for for Engaging and Immersive Visuals.</h1>
     <p>By leveraging CraftHive Solutions' custom 3D animation services, companies can enhance visual storytelling and create immersive digital experiences.
</p>
     
    <ul>
      <h3><TiTickOutline />Hire top 1% development talent</h3>
      <h3><TiTickOutline />ISO 9001 & 2015 certified</h3>
      <h3><TiTickOutline />50+ Professional Developers</h3>
    </ul>
    <button className='threeD-btn' style={{cursor:"pointer"}} onClick={handleClick}>Lets Build Together</button>
    </div>

    {/* portion 2..... */}


    <div className="animation-wrapper">
      <h2 className="title"data-aos="fade-up" data-aos-duration="1000">CraftHive Solutions Delivers Custom 3D Animation Services</h2>
      <p className="subtitle"data-aos="fade-up" data-aos-duration="1000">
      CraftHive Solutions provides top-notch 3D animation services. Our experienced animators craft stunning visuals, realistic motion graphics, and engaging animations for various industries, ensuring impactful storytelling and high-quality outputs.
      </p>
      
      <div className="grid-container">
        <div className="text-content"data-aos="fade-up" data-aos-duration="1000">
          <p>
            <strong style={{color:"white", fontSize:"1.8rem"}}>Character Animation</strong>
            <br />
            Our animators bring characters to life with fluid movements, realistic expressions, and engaging storytelling, ensuring an immersive viewer experience.
          </p>
          <p>
            <strong style={{color:"white", fontSize:"1.8rem"}} >Product Visualization</strong>
            <br />
            Showcase your products with high-definition 3D animations, enabling clients to visualize every angle, function, and feature before production.
          </p>
          <p>
            <strong style={{color:"white", fontSize:"1.8rem"}}>Architectural Animation</strong>
            <br />
            Our 3D architectural animations present realistic property walkthroughs, allowing real estate professionals and architects to display designs effectively.
          </p>
        </div>
        
        <div className="image-content"data-aos="fade-up" data-aos-duration="1000">
          <img src="Animation3.jpg" alt="3D Animation" className="responsive-img" />
        </div>
      </div>
    </div>
      {/* portion 3..... */}
      <div className="threeD-solutions-wrapper">
      <h1 className="threeD-solutions-title">3D Animation Solutions</h1>
      <p className="threeD-solutions-description">
        Our expert team specializes in crafting high-quality 3D animations, providing solutions for various industries, including entertainment, product marketing, and architectural visualization.
      </p>

      <div className="threeD-solutions-grid">
        {/* 3D Motion Graphics */}
        <div className="threeD-solution-box"data-aos="fade-in" data-aos-duration="1000">
          <FaFilm className="threeD-solution-icon" />
          <h4 style={{fontSize:"1.3rem"}}>3D Motion Graphics</h4>
          <p>
            Our 3D motion graphics services enhance visual storytelling with high-quality animations, making them ideal for advertisements, explainer videos, and cinematic intros.
          </p>
        </div>

        {/* Product Animation */}
        <div className="threeD-solution-box"data-aos="fade-in" data-aos-duration="1000">
          <FaCubes className="threeD-solution-icon" />
          <h4 style={{fontSize:"1.3rem"}}>Product Animation</h4>
          <p>
            We create stunning 3D product animations to help businesses showcase their products with realistic visuals, improving customer engagement and understanding.
          </p>
        </div>

        {/* Architectural Visualization */}
        <div className="threeD-solution-box"data-aos="fade-in" data-aos-duration="1000">
          <FaBuilding className="threeD-solution-icon" />
          <h4 style={{fontSize:"1.3rem"}}>Architectural Visualization</h4>
          <p>
            Our architectural visualization services provide lifelike 3D renders, allowing architects and designers to present their projects with precision and clarity.
          </p>
        </div>
      </div>
    </div>

{/* portion 4...... */}
<div className="team-container">
  <div className="team-box" data-aos="flip-left" data-aos-duration="1000">
    <MdOutlineRocket className="team-icon" />
    <h2>8+</h2>
    <div style={{ fontSize: '1rem', color: '#555' }}>Years Experience</div>
  </div>
  <div className="team-box" data-aos="flip-left" data-aos-duration="1000">
    <GiDarkSquad className="team-icon" />
    <h2>120+</h2>
    <div style={{ fontSize: '1rem', color: '#555' }}>Talented Squad</div>
  </div>
  <div className="team-box" data-aos="flip-left" data-aos-duration="1000">
    <HiOutlineDesktopComputer className="team-icon" />
    <h2>500+</h2>
    <div style={{ fontSize: '1rem', color: '#555' }}>Projects Delivered</div>
  </div>
  <div className="team-box" data-aos="flip-left" data-aos-duration="1000">
    <RiReservedFill className="team-icon" />
    <h2>40+</h2>
    <div style={{ fontSize: '1rem', color: '#555' }}>Countries Served</div>
  </div>
  <div className="team-box" data-aos="flip-left" data-aos-duration="1000">
    <RiShakeHandsLine className="team-icon" />
    <h2>99%</h2>
    <div style={{ fontSize: '1rem', color: '#555' }}>Client Satisfaction</div>
  </div>
  <div className="team-box" data-aos="flip-left" data-aos-duration="1000">
    <MdOutlineVerticalAlignTop className="team-icon" />
    <h2>Top</h2>
    <div style={{ fontSize: '1rem', color: '#555' }}>Top Rating</div>
  </div>
</div>
      {/* portion 5........... */}

      <div className="why-choose-container">
      <h1 className="why-choose-title">
        Why Choose CraftHive Solutions for 3D Animation Services?
      </h1>
      <p className="why-choose-description">
        By choosing CraftHive Solutions, you ensure high-quality, cutting-edge 3D animation solutions that enhance storytelling, marketing, and product visualization.
      </p>

      <div className="why-choose-grid">
        <div className="why-choose-box">
          <FaTools className="why-choose-icon" />
          <h4>Expertise and Experience</h4>
          <p>
            CraftHive Solutions has a strong track record in delivering high-quality 3D animations for various industries. Our skilled team consists of experienced animators and designers who are well-versed in the latest technologies.
          </p>
        </div>

        <div className="why-choose-box">
          <FaClipboardCheck className="why-choose-icon" />
          <h4>Comprehensive Services</h4>
          <p>
            We offer full-fledged animation services, including motion graphics, product visualization, and character animations, ensuring top-notch quality and innovation.
          </p>
        </div>

        <div className="why-choose-box">
          <FaHeadset className="why-choose-icon" />
          <h4>24/7 Support</h4>
          <p>
            Our team provides round-the-clock assistance, ensuring timely updates, bug fixes, and performance optimizations for all animation projects.
          </p>
        </div>

        <div className="why-choose-box">
          <FaCogs className="why-choose-icon" />
          <h4>Customized Solutions</h4>
          <p>
            We tailor our animation services to meet the specific needs of your business, helping you achieve your goals with impactful visuals.
          </p>
        </div>
      </div>
    </div>
    <Footer/>

    </>
  )
}

export default ThreeDAnimation
