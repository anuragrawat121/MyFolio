import React from "react";
import { Mail, Linkedin, Github, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section className="skills-preview" id="contact">
      <div className="section-header">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Let's work together on your next project
        </p>
      </div>
      <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
        <p
          style={{
            color: "var(--text-secondary)",
            fontSize: "1.1rem",
            marginBottom: "2rem",
          }}
        >
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>

        <div
          className="social-links"
          style={{ justifyContent: "center", marginBottom: "2rem" }}
        >
          <a
            href="mailto:arwt8947@gmail.com"
            className="social-link"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/anuragrawat121"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/anurag-rawat-03884b296"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/rwt._.anurag"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>

        <a
          href="https://wa.me/7017349285?text=Hi%20Anurag%2C%20I%20would%20like%20to%20discuss%20a%20project%20with%20you."
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
          style={{ display: "inline-flex" }}
        >
          Send Message
        </a>
      </div>
    </section>
  );
};

export default Contact;
