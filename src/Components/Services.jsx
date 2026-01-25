import React from "react";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "Building responsive and modern web applications using latest technologies",
      icon: "💻",
    },
    {
      title: "UI/UX Design",
      description:
        "Creating beautiful and intuitive user interfaces with great user experience",
      icon: "🎨",
    },
    {
      title: "Frontend Development",
      description:
        "Developing interactive frontends with React, JavaScript, and modern frameworks",
      icon: "⚛️",
    },
    {
      title: "Performance Optimization",
      description:
        "Optimizing web applications for speed, SEO, and better user engagement",
      icon: "⚡",
    },
  ];

  return (
    <section className="skills-preview" id="services">
      <div className="section-header">
        <h2 className="section-title">Services</h2>
        <p className="section-subtitle">What I can do for you</p>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="skill-item">
            <div
              className="skill-icon"
              style={{ fontSize: "3rem", marginBottom: "1rem" }}
            >
              {service.icon}
            </div>
            <p
              className="skill-name"
              style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}
            >
              {service.title}
            </p>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
