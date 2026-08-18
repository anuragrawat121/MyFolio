import React from "react";
import { Github, Linkedin, Instagram, Mail, FileText } from "lucide-react";
import { useTypewriter } from "../hooks/useTypewriter";

const LeftContent = () => {
  const fullText = "Software Developer";
  const text = useTypewriter(fullText, { delay: 2100, speed: 90 });

  return (
    <div className="hero-content">
      <p className="hero-kicker">Available for freelance work</p>
      <h1 className="hero-name">
        Anurag
        <em>Rawat</em>
      </h1>
      <p className="hero-role">
        {text}
        <span className="typed-cursor" aria-hidden="true">
          |
        </span>
      </p>
      <p className="hero-lede">
        I build digital products that feel considered — from crop-route engines
        to art-house portfolios. <em>Clear systems. Quiet interfaces.</em>
      </p>
      <div className="cta-buttons">
        <a href="#projects" className="btn btn-primary">
          View work
        </a>
        <a
          href="https://drive.google.com/uc?export=download&id=1VafCk3WhuVaIC0FEjFGvBOjzPqeif7qZ"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary"
        >
          <FileText className="w-4 h-4" /> Resume
        </a>
        <a href="#contact" className="btn btn-secondary">
          Let&apos;s talk
        </a>
      </div>
      <div className="social-links">
        <a
          href="https://github.com/anuragrawat121"
          target="_blank"
          className="social-link"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <Github className="w-4 h-4" />
        </a>
        <a
          href="https://www.linkedin.com/in/anurag-rawat-03884b296"
          target="_blank"
          className="social-link"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-4 h-4" />
        </a>
        <a
          href="https://www.instagram.com/rwt._.anurag"
          target="_blank"
          className="social-link"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <Instagram className="w-4 h-4" />
        </a>
        <a
          href="mailto:arwt8947@gmail.com"
          className="social-link"
          aria-label="Email"
        >
          <Mail className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default LeftContent;
