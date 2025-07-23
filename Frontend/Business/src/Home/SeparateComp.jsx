import React from 'react'
import { FaLaptopCode, FaShoppingCart, FaUserCog, FaMobileAlt, FaUsers, FaBrain, FaPalette, FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { MdOutlineRocket } from "react-icons/md";
import { GiDarkSquad } from "react-icons/gi";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { RiReservedFill } from "react-icons/ri";
import { RiShakeHandsLine } from "react-icons/ri";
import { MdOutlineVerticalAlignTop } from "react-icons/md";

const SeparateComp = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/ContactForm'); 
    }
  return (
    <>
      {/* 2nd portion...... */}
      <div className='container1'>
          <div className='c1child1'>
            <p>What we are Offering</p>
            <h1>Services Built Specifically <br/>for your <span style={{fontSize: "30px", fontWeight:'bold'}}>Business</span></h1>

          </div>
       
           <div className='c1child2'>
            <p>As a leading enterprise software development company, Ivan follows a solution-oriented approach. Thus, as a go-to custom software development company, we leverage the latest technologies like Blockchain, Artificial intelligence, AR, etc.</p>
           </div>
           
        </div>
{/* portion 3................ */}
<div className="container2">
      <div className="box">
        <FaLaptopCode className="icon" />
        <span>Web Development</span>
      </div>
      <div className="box">
        <FaShoppingCart className="icon" />
        <span>E-Commerce</span>
      </div>
      <div className="box">
        <FaUserCog className="icon" />
        <span>Software Development</span>
      </div>
      <div className="box">
        <FaMobileAlt className="icon" />
        <span>Mobile and TV App</span>
      </div>
      <div className="box">
        <FaUsers className="icon" />
        <span>Dedicated Teams</span>
      </div>
      <div className="box">
        <FaBrain className="icon" />
        <span>Artificial Intelligence</span>
      </div>
      <div className="box">
        <FaPalette className="icon" />
        <span>UI/UX Engineering</span>
      </div>
      <div className="box">
        <FaCheckCircle className="icon" />
        <span>QA</span>
      </div>
    </div>
    {/* <div style={{backgroundColor:"white"}} className="form-container">
      <input
        type="text"
        placeholder="Need custom enterprise software development ? "
        className="input-field"
        
      />
      <button onClick={handleClick} className="submit-button">Send a Request Now</button>
      </div> */}
      {/* portion 5....................... */}
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
    </>
  )
}

export default SeparateComp
