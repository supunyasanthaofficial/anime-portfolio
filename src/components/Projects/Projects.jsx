import React, { useState, useEffect, useRef } from "react";
import "./Projects.css";

const ProjectCard = ({ project, index, isVisible }) => {
  return (
    <div
      className={`project-card ${isVisible ? "animate-in" : ""}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="card-inner">
        <div className="card-front">
          <div className="project-image">
            <div className="image-placeholder">
              <span className="project-icon">📱</span>
            </div>
            <div className="project-rank">{project.rank}</div>
          </div>
          <div className="project-content">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-technologies">
              {project.technologies.map((tech, i) => (
                <span key={i} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="card-back">
          <div className="project-details">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.link} className="project-link demo">
                <span>View Demo</span>
                <div className="link-sparkle"></div>
              </a>
              <a href={project.github} className="project-link code">
                <span>View Code</span>
                <div className="link-sparkle"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: "Delivery App",
      category: "mobile",
      image: "delivery.jpg",
      description:
        "A food delivery app with real-time tracking and seamless ordering experience.",
      technologies: ["React-Native", "JavaScript", "Firebase"],
      link: "#",
      github: "#",
      rank: "Water Breathing",
    },
    {
      id: 2,
      title: "Electra-Music Player",
      category: "mobile",
      image: "electra.jpg",
      description:
        "A sleek music player app with playlist management and audio visualization.",
      technologies: ["React-Native", "Supabase", "JavaScript"],
      link: "#",
      github: "#",
      rank: "Sound Breathing",
    },
    {
      id: 3,
      title: "Auroo-Womens clothing app",
      category: "mobile",
      image: "auroo.jpg",
      description:
        "E-commerce app for women's fashion with size recommendations and virtual try-on.",
      technologies: ["React Native", "JavaScript", "Node.js"],
      link: "#",
      github: "#",
      rank: "Love Breathing",
    },
    {
      id: 4,
      title: "Flash-Sales app",
      category: "mobile",
      image: "tanjiro-kamado-6082x5416-23027.jpg",
      description:
        "Limited-time flash sales app with countdown timers and push notifications.",
      technologies: ["React-Native", "JavaScript", "Firebase"],
      link: "#",
      github: "#",
      rank: "Flame Breathing",
    },
    {
      id: 5,
      title: "Hotel Management App",
      category: "mobile",
      image: "DS1.jpg",
      description:
        "Complete hotel booking and management system with admin panel.",
      technologies: ["React-Native", "JavaScript", "MongoDB"],
      link: "#",
      github: "#",
      rank: "Stone Breathing",
    },
    {
      id: 6,
      title: "Auroo-Fashion (Flutter)",
      category: "mobile",
      image: "auroo.jpg",
      description:
        "Fashion app built with Flutter for cross-platform compatibility.",
      technologies: ["Flutter", "Dart", "Firebase"],
      link: "#",
      github: "#",
      rank: "Wind Breathing",
    },
  ];

  const filters = [
    { key: "all", label: "All Missions", icon: "🗡️" },
    { key: "mobile", label: "Mobile Apps", icon: "📱" },
    { key: "web", label: "Web Development", icon: "🌐" },
    { key: "design", label: "UI/UX Design", icon: "🎨" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section
      id="projects"
      className="projects section demon-slayer-projects"
      ref={sectionRef}
    >
      {/* Animated Background Elements */}
      <div className="demon-bg-elements">
        <div className="bg-element bg-slayer-1"></div>
        <div className="bg-element bg-slayer-2"></div>
        <div className="bg-element bg-slayer-3"></div>
        <div className="floating-nichirin"></div>
        <div className="floating-crow"></div>
        <div className="particles-container">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="particle"></div>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="section-header">
          <h2 className={`section-title ${isVisible ? "animate-in" : ""}`}>
            <span className="title-underline">My Demon Slaying Missions</span>
          </h2>
          <div
            className={`breathing-demon ${isVisible ? "animate-in" : ""}`}
          ></div>
        </div>

        <div className={`projects-filters ${isVisible ? "animate-in" : ""}`}>
          {filters.map((filter) => (
            <button
              key={filter.key}
              className={`filter-btn ${
                activeFilter === filter.key ? "active" : ""
              }`}
              onClick={() => setActiveFilter(filter.key)}
            >
              <span className="filter-icon">{filter.icon}</span>
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        <div className={`missions-completed ${isVisible ? "animate-in" : ""}`}>
          <div className="mission-stats">
            <div className="mission-stat">
              <span className="stat-number">{projects.length}+</span>
              <span className="stat-label">Missions Completed</span>
            </div>
            <div className="mission-stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Success Rate</span>
            </div>
            <div className="mission-stat">
              <span className="stat-number">12</span>
              <span className="stat-label">Demons Slain</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
