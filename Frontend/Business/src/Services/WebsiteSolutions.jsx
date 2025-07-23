import React from 'react'
import { TiTickOutline } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';
import { MdOutlineRocket } from "react-icons/md";
import { GiDarkSquad } from "react-icons/gi";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { RiReservedFill } from "react-icons/ri";
import { RiShakeHandsLine } from "react-icons/ri";
import { MdOutlineVerticalAlignTop } from "react-icons/md";
import { FaTools, FaClipboardCheck, FaHeadset, FaCogs } from "react-icons/fa";
import Footer from '../Home/Footer';
const WebsiteSolutions = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/ContactForm'); 
    }
  return (
    <>
        <div className='ThreeD-one'>
    <h1>Professional <span style={{color:"#FDF897",fontSize:"2.4rem"}}> Website Solutions </span>  <br/> for Seamless User Experience and Powerful Performance</h1>
     <p>By choosing CraftHive Solutions' expert website solutions, businesses can enhance user engagement, improve functionality, and provide a seamless experience for their audience.</p>
     
    <ul>
      <h3><TiTickOutline />Hire top 1% development talent</h3>
      <h3><TiTickOutline />ISO 9001 & 2015 certified</h3>
      <h3><TiTickOutline />50+ Professional Developers</h3>
    </ul>
    <button className='threeD-btn' style={{cursor:"pointer"}} onClick={handleClick}>Lets Build Together</button>
    </div>

  
    {/* Portion 2............. */}

    
    <div className="animation-wrapper">
      <h2 className="title"data-aos="fade-up" data-aos-duration="1000"> CraftHive Solutions provides exceptional website solutions</h2>
      <p className="subtitle"data-aos="fade-up" data-aos-duration="1000">
      Our expert team offers a wide range of services, including frontend development, full-stack solutions, UI/UX design, and responsive web design, tailored to meet the unique needs of various industries. We ensure seamless functionality, high performance, and an engaging user experience, delivering impactful results for your business.
      </p>
      
      <div className="grid-container">
        <div className="text-content"data-aos="fade-up" data-aos-duration="1000">
          <p>
            <strong style={{color:"white", fontSize:"1.8rem"}}>Website Development</strong>
            <br />
            Our developers create dynamic, user-friendly websites with responsive design, seamless navigation, and optimized performance, ensuring an engaging and smooth user experience.
          </p>
          <p>
            <strong style={{color:"white", fontSize:"1.8rem"}} >Website Visualization</strong>
            <br />
            Showcase your brand with high-quality, visually appealing websites, enabling clients to experience every feature, design element, and functionality before launch.
          </p>
          <p>
            <strong style={{color:"white", fontSize:"1.8rem"}}>Website Creation</strong>
            <br />
            Our website development services deliver custom-built, responsive websites, enabling businesses to present their ideas effectively and engage their audience with a seamless, interactive experience.
          </p>
        </div>
        
        <div className="image-content"data-aos="fade-up" data-aos-duration="1000">
          <img src="websitesolution.jpg" alt="3D Animation" className="responsive-img" />
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
      Why Choose CraftHive Solutions for Website Solutions?
      </h1>
      <p className="why-choose-description"data-aos="fade-up" data-aos-duration="1000">
      By choosing CraftHive Solutions, you ensure high-quality, innovative website solutions that enhance user experience, improve functionality, and drive business growth with seamless design and performance.
      </p>

      <div className="why-choose-grid">
        <div className="why-choose-box"data-aos="fade-up" data-aos-duration="1000">
          <FaTools className="why-choose-icon" />
          <h4>Expertise and Experience</h4>
          <p>
            CraftHive Solutions has a strong track record in delivering high-quality 3D animations for various industries. Our skilled team consists of experienced animators and designers who are well-versed in the latest technologies.
          </p>
        </div>

        <div className="why-choose-box"data-aos="fade-up" data-aos-duration="1000">
          <FaClipboardCheck className="why-choose-icon" />
          <h4>Comprehensive Services</h4>
          <p>
            We offer full-fledged animation services, including motion graphics, product visualization, and character animations, ensuring top-notch quality and innovation.
          </p>
        </div>

        <div className="why-choose-box"data-aos="fade-up" data-aos-duration="1000">
          <FaHeadset className="why-choose-icon" />
          <h4>24/7 Support</h4>
          <p>
            Our team provides round-the-clock assistance, ensuring timely updates, bug fixes, and performance optimizations for all animation projects.
          </p>
        </div>

        <div className="why-choose-box"data-aos="fade-up" data-aos-duration="1000">
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

export default WebsiteSolutions
