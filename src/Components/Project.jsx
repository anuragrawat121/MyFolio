import React from "react";

const Project = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A modern portfolio website built with React and Tailwind CSS",
      tech: ["React", "Tailwind", "JavaScript"],
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration",
      tech: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Employee Management System",
      description:
        "Task assignment and employee management system with role-based access",
      tech: ["React", "Tailwind", "JavaScript"],
    },
  ];

  return (
    <section className="skills-preview" id="projects">
      <div className="section-header">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Some of my recent work</p>
      </div>
      <div className="skills-grid">
        {projects.map((project, index) => (
          <div key={index} className="skill-item">
            <p
              className="skill-name"
              style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}
            >
              {project.title}
            </p>
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "0.9rem",
                marginBottom: "1rem",
              }}
            >
              {project.description}
            </p>
            <div
              style={{
                display: "flex",
                gap: "0.5rem",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  style={{
                    background: "var(--bg-card-hover)",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "12px",
                    fontSize: "0.8rem",
                    color: "var(--text-secondary)",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
