import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("mobile");

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
    },
    {
      id: 6,
      title: "Auroo-Womens clothing app",
      category: "mobile",
      image: "auroo.jpg",
      description:
        "Fashion app built with Flutter for cross-platform compatibility.",
      technologies: ["Flutter", "Dart", "Firebase"],
      link: "#",
      github: "#",
    },
  ];

  const filters = [
    { key: "all", label: "All Projects" },
    { key: "web", label: "Web Development" },
    { key: "mobile", label: "Mobile Apps" },
    { key: "design", label: "UI/UX Design" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>

        <div className="projects-filters">
          {filters.map((filter) => (
            <button
              key={filter.key}
              className={`filter-btn ${
                activeFilter === filter.key ? "active" : ""
              }`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
