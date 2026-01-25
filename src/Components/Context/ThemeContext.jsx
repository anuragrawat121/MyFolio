import React from "react";

export const ThemeContext = React.createContext();

const ThemeContextProvider = ({ children }) => {
  const [mode, setMode] = React.useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  React.useEffect(() => {
    const root = document.documentElement;
    if (mode === "light") {
      root.classList.add("light-theme");
    } else {
      root.classList.remove("light-theme");
    }
    localStorage.setItem("theme", mode);
  }, [mode]);

  const toggleMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
