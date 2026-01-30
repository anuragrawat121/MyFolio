import React from "react";

const Project = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A modern portfolio website built with React and Tailwind CSS",
      tech: ["React", "Tailwind", "JavaScript"],
      link: "https://anuragrawat121.github.io/React-portFolio/",
    },
    {
      title: "College Event Manager",
      description: "Full-stack college event management solution",
      tech: ["React", "Tailwind", "Node.js", "MongoDB"],
      link: "https://college-event-manager-ko2c.vercel.app/",
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
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="skill-item"
            style={{ display: "flex", flexDirection: "column" }}
          >
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
                marginBottom: "1rem",
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
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{
                  fontSize: "0.85rem",
                  padding: "0.5rem 1rem",
                  display: "inline-block",
                  marginTop: "auto",
                }}
              >
                View Demo
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
