import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <div className="image-wrapper">
              <div
                className="main-image"
                style={{
                  backgroundImage: "url('/images/dog.png')", // Remove 'public' from path
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="floating-icons">
                {/* <div className="icon">🎨</div>
                <div className="icon">💻</div>
                <div className="icon">🎬</div>
                <div className="icon">🎵</div> */}
              </div>
            </div>
          </div>
          <div className="about-text">
            <h3>Creating Magical Digital Experiences</h3>
            <p>
              Hello! I'm a Mobile App Developer with a passion for creating
              intuitive and engaging applications. I love building apps that are
              not only functional but also provide exceptional user experiences.
            </p>
            <p>
              My journey in mobile development began when I discovered the power
              of React Native and how it enables creating cross-platform
              applications with a single codebase.
            </p>
            <div className="about-details">
              <div className="detail-item">
                <span className="label">Name:</span>
                <span className="value">Supun Yasantha</span>
              </div>
              <div className="detail-item">
                <span className="label">Email:</span>
                <span className="value">supunyasantha.official@gmail.com</span>
              </div>
              <div className="detail-item">
                <span className="label">From:</span>
                <span className="value">Kandy, Sri Lanka</span>
              </div>
              <div className="detail-item">
                <span className="label">Specialty:</span>
                <span className="value">Mobile App Developer</span>
              </div>
            </div>
            <a href="#contact" className="btn">
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
