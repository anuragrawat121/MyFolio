import { useState, useEffect } from "react";
import LeftContent from "./Components/LeftContent";
import Navbar from "./Components/Navbar";
import RightContent from "./Components/RightContent";
import Cursor from "./Components/Cursor";
import Loader from "./Components/Loader";
import ThemeContextProvider from "./Components/Context/ThemeContext";
import SkillsPreview from "./Components/SkillsPreview";
import About from "./Components/About";
import Career from "./Components/Career";
import Services from "./Components/Services";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import ScrollProgress from "./Components/ScrollProgress";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeContextProvider>
      <Loader isLoading={isLoading} />
      <ScrollProgress />
      <div className="site-shell">
        <Cursor />
        <Navbar />
        <section id="home" className="hero">
          <div className="hero-grid">
            <LeftContent />
            <RightContent />
          </div>
        </section>
        <About />
        <Career />
        <SkillsPreview />
        <Services />
        <Project />
        <Contact />
        <footer className="site-footer">
          <span>Anurag Rawat</span>
          <span>© 2026</span>
        </footer>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
