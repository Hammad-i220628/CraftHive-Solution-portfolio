import React from 'react'
import { TiTickOutline } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';
import { MdOutlineRocket } from "react-icons/md";
import { GiDarkSquad } from "react-icons/gi";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { RiReservedFill } from "react-icons/ri";
import { RiShakeHandsLine } from "react-icons/ri";
import { MdOutlineVerticalAlignTop } from "react-icons/md";
import { FaTools, FaClipboardCheck, FaHeadset, FaCogs, FaBrain, FaRobot, FaChartLine } from "react-icons/fa";
import Footer from '../Home/Footer';

const AIServices = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/ContactForm'); 
    }
  return (
    <>
        <div className='ThreeD-one'>
    <h1>Advanced <span style={{color:"#FDF897",fontSize:"2.4rem"}}> AI Automation </span>  <br/> for Intelligent Business Automation and Growth</h1>
     <p>By choosing CraftHive Solutions' cutting-edge AI services, businesses can automate processes, gain valuable insights, and enhance decision-making capabilities for sustainable growth.</p>
     
    <ul>
      <h3><TiTickOutline />Hire top 1% AI development talent</h3>
      <h3><TiTickOutline />ISO 9001 & 2015 certified</h3>
      <h3><TiTickOutline />50+ Professional AI Developers</h3>
    </ul>
    <button className='threeD-btn' style={{cursor:"pointer"}} onClick={handleClick}>Lets Build Together</button>
    </div>

    {/* Portion 2............. */}
    <div className="animation-wrapper">
      <h2 className="title"data-aos="fade-up" data-aos-duration="1000">CraftHive Solutions Delivers Expert AI Automation Services</h2>
      <p className="subtitle"data-aos="fade-up" data-aos-duration="1000">
      Our expert AI automation team provides comprehensive artificial intelligence solutions including machine learning, natural language processing, computer vision, and predictive analytics, tailored to meet the unique needs of various industries. We ensure intelligent automation, data-driven insights, and enhanced user experiences.
      </p>
      
      <div className="grid-container">
        <div className="text-content"data-aos="fade-up" data-aos-duration="1000">
          <p>
            <strong style={{color:"white", fontSize:"1.8rem"}}>Machine Learning</strong>
            <br />
            Our ML engineers develop intelligent algorithms that learn from data, enabling automated decision-making, pattern recognition, and predictive capabilities for your business processes.
          </p>
          <p>
            <strong style={{color:"white", fontSize:"1.8rem"}} >AI Chatbots & Virtual Assistants</strong>
            <br />
            Create intelligent conversational interfaces that provide 24/7 customer support, automate responses, and enhance user engagement with natural language processing capabilities.
          </p>
          <p>
            <strong style={{color:"white", fontSize:"1.8rem"}}>Computer Vision</strong>
            <br />
            Our computer vision solutions enable machines to interpret and analyze visual information, perfect for quality control, security systems, and automated inspection processes.
          </p>
        </div>
        
        <div className="image-content"data-aos="fade-up" data-aos-duration="1000">
          <img src="animationimg.jpg" alt="AI Services" className="responsive-img" />
        </div>
      </div>
    </div>

    {/* AI Solutions Section */}
    <div className="threeD-solutions-wrapper">
      <h1 className="threeD-solutions-title">AI Automation Solutions</h1>
      <p className="threeD-solutions-description">
        Our expert team specializes in developing intelligent AI automation solutions, providing cutting-edge technology for various industries, including healthcare, finance, retail, and manufacturing.
      </p>

      <div className="threeD-solutions-grid">
        {/* Machine Learning */}
        <div className="threeD-solution-box"data-aos="fade-in" data-aos-duration="1000">
          <FaBrain className="threeD-solution-icon" />
          <h4 style={{fontSize:"1.3rem"}}>Machine Learning</h4>
          <p>
            Our machine learning services help businesses automate processes, predict outcomes, and gain valuable insights from data through advanced algorithms and models.
          </p>
        </div>

        {/* AI Chatbots */}
        <div className="threeD-solution-box"data-aos="fade-in" data-aos-duration="1000">
          <FaRobot className="threeD-solution-icon" />
          <h4 style={{fontSize:"1.3rem"}}>AI Chatbots</h4>
          <p>
            We create intelligent chatbots and virtual assistants that provide seamless customer interactions, automate support, and enhance user experience across platforms.
          </p>
        </div>

        {/* Predictive Analytics */}
        <div className="threeD-solution-box"data-aos="fade-in" data-aos-duration="1000">
          <FaChartLine className="threeD-solution-icon" />
          <h4 style={{fontSize:"1.3rem"}}>Predictive Analytics</h4>
          <p>
            Our predictive analytics solutions help businesses forecast trends, optimize operations, and make data-driven decisions using advanced statistical models and AI algorithms.
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
      Why Choose CraftHive Solutions for AI Automation Services?
      </h1>
      <p className="why-choose-description"data-aos="fade-up" data-aos-duration="1000">
      By choosing CraftHive Solutions, you ensure cutting-edge AI automation solutions that drive innovation, automate processes, and provide intelligent insights for competitive advantage and business growth.
      </p>

      <div className="why-choose-grid">
        <div className="why-choose-box"data-aos="fade-up" data-aos-duration="1000">
          <FaTools className="why-choose-icon" />
          <h4>AI Automation Expertise and Innovation</h4>
          <p>
            CraftHive Solutions has extensive experience in AI automation development across various industries. Our skilled team consists of AI specialists, data scientists, and ML engineers who are experts in the latest AI automation technologies.
          </p>
        </div>

        <div className="why-choose-box"data-aos="fade-up" data-aos-duration="1000">
          <FaClipboardCheck className="why-choose-icon" />
          <h4>Comprehensive AI Automation Services</h4>
          <p>
            We offer end-to-end AI automation solutions, including machine learning, natural language processing, computer vision, and predictive analytics, ensuring intelligent automation and data-driven insights.
          </p>
        </div>

        <div className="why-choose-box"data-aos="fade-up" data-aos-duration="1000">
          <FaHeadset className="why-choose-icon" />
          <h4>24/7 AI Automation Support</h4>
          <p>
            Our team provides continuous monitoring and support for AI automation systems, ensuring optimal performance, model updates, and seamless integration with your existing infrastructure.
          </p>
        </div>

        <div className="why-choose-box"data-aos="fade-up" data-aos-duration="1000">
          <FaCogs className="why-choose-icon" />
          <h4>Custom AI Automation Solutions</h4>
          <p>
            We develop tailored AI automation solutions that address your specific business challenges, helping you achieve intelligent automation and gain competitive advantages through data-driven decision making.
          </p>
        </div>
      </div>
    </div>
    <Footer/>

    </>
  )
}

export default AIServices