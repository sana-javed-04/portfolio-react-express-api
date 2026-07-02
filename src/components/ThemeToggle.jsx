import { useEffect, useState } from "react";

export default function ThemeToggle() {

    const [darkMode, setDarkMode] = useState(() => {

        return localStorage.getItem("theme") !== "light";

    });

    useEffect(() => {

        if (darkMode) {

            document.body.classList.remove("light-mode");

            localStorage.setItem("theme", "dark");

        }

        else {

            document.body.classList.add("light-mode");

            localStorage.setItem("theme", "light");

        }

    }, [darkMode]);

    return (

        <button

            className="theme-btn"

            aria-label="Toggle Theme"

            onClick={() => setDarkMode(!darkMode)}

        >

            {darkMode ? "🌙" : "☀️"}

        </button>

    );

}