import React, { useEffect, useRef } from "react";
import "./About.css";
import AboutScene from "./AboutScene";

const About = () => {
  const sectionRef = useRef(null);
  const characterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      const elements =
        sectionRef.current.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="about section demon-slayer-theme"
      ref={sectionRef}
      style={{ position: "relative", overflow: "hidden" }}
    >
      <AboutScene />
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="section-header">
          <h2 className="section-title animate-on-scroll">
            <span className="title-underline">About Me</span>
          </h2>
          <div className="breathing-demon animate-on-scroll"></div>
        </div>
        <div className="about-content">
          <div className="about-image animate-on-scroll">
            <div className="image-wrapper">
              <div className="demon-slayer-character" ref={characterRef}>
                <div className="character-base">
                  <div className="character-head">
                    <div className="character-hair">
                      <div className="hair-strand strand-1"></div>
                      <div className="hair-strand strand-2"></div>
                      <div className="hair-strand strand-3"></div>
                    </div>
                    <div className="character-face">
                      <div className="character-eyes">
                        <div className="eye left-eye">
                          <div className="pupil"></div>
                          <div className="sparkle"></div>
                        </div>
                        <div className="eye right-eye">
                          <div className="pupil"></div>
                          <div className="sparkle"></div>
                        </div>
                      </div>
                      <div className="character-scar">
                        <div className="scar-line line-1"></div>
                        <div className="scar-line line-2"></div>
                        <div className="scar-line line-3"></div>
                      </div>
                      <div className="character-mouth"></div>
                    </div>
                    <div className="character-haori">
                      <div className="haori-pattern pattern-1"></div>
                      <div className="haori-pattern pattern-2"></div>
                    </div>
                  </div>
                  <div className="character-body">
                    <div className="uniform-details">
                      <div className="uniform-line"></div>
                      <div className="uniform-button"></div>
                    </div>
                    <div className="character-sword">
                      <div className="sword-handle">
                        <div className="handle-wrap"></div>
                        <div className="handle-guard">
                          <div className="guard-detail"></div>
                        </div>
                      </div>
                      <div className="sword-blade">
                        <div className="blade-glow"></div>
                        <div className="blade-edge"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="character-shadow"></div>
                <div className="breath-effect water-breath">
                  <div className="breath-particle particle-1"></div>
                  <div className="breath-particle particle-2"></div>
                  <div className="breath-particle particle-3"></div>
                </div>
              </div>
              <div className="floating-nichirin">
                <div className="nichirin-blade">
                  <div className="blade-glow"></div>
                  <div className="blade-text">滅</div>
                </div>
                <div className="nichirin-handle">
                  <div className="handle-design"></div>
                </div>
              </div>
              <div className="floating-icons">
                <div className="icon icon-1">⚡</div>
                <div className="icon icon-2">🔥</div>
                <div className="icon icon-3">💧</div>
                <div className="icon icon-4">🌪️</div>
              </div>
            </div>
          </div>
          <div className="about-text animate-on-scroll">
            <h3>
              <span className="text-gradient">Breathing Techniques</span> in
              Digital Creation
            </h3>
            <p>
              Hello! I'm a Mobile App Developer with a passion for creating
              intuitive and engaging applications. Like a Demon Slayer mastering
              their breathing technique, I've honed my skills to build apps that
              are not only functional but also provide exceptional user
              experiences.
            </p>
            <p>
              My journey in mobile development began when I discovered the power
              of React Native and how it enables creating cross-platform
              applications with a single codebase—much like a single sword
              technique that works against all demons.
            </p>
            <div className="about-details">
              <div className="detail-item">
                <span className="label">Name:</span>
                <span className="value">Supun Yasantha</span>
              </div>
              <div className="detail-item">
                <span className="label">Breathing Style:</span>
                <span className="value">Mobile App Development</span>
              </div>
              <div className="detail-item">
                <span className="label">From:</span>
                <span className="value">Kandy, Sri Lanka</span>
              </div>
              <div className="detail-item">
                <span className="label">Rank:</span>
                <span className="value">Kinoe ( Intern)</span>
              </div>
            </div>
            <a href="#contact" className="btn demon-slayer-btn">
              <span>Hire Me</span>
              <div className="btn-sparkles">
                <div className="sparkle s1"></div>
                <div className="sparkle s2"></div>
                <div className="sparkle s3"></div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
