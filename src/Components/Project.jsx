import React from "react";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const projects = [
  {
    title: "MandiSync",
    description:
      "Crop arbitrage dashboard for Indian farmers using live Agmarknet prices",
    tech: ["Next.js", "FastAPI", "PostGIS", "TypeScript"],
    link: "https://anuragrawat121.github.io/MandiSync/",
    repo: "https://github.com/anuragrawat121/MandiSync",
    featured: true,
  },
    {
      title: "ArtByAnjali",
      description:
        "High-performance MERN art portfolio with scroll-driven animations and a custom admin dashboard",
      tech: ["React", "Node.js", "MongoDB", "GSAP"],
      link: "https://artbyanjali.vercel.app/",
    },
  {
    title: "College Event Manager",
    description: "Full-stack college event management solution",
    tech: ["React", "Tailwind", "Node.js", "MongoDB"],
    link: "https://college-event-manager-ko2c.vercel.app/",
  },
  {
    title: "Portfolio Website",
    description: "A modern portfolio website built with React and Tailwind CSS",
    tech: ["React", "Tailwind", "JavaScript"],
    link: "https://anuragrawat121.github.io/MyFolio/",
  },
];

const Project = () => {
  return (
    <section className="site-section" id="projects">
      <Reveal>
        <SectionHeader
          index="05"
          kicker="Selected work"
          title="Things I’ve"
          italic="shipped."
        />
      </Reveal>
      <div className="projects-stack">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 80}>
            <article
              className={`project-card ${project.featured ? "is-featured" : ""}`}
            >
              <span className="project-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {(project.link || project.repo) && (
                <div className="project-actions">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Live <ArrowUpRight size={14} />
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                    >
                      Repo
                    </a>
                  )}
                </div>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Project;
