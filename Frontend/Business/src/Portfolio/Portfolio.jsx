import React, { useState } from "react";

const images = ["/fyp1.png", "/fyp2.png", "/fyp2(1).png", "/fyp2(2).png", "/fyp2(3).png","/fyp3.png","/fyp3(1).png","/fyp3(2).png","/fyp3(3).png"];

const animations = [
  {
    title: "3D Product Visualization",
    description:
      "A high-quality 3D animation showcasing a realistic product design. This animation highlights detailed textures, lighting effects, and smooth camera movements to create a visually appealing product presentation.",
    videoPath: "/pv1.mp4",
  },
  {
    title: "3D Animated Short Film",
    description:
      "An immersive short film created using advanced 3D modeling and animation techniques. This project focuses on character movements, environment rendering, and cinematic storytelling to engage the audience.",
    videoPath: "/pv2.mp4",
  },
  {
    title: "Architectural 3D Rendering",
    description:
      "A 3D animation presenting an architectural project with realistic lighting, shadows, and material reflections. This visualization provides a detailed walkthrough of the building's structure and design elements.",
    videoPath: "/pv3.mp4",
  },
];

const ThreeDPortfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <section className="portfolio-wrapper">
      <div className="portfolio-banner">
        <h3>Portfolio</h3>
      </div>
      <h2 className="portfolio-heading">3D Animation Showcase</h2>

      <div className="portfolio-grid">
        {animations.map((animation, index) => (
          <div key={index} className="portfolio-item">
            <video controls className="portfolio-video">
              <source src={animation.videoPath} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h3 className="portfolio-title">{animation.title}</h3>
            <p className="portfolio-description">{animation.description}</p>
          </div>
        ))}
      </div>

      {/* Project Section */}
      <h2 className="portfolio-heading">OUR Projects</h2>
      <div className="project-wrapper">
        
        {/* Static Project Card */}
        <div className="project-card">
          <img src="/project1.png" alt="Project 1" className="project-image" />
          <h2 className="project-title">CRM Project</h2>
          <p className="project-description">
          A customer relationship management (CRM) system built using the MERN stack, enabling businesses to manage customer data, track interactions, and streamline workflows. It includes features like user authentication, contact management, task tracking, and real-time updates for enhanced productivity.
          </p>
          <a
            href="https://dev-talkdailyinc.teleyork.com/#/login"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View Project
          </a>
        </div>

        {/* Manual Image Slider */}
        <div className="project-slider-card">
          <div className="image-slider">
            <img
              src={images[currentIndex]}
              alt="Slider"
              className="slider-image"
            />
            <button className="slider-btn prev" onClick={handlePrev}>
              &#10094;
            </button>
            <button className="slider-btn next" onClick={handleNext}>
              &#10095;
            </button>
          </div>
          <h2 className="project-title">E-Services for transporting agencies</h2>
          <p className="project-description">
          E-Services for Transporting Agencies is a web-based platform built with HTML, CSS, JavaScript, PHP, and MySQL to manage transport services. It includes user and admin modules for booking, tracking, and managing transport operations efficiently.
          </p>
        </div>
      </div>
    
    </section>
  );
};

export default ThreeDPortfolio;
