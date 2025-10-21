import React, { useState, useEffect, useRef } from "react";
import "./Skills.css";

const SkillBar = ({ name, percentage, color, delay, isVisible }) => {
  return (
    <div className="skill-item">
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
            transition: `width 1.5s ease ${delay}s, box-shadow 0.3s ease`,
            boxShadow: isVisible
              ? `0 0 10px ${color}, 0 0 20px ${color}`
              : "none",
          }}
        >
          <div className="skill-sparkle"></div>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState([]);
  const sectionRef = useRef(null);
  const skillsRef = useRef(null);

  const skills = [
    { name: "React", percentage: 60, color: "#61DAFB", icon: "⚛️" },
    { name: "React Native", percentage: 55, color: "#61DAFB", icon: "📱" },
    { name: "Flutter", percentage: 75, color: "#02569B", icon: "💙" },
    { name: "JavaScript", percentage: 65, color: "#F7DF1E", icon: "🟨" },
    { name: "CSS/SCSS", percentage: 75, color: "#1572B6", icon: "🎨" },
    { name: "UI/UX Design", percentage: 80, color: "#FD2155", icon: "✨" },
    { name: "Animation", percentage: 68, color: "#4ECDC4", icon: "🌟" },
    { name: "Supabase", percentage: 78, color: "#FFCB2B", icon: "🔥" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate each skill with a delay
            skills.forEach((_, index) => {
              setTimeout(() => {
                setVisibleSkills((prev) => [...prev, index]);
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [skills.length]);

  return (
    <section
      id="skills"
      className="skills section demon-slayer-skills"
      ref={sectionRef}
    >
      {/* Animated Background Elements */}
      <div className="skills-bg-elements">
        <div className="bg-element bg-element-1"></div>
        <div className="bg-element bg-element-2"></div>
        <div className="bg-element bg-element-3"></div>
        <div className="floating-sword"></div>
        <div className="floating-mask"></div>
      </div>

      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-underline">My Breathing Techniques</span>
          </h2>
          <div className="breathing-demon"></div>
        </div>

        <div className="skills-content">
          <div className="skills-text">
            <h3>
              <span className="text-gradient">Combat Styles</span> I've Mastered
            </h3>
            <p>
              Like a Demon Slayer perfecting their breathing techniques, I've
              honed my skills in modern technologies. My focus is on creating
              powerful, engaging applications with clean UI and exceptional user
              experiences.
            </p>

            <div className="skills-stats">
              <div className="stat">
                <span className="stat-number">5+</span>
                <span className="stat-label">
                  Demons Slain
                  <br />
                  (Projects Completed)
                </span>
              </div>
              <div className="stat">
                <span className="stat-number">0</span>
                <span className="stat-label">
                  Villages Saved
                  <br />
                  (Happy Clients)
                </span>
              </div>
              <div className="stat">
                <span className="stat-number">Kinoe</span>
                <span className="stat-label">
                  Corps Rank
                  <br />
                  (Experience Level)
                </span>
              </div>
            </div>

            <div className="breathing-techniques">
              <h4>Special Breathing Techniques</h4>
              <div className="techniques-list">
                <div className="technique">
                  <span className="technique-icon">💧</span>
                  <span className="technique-name">Water Breathing</span>
                </div>
                <div className="technique">
                  <span className="technique-icon">🔥</span>
                  <span className="technique-name">Flame Breathing</span>
                </div>
                <div className="technique">
                  <span className="technique-icon">⚡</span>
                  <span className="technique-name">Thunder Breathing</span>
                </div>
              </div>
            </div>
          </div>

          <div className="skills-bars" ref={skillsRef}>
            {skills.map((skill, index) => (
              <SkillBar
                key={index}
                name={
                  <span className="skill-name-with-icon">
                    <span className="skill-icon">{skill.icon}</span>
                    {skill.name}
                  </span>
                }
                percentage={skill.percentage}
                color={skill.color}
                delay={index * 0.1}
                isVisible={visibleSkills.includes(index)}
              />
            ))}
          </div>
        </div>

        <div className="skills-footer">
          <div className="training-note">
            <span className="note-icon">💪</span>
            <p>Continuously training to master Total Concentration Breathing</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
