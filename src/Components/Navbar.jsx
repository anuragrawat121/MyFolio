import { Moon, Sun, Menu, X } from "lucide-react";
import { useState, useContext } from "react";
import { ThemeContext } from "./Context/ThemeContext";
import { useTypewriter } from "../hooks/useTypewriter";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { mode, toggleMode } = useContext(ThemeContext);
  const fullLogoText = "Hello, I'm Anurag !";
  const logoText = useTypewriter(fullLogoText, { delay: 2000, speed: 100 });

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#home" className="logo">
          {logoText}
          <span className="typed-cursor" aria-hidden="true">
            |
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="nav-links hidden md:flex items-center gap-8">
          <a className="nav-link" href="#home">
            Home
          </a>
          <a className="nav-link" href="#about">
            About
          </a>
          <a className="nav-link" href="#skills">
            Skills
          </a>
          <a className="nav-link" href="#services">
            Services
          </a>
          <a className="nav-link" href="#projects">
            Projects
          </a>
          <a className="nav-link" href="#contact">
            Contact
          </a>
          <button onClick={toggleMode} className="theme-toggle-btn">
            {mode === "dark" ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="mobile-menu-btn">
          <button onClick={toggleMode} className="theme-toggle-btn">
            {mode === "dark" ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="mobile-toggle">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-links">
            <a
              className="nav-link"
              href="#home"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              className="nav-link"
              href="#about"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              className="nav-link"
              href="#skills"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </a>
            <a
              className="nav-link"
              href="#services"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a
              className="nav-link"
              href="#projects"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
            <a
              className="nav-link"
              href="#contact"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
