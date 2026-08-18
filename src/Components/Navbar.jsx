import { Moon, Sun, Menu, X } from "lucide-react";
import { useState, useContext, useEffect } from "react";
import { ThemeContext } from "./Context/ThemeContext";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#career", label: "Career" },
  { href: "#skills", label: "Skills" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
  {
    href: "https://drive.google.com/uc?export=download&id=1VafCk3WhuVaIC0FEjFGvBOjzPqeif7qZ",
    label: "Resume",
    isExternal: true,
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { mode, toggleMode } = useContext(ThemeContext);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "is-scrolled" : ""}`}>
      <div className="nav-container">
        <a href="#home" className="logo">
          <span className="logo-mark">AR</span>
          <span className="logo-word">
            anurag<span>.</span>
          </span>
        </a>

        <div className="nav-links">
          {links.map((link) => (
            <a
              key={link.label}
              className="nav-link"
              href={link.href}
              {...(link.isExternal
                ? {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  }
                : {})}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleMode}
            className="theme-toggle-btn"
            aria-label="Toggle theme"
          >
            {mode === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <div className="mobile-menu-btn">
          <button
            onClick={toggleMode}
            className="theme-toggle-btn"
            aria-label="Toggle theme"
          >
            {mode === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mobile-toggle"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-links">
            {links.map((link) => (
              <a
                key={link.label}
                className="nav-link"
                href={link.href}
                onClick={() => setIsOpen(false)}
                {...(link.isExternal
                  ? {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }
                  : {})}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
