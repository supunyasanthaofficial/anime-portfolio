import React, { useState } from "react";
import "./Projects.css";

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="project-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="project-image">
        <img
          src={`/images/${project.image}`}
          alt={project.title}
          onError={(e) => {
            e.target.src = "/images/placeholder.jpg"; // Fallback image
          }}
        />
        <div className={`project-overlay ${isHovered ? "active" : ""}`}>
          <div className="project-links">
            <a href={project.link} className="project-link">
              <i className="fas fa-eye"></i>
            </a>
            <a href={project.github} className="project-link">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
