import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("taskflow-dark-mode") === "true";
    });

    useEffect(() => {
        document.documentElement.classList.toggle("dark", darkMode);

        localStorage.setItem(
            "taskflow-dark-mode",
            darkMode
        );
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode((prev) => !prev);
    };

    return (
        <ThemeContext.Provider
            value={{
                darkMode,
                toggleDarkMode,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}