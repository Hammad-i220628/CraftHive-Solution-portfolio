import React from 'react'
import { TiTickOutline } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';
import { MdOutlineRocket } from "react-icons/md";
import { GiDarkSquad } from "react-icons/gi";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { RiReservedFill } from "react-icons/ri";
import { RiShakeHandsLine } from "react-icons/ri";
import { MdOutlineVerticalAlignTop } from "react-icons/md";
import { FaTools, FaClipboardCheck, FaHeadset, FaCogs, FaCode, FaMobile, FaDatabase } from "react-icons/fa";
import Footer from '../Home/Footer';

const WebDevelopment = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/ContactForm'); 
    }
  return (
    <>
        <div className='ThreeD-one'>
    <h1>Professional <span style={{color:"#FDF897",fontSize:"2.4rem"}}> Web Development </span>  <br/> for Modern, Scalable, and High-Performance Solutions</h1>
     <p>By choosing CraftHive Solutions' expert web development services, businesses can create powerful, responsive, and user-friendly web applications that drive engagement and business growth.</p>
     
    <ul>
      <h3><TiTickOutline />Hire top 1% development talent</h3>
      <h3><TiTickOutline />ISO 9001 & 2015 certified</h3>
      <h3><TiTickOutline />50+ Professional Developers</h3>
    </ul>
    <button className='threeD-btn' style={{cursor:"pointer"}} onClick={handleClick}>Lets Build Together</button>
    </div>

    {/* Portion 2............. */}
    <div className="animation-wrapper">
      <h2 className="title"data-aos="fade-up" data-aos-duration="1000">CraftHive Solutions provides exceptional web development services</h2>
      <p className="subtitle"data-aos="fade-up" data-aos-duration="1000">
      Our expert team offers a comprehensive range of web development services, including frontend development, full-stack solutions, e-commerce platforms, and responsive web design, tailored to meet the unique needs of various industries. We ensure seamless functionality, high performance, and an engaging user experience, delivering impactful results for your business.
      </p>
      
      <div className="grid-container">
        <div className="text-content"data-aos="fade-up" data-aos-duration="1000">
          <p>
            <strong style={{color:"white", fontSize:"1.8rem"}}>Custom Web Development</strong>
            <br />
            Our developers create dynamic, scalable web applications with modern frameworks, responsive design, seamless navigation, and optimized performance, ensuring an engaging and smooth user experience.
          </p>
          <p>
            <strong style={{color:"white", fontSize:"1.8rem"}} >E-Commerce Solutions</strong>
            <br />
            Build powerful online stores with secure payment gateways, inventory management, and user-friendly interfaces that drive sales and enhance customer experience across all devices.
          </p>
          <p>
            <strong style={{color:"white", fontSize:"1.8rem"}}>Full-Stack Development</strong>
            <br />
            Our full-stack development services deliver complete web solutions with robust backend systems, interactive frontends, and seamless database integration for comprehensive business applications.
          </p>
        </div>
        
        <div className="image-content"data-aos="fade-up" data-aos-duration="1000">
          <img src="websitesolution.jpg" alt="Web Development" className="responsive-img" />
        </div>
      </div>
    </div>

    {/* Web Development Solutions Section */}
    <div className="threeD-solutions-wrapper">
      <h1 className="threeD-solutions-title">Web Development Solutions</h1>
      <p className="threeD-solutions-description">
        Our expert team specializes in creating modern, scalable web applications using the latest technologies and frameworks, providing solutions for various industries and business needs.
      </p>

      <div className="threeD-solutions-grid">
        {/* Frontend Development */}
        <div className="threeD-solution-box"data-aos="fade-in" data-aos-duration="1000">
          <FaCode className="threeD-solution-icon" />
          <h4 style={{fontSize:"1.3rem"}}>Frontend Development</h4>
          <p>
            Our frontend development services create engaging, responsive user interfaces using React, Vue.js, and Angular, ensuring optimal user experience across all devices and browsers.
          </p>
        </div>

        {/* Backend Development */}
        <div className="threeD-solution-box"data-aos="fade-in" data-aos-duration="1000">
          <FaDatabase className="threeD-solution-icon" />
          <h4 style={{fontSize:"1.3rem"}}>Backend Development</h4>
          <p>
            We build robust backend systems using Node.js, Python, and PHP, providing secure APIs, database management, and server-side logic for scalable web applications.
          </p>
        </div>

        {/* Progressive Web Apps */}
        <div className="threeD-solution-box"data-aos="fade-in" data-aos-duration="1000">
          <FaMobile className="threeD-solution-icon" />
          <h4 style={{fontSize:"1.3rem"}}>Progressive Web Apps</h4>
          <p>
            Our PWA development combines the best of web and mobile apps, offering offline functionality, push notifications, and app-like experiences through web browsers.
          </p>
        </div>
      </div>
    </div>

    {/* Portion 3............. */}
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

 {/* portion 4........... */}
 <div className="why-choose-container">
      <h1 className="why-choose-title"data-aos="fade-up" data-aos-duration="1000">
      Why Choose CraftHive Solutions for Web Development?
      </h1>
      <p className="why-choose-description"data-aos="fade-up" data-aos-duration="1000">
      By choosing CraftHive Solutions, you ensure high-quality, modern web development solutions that enhance user experience, improve functionality, and drive business growth with cutting-edge technology and performance.
      </p>

      <div className="why-choose-grid">
        <div className="why-choose-box"data-aos="fade-up" data-aos-duration="1000">
          <FaTools className="why-choose-icon" />
          <h4>Expertise and Experience</h4>
          <p>
            CraftHive Solutions has a proven track record in delivering high-quality web applications for various industries. Our skilled team consists of experienced developers who are well-versed in the latest web technologies.
          </p>
        </div>

        <div className="why-choose-box"data-aos="fade-up" data-aos-duration="1000">
          <FaClipboardCheck className="why-choose-icon" />
          <h4>Comprehensive Services</h4>
          <p>
            We offer full-stack web development services, including frontend, backend, database design, and deployment, ensuring complete solutions that meet all your business requirements.
          </p>
        </div>

        <div className="why-choose-box"data-aos="fade-up" data-aos-duration="1000">
          <FaHeadset className="why-choose-icon" />
          <h4>24/7 Support</h4>
          <p>
            Our team provides round-the-clock maintenance and support, ensuring your web applications run smoothly with regular updates, security patches, and performance optimizations.
          </p>
        </div>

        <div className="why-choose-box"data-aos="fade-up" data-aos-duration="1000">
          <FaCogs className="why-choose-icon" />
          <h4>Customized Solutions</h4>
          <p>
            We develop tailored web solutions that address your specific business needs, helping you achieve your goals with scalable, secure, and high-performance web applications.
          </p>
        </div>
      </div>
    </div>
    <Footer/>

    </>
  )
}

export default WebDevelopment