import React from "react";
import SkillBar from "./SkillBar";
import "./Skills.css";

const Skills = () => {
  const skills = [
    { name: "React", percentage: 45, color: "#61DAFB" },
    { name: "React-Native", percentage: 45, color: "#61DAFB" },
    { name: "Flutter", percentage: 35, color: "#61DAFB" },
    { name: "JavaScript", percentage: 50, color: "#F7DF1E" },
    { name: "CSS", percentage: 75, color: "#1572B6" },
    { name: "UI/UX Design", percentage: 30, color: "#FF6B6B" },
    { name: "Animation", percentage: 64, color: "#4ECDC4" },
  ];

  return (
    <section id="skills" className="skills section">
      {/* Background Image Container */}
      <div className="">
        <div className="skills-overlay"></div>
      </div>

      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-content">
          <div className="skills-text">
            <h3>Technologies I Work With</h3>
            <p>
              I specialize in creating engaging mobile applications with modern
              technologies. My focus is on performance, clean UI, and creating
              memorable user experiences.
            </p>
            <div className="skills-stats">
              <div className="stat">
                <span className="stat-number">5+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat">
                <span className="stat-number">0</span>
                <span className="stat-label">Happy Clients</span>
              </div>
              <div className="stat">
                <span className="stat-number">Intern</span>
                <span className="stat-label">Experience Level</span>
              </div>
            </div>
          </div>
          <div className="skills-bars">
            {skills.map((skill, index) => (
              <SkillBar
                key={index}
                name={skill.name}
                percentage={skill.percentage}
                color={skill.color}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
