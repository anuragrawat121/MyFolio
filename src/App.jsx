import { useState, useEffect } from "react";
import LeftContent from "./Components/LeftContent";
import Navbar from "./Components/Navbar";
import RightContent from "./Components/RightContent";
import Cursor from "./Components/Cursor";
import Loader from "./Components/Loader";
import ThemeContextProvider from "./Components/Context/ThemeContext";
import SkillsPreview from "./Components/SkillsPreview";
import About from "./Components/About";
import Services from "./Components/Services";
import Project from "./Components/Project";
import Contact from "./Components/Contact";

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
      <div className="relative">
        <Cursor />
        <Navbar />
        <div
          id="home"
          className="flex flex-col lg:flex-row w-full min-h-screen justify-center lg:justify-between items-center px-4 md:px-8 lg:px-16 pt-20 md:pt-24 pb-0 gap-8 lg:gap-0"
        >
          <LeftContent />
          <RightContent />
        </div>
        <About />
        <SkillsPreview />
        <Services />
        <Project />
        <Contact />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
