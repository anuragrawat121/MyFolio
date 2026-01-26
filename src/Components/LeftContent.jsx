import React, { useEffect, useState } from "react";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

const LeftContent = () => {
  const fullText = "Software Developer";
  const [text, setText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    // Wait for loader (2 seconds) + small delay
    const startDelay = setTimeout(
      () => {
        // Start typing animation
        if (charIndex < fullText.length) {
          const typingTimeout = setTimeout(() => {
            setText(fullText.substring(0, charIndex + 1));
            setCharIndex(charIndex + 1);
          }, 100);
          return () => clearTimeout(typingTimeout);
        }
      },
      charIndex === 0 ? 2100 : 0,
    );

    return () => clearTimeout(startDelay);
  }, [charIndex, fullText]);

  const buttontagLine = "</> Available For Freelance Work";

  return (
    <section className="hero-content w-full lg:w-3/5 flex flex-col items-center md:items-center lg:items-start text-center md:text-center lg:text-left mt-4 lg:mt-0">
      <div className="hero-badge mt-0 lg:mt-0">{buttontagLine}</div>
      <h1 id="hero-title" className="hero-title whitespace-normal">
        {text}
        <span
          className="cursor"
          style={{ opacity: charIndex < fullText.length ? 1 : 0 }}
        >
          |
        </span>
      </h1>
      <p className="hero-description">
        Creating Digital Experiences That Matter
      </p>
      <p className="hero-subtitle w-full lg:w-3/4 xl:w-1/2">
        Passionate web developer specializing in modern, responsive websites and
        web applications. I transform ideas into stunning digital experiences
        using cutting-edge technologies and best practices.
      </p>
      <div className="cta-buttons justify-center lg:justify-start">
        <a
          href="#projects"
          className="btn btn-primary"
          onClick={(e) => {
            e.preventDefault();
            const element = document.getElementById("projects");
            if (element) {
              const offset = 80;
              const elementPosition = element.getBoundingClientRect().top;
              const offsetPosition =
                elementPosition + window.pageYOffset - offset;
              window.scrollTo({ top: offsetPosition, behavior: "smooth" });
            }
          }}
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="btn btn-secondary"
          onClick={(e) => {
            e.preventDefault();
            const element = document.getElementById("contact");
            if (element) {
              const offset = 80;
              const elementPosition = element.getBoundingClientRect().top;
              const offsetPosition =
                elementPosition + window.pageYOffset - offset;
              window.scrollTo({ top: offsetPosition, behavior: "smooth" });
            }
          }}
        >
          Contact Me
        </a>
      </div>
      <div className="social-links">
        <a
          href="https://github.com/anuragrawat121"
          target="_blank"
          className="social-link"
          rel="noopener noreferrer"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href="www.linkedin.com/in/anurag-rawat-03884b296"
          target="_blank"
          className="social-link"
          rel="noopener noreferrer"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href="https://www.instagram.com/rwt._.anurag"
          target="_blank"
          className="social-link"
          rel="noopener noreferrer"
        >
          <Instagram className="w-5 h-5" />
        </a>
        <a href="mailto:arwt8947@gmail.com" className="social-link">
          <Mail className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default LeftContent;
