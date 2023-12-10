import { useState, useContext, createContext, useEffect } from "react";

const ModeContext = createContext();

const ModeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(
    localStorage.getItem("mode") === "dark" ? true : false
  );
  const toggleTheme = (isDarkMode) => {
    setIsDarkTheme(isDarkMode);
  };

  useEffect(() => {
    localStorage.setItem("mode", `${isDarkTheme ? "dark" : "light"}`);

    const activeMode = localStorage.getItem("mode");
    if (activeMode === "light") {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }
  }, [isDarkTheme]);

  return (
    <ModeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ModeContext.Provider>
  );
};

const useMode = () => {
  return useContext(ModeContext);
};

export { useMode, ModeProvider };
