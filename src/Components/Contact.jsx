import React from "react";
import { Mail, Linkedin, Github, Instagram } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const Contact = () => {
  return (
    <section className="site-section" id="contact">
      <Reveal>
        <SectionHeader index="06" kicker="Contact" title="Let’s make" italic="something." />
      </Reveal>
      <Reveal delay={100} className="contact-panel">
        <p className="contact-headline">
          Have a project
          <br />
          <em>in mind?</em>
        </p>
        <a className="contact-mail" href="mailto:arwt8947@gmail.com">
          arwt8947@gmail.com
        </a>
        <p className="contact-note">
          Open to freelance, collaborations, and full-time product work. A short
          note about the problem is enough to start.
        </p>
        <div className="social-links" style={{ marginBottom: "1.75rem" }}>
          <a
            href="mailto:arwt8947@gmail.com"
            className="social-link"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/anuragrawat121"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/anurag-rawat-03884b296"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="https://www.instagram.com/rwt._.anurag"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Instagram"
          >
            <Instagram className="w-4 h-4" />
          </a>
        </div>
        <a
          href="https://wa.me/7017349285?text=Hi%20Anurag%2C%20I%20would%20like%20to%20discuss%20a%20project%20with%20you."
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Send a message
        </a>
      </Reveal>
    </section>
  );
};

export default Contact;
