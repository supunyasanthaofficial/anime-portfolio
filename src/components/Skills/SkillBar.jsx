import React, { useState, useEffect, useRef } from "react";
import "./Skills.css";

const SkillBar = ({ name, percentage, color, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const barRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => {
      if (barRef.current) {
        observer.unobserve(barRef.current);
      }
    };
  }, []);

  return (
    <div className="skill-item" ref={barRef}>
      <div className="skill-header">
        <span className="skill-name">{name}</span>
        <span className="skill-percentage">{percentage}%</span>
      </div>
      <div className="skill-bar">
        <div
          className="skill-progress"
          style={{
            width: isVisible ? `${percentage}%` : "0%",
            backgroundColor: color,
            transition: `width 1.5s ease ${delay}s`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
