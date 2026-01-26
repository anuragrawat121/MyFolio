import { Moon, Sun, Menu, X } from "lucide-react";
import { useState, useContext, useEffect } from "react";
import { ThemeContext } from "./Context/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { mode, toggleMode } = useContext(ThemeContext);
  const [logoText, setLogoText] = useState("");
  const fullLogoText = "Hello, I'm Anurag !";

  useEffect(() => {
    let index = 0;
    setLogoText(""); // Reset text on mount

    // Wait for loader to finish (2 seconds) before starting
    const loaderDelay = setTimeout(() => {
      const typingInterval = setInterval(() => {
        if (index < fullLogoText.length) {
          setLogoText(fullLogoText.slice(0, index + 1));
          index++;
        } else {
          clearInterval(typingInterval);
        }
      }, 100);

      return () => clearInterval(typingInterval);
    }, 2000); // Wait 2 seconds for loader

    return () => clearTimeout(loaderDelay);
  }, []); // Empty dependency array - runs once on mount

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#home" className="logo">
          {logoText}
          {logoText.length < fullLogoText.length && (
            <span className="cursor">|</span>
          )}
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
