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
const ContentWriting = () => {
    const navigate = useNavigate();
  const handleClick = () => {
      navigate('/ContactForm'); 
  }
  return (
    <>
     <div className='ThreeD-one'>
    <h1>Professional <span style={{color:"#FDF897",fontSize:"2.4rem"}}> Content writing </span>  services<br/> for Engaging and Impactful Results</h1>
     <p>By choosing CraftHive Solutions' expert content writing services, businesses can enhance their brand messaging and connect with their audience more effectively.</p>
     
    <ul>
      <h3><TiTickOutline />Hire top 1% development talent</h3>
      <h3><TiTickOutline />ISO 9001 & 2015 certified</h3>
      <h3><TiTickOutline />50+ Professional Developers</h3>
    </ul>
    <button className='threeD-btn' style={{cursor:"pointer"}} onClick={handleClick}>Lets Build Together</button>
    </div>

    {/* Portion 2............. */}

    
    <div className="animation-wrapper">
      <h2 className="title"data-aos="fade-up" data-aos-duration="1000">CraftHive Delivers Expert Content Writing Services</h2>
      <p className="subtitle"data-aos="fade-up" data-aos-duration="1000">
      CraftHive Solutions provides exceptional content writing services. Our skilled writers create compelling copy, informative articles, and engaging content for various industries, ensuring impactful messaging and high-quality results
      </p>
      
      <div className="grid-container">
        <div className="text-content"data-aos="fade-up" data-aos-duration="1000">
          <p>
            <strong style={{color:"white", fontSize:"1.8rem"}}>Content Writing</strong>
            <br />
            Our writers craft captivating content with engaging language, clear messaging, and persuasive storytelling, ensuring an impactful reader experience.
          </p>
          <p>
            <strong style={{color:"white", fontSize:"1.8rem"}} >Content Visualization</strong>
            <br />
            Showcase your ideas with high-quality, engaging content, enabling clients to visualize every aspect, message, and detail before publication.
          </p>
          <p>
            <strong style={{color:"white", fontSize:"1.8rem"}}>Content Creation</strong>
            <br />
            Our content writing services deliver well-crafted articles, blog posts, and copy, allowing businesses to communicate their ideas effectively and engage their audience.
          </p>
        </div>
        
        <div className="image-content"data-aos="fade-up" data-aos-duration="1000">
          <img src="contentwriting1.jpg" alt="3D Animation" className="responsive-img" />
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
      <h1 className="why-choose-title"data-aos="fade-in" data-aos-duration="1000">
        Why Choose CraftHive Solutions for Content Writing Services?
      </h1>
      <p className="why-choose-description"data-aos="fade-in" data-aos-duration="1000">
      By choosing CraftHive Solutions, you ensure high-quality, engaging content that enhances brand messaging, boosts audience engagement, and drives impactful results across various platforms.
      </p>

      <div className="why-choose-grid">
        <div className="why-choose-box"data-aos="fade-in" data-aos-duration="1000">
          <FaTools className="why-choose-icon" />
          <h4>Expertise and Experience</h4>
          <p>
            CraftHive Solutions has a strong track record in delivering high-quality 3D animations for various industries. Our skilled team consists of experienced animators and designers who are well-versed in the latest technologies.
          </p>
        </div>

        <div className="why-choose-box"data-aos="fade-in" data-aos-duration="1000">
          <FaClipboardCheck className="why-choose-icon" />
          <h4>Comprehensive Services</h4>
          <p>
            We offer full-fledged animation services, including motion graphics, product visualization, and character animations, ensuring top-notch quality and innovation.
          </p>
        </div>

        <div className="why-choose-box"data-aos="fade-in" data-aos-duration="1000">
          <FaHeadset className="why-choose-icon" />
          <h4>24/7 Support</h4>
          <p>
            Our team provides round-the-clock assistance, ensuring timely updates, bug fixes, and performance optimizations for all animation projects.
          </p>
        </div>

        <div className="why-choose-box"data-aos="fade-in" data-aos-duration="1000">
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

export default ContentWriting
