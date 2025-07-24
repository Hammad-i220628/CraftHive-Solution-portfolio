import React, { useState } from "react";

const images = ["/fyp1.png", "/fyp2.png", "/fyp2(1).png", "/fyp2(2).png", "/fyp2(3).png", "/fyp3.png", "/fyp3(1).png", "/fyp3(2).png", "/fyp3(3).png"];

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
      
      <h2 className="portfolio-heading">OUR Projects</h2>
      <div className="project-wrapper">
        
  {/* Manual Image Slider */}
        <div className="project-slider-card">
          <div className="image-slider">
            <img src="/pro2.jpg" alt="Project 1" className="project-image" />
            <button className="slider-btn prev" onClick={handlePrev}>
              ❮
            </button>
            <button className="slider-btn next" onClick={handleNext}>
              ❯
            </button>
          </div>
          <h2 className="project-title">CineFlix</h2>
          <a
            href="https://cineflix-omega.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View Project
          </a>
        </div>

        {/* Static Project Card */}
        <div className="project-card">
          <img src="/pro1.jpg" alt="Project 1" className="project-image" />
          <h2 className="project-title">apotheka</h2>
          <a
            href="https://apotheka.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View Project
          </a>
        </div>

    

        {/* Additional Project Card 1 */}
        <div className="project-card">
          <img src="/pro3.jpg" alt="WhiteLabelHQ" className="project-image" />
          <h2 className="project-title">WhiteLabelHQ</h2>
          <a
            href="https://whitelabelhqofficial.created.app/#pricing"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View Project
          </a>
        </div>

        {/* Additional Project Card 2 */}
        <div className="project-card">
          <img src="/pro4.jpg" alt="BrandOwnIdentity" className="project-image" />
          <h2 className="project-title">BrandOwnIdentity</h2>
          <a
            href="https://brand-ownidentity.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default ThreeDPortfolio;