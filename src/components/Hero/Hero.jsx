import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
        {/* Add video element */}
        <video autoPlay loop muted playsInline className="hero-video">
          <source src="/videos/deamonSlayer.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="title-line">Welcome to My</span>
              <span className="title-line accent">Anime Portfolio</span>
            </h1>
            <p className="hero-description">
              I'm a passionate Mobile App Developer who loves creating
              beautiful, interactive experiences inspired by anime aesthetics.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn">
                View My Work
              </a>
              <a href="#contact" className="btn btn-outline">
                Get In Touch
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-container">
              <img
                src="/public/images/dog.png"
                alt="Profile"
                className="round-image"
              />
              <div className="floating-element"></div>
              <div className="floating-element"></div>
              <div className="floating-element"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <span></span>
      </div>
    </section>
  );
};

export default Hero;
