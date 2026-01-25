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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a
          href="#home"
          className="logo"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
        >
          {logoText}
          {logoText.length < fullLogoText.length && (
            <span className="cursor">|</span>
          )}
        </a>

        {/* Desktop Menu */}
        <div className="nav-links hidden md:flex items-center gap-8">
          <a
            className="nav-link"
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
          >
            Home
          </a>
          <a
            className="nav-link"
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("about");
            }}
          >
            About
          </a>
          <a
            className="nav-link"
            href="#skills"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("skills");
            }}
          >
            Skills
          </a>
          <a
            className="nav-link"
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("services");
            }}
          >
            Services
          </a>
          <a
            className="nav-link"
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("projects");
            }}
          >
            Projects
          </a>
          <a
            className="nav-link"
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
          >
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
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
                setIsOpen(false);
              }}
            >
              Home
            </a>
            <a
              className="nav-link"
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
                setIsOpen(false);
              }}
            >
              About
            </a>
            <a
              className="nav-link"
              href="#skills"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("skills");
                setIsOpen(false);
              }}
            >
              Skills
            </a>
            <a
              className="nav-link"
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("services");
                setIsOpen(false);
              }}
            >
              Services
            </a>
            <a
              className="nav-link"
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("projects");
                setIsOpen(false);
              }}
            >
              Projects
            </a>
            <a
              className="nav-link"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
                setIsOpen(false);
              }}
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
