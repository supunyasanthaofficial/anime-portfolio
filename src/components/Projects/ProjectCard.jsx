import React from "react";

const ProjectCard = ({ project }) => {
  // Function to get a placeholder based on project title if image is not available
  const getPlaceholder = (title) => {
    if (title.includes("Delivery")) return "🚚";
    if (title.includes("Music")) return "🎵";
    if (title.includes("Clothing") || title.includes("Fashion")) return "👗";
    if (title.includes("Flash")) return "⚡";
    if (title.includes("Hotel")) return "🏨";
    return "🗡️"; // Default Demon Slayer icon
  };

  return (
    <div className="project-card">
      <div className="project-image">
        {project.image ? (
          <img
            src={`/images/${project.image}`}
            alt={project.title}
            className="project-image-real"
          />
        ) : (
          <div className="project-image-placeholder">
            {getPlaceholder(project.title)}
          </div>
        )}
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
        <div className="project-links">
          <a href={project.link} className="project-link">
            <span>View Mission</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
