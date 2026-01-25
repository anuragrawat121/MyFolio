import React, { useEffect, useState } from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const LeftContent = () => {
  const [text, setText] = useState("");
  const fullText = "Software Developer";
  const [index, setIndex] = useState(0);
  const [startTyping, setStartTyping] = useState(false);

  // Wait for loader to finish before starting typewriter
  useEffect(() => {
    const timer = setTimeout(() => {
      setStartTyping(true);
    }, 2100); // Start typing 100ms after loader finishes (2000ms)

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (startTyping && index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText.charAt(index));
        setIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText, startTyping]);

  const buttontagLine = "</> Available For Freelance Work";

  return (
    <section className="hero-content w-full lg:w-3/5 flex flex-col items-center lg:items-start text-center lg:text-left mt-2 lg:mt-0">
      <div className="hero-badge mt-0 lg:mt-0">{buttontagLine}</div>
      <h1 id="hero-title" className="hero-title whitespace-nowrap">
        {text}
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
        <a href="/projects" className="btn btn-primary">
          View Projects
        </a>
        <a href="/contact" className="btn btn-secondary">
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
          href="https://twitter.com/"
          target="_blank"
          className="social-link"
          rel="noopener noreferrer"
        >
          <Twitter className="w-5 h-5" />
        </a>
        <a href="mailto:arwt8947@gmail.com" className="social-link">
          <Mail className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default LeftContent;
