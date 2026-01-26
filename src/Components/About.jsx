import React from "react";
import Globe from "./Globe";

const About = () => {
  return (
    <section className="skills-preview" id="about">
      <div className="section-header text-center">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Get to know more about my journey and expertise
        </p>
      </div>
      <div
        className="about-content"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Globe />

        <div className="remote-badge">
          <span>🌍</span>
          <span>Remote Ready</span>
        </div>

        <p
          className="section-subtitle"
          style={{
            color: "var(--text-primary)",
            fontWeight: "600",
            marginBottom: "1.5rem",
            textAlign: "center",
          }}
        >
          World-class code, from anywhere on the globe.
        </p>

        <p
          style={{
            color: "var(--text-secondary)",
            fontSize: "1.1rem",
            lineHeight: "1.8",
            maxWidth: "800px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          I'm a passionate web developer with expertise in creating modern,
          responsive, and user-friendly web applications. With a strong
          foundation in front-end technologies and a keen eye for design, I
          transform ideas into stunning digital experiences.
        </p>
      </div>
    </section>
  );
};

export default About;
