import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

function Navbar() {

    const [active, setActive] = useState("home");
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {

        const sections = document.querySelectorAll("section[id]");

        function handleScroll() {

            const scrollY = window.scrollY + 120;

            sections.forEach(section => {

                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute("id");

                if (
                    scrollY >= sectionTop &&
                    scrollY < sectionTop + sectionHeight
                ) {
                    setActive(sectionId);
                }

            });

        }

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => {

            window.removeEventListener("scroll", handleScroll);

        };

    }, []);
    useEffect(() => {

        function handleClick(e) {

            if (

                !e.target.closest(".navbar")

                &&

                !e.target.closest(".menu-btn")

            ) {

                setMenuOpen(false);

            }

        }

        document.addEventListener("click", handleClick);

        return () =>

            document.removeEventListener("click", handleClick);

    }, []);

    useEffect(() => {

        function handleNavbar() {

            setScrolled(window.scrollY > 30);

        }

        window.addEventListener("scroll", handleNavbar);

        return () =>

            window.removeEventListener("scroll", handleNavbar);

    }, []);

    return (

        <header
            className={
                scrolled
                    ?
                    "header scrolled"
                    :
                    "header"
            }
        >

            <div className="container nav-wrapper">

                <a href="#home" className="logo">
                    Sana<span>Javed</span>
                </a>

                <ThemeToggle />

                <button
                    className="menu-btn"
                    aria-label="Open Menu"
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? "✕" : "☰"}
                </button>
                <nav className={menuOpen ? "navbar active" : "navbar"}>
                    <ul className="nav-links">

                        <li>
                            <a
                                onClick={() => setMenuOpen(false)}
                                href="#home"
                                className={active === "home" ? "nav-link active" : "nav-link"}
                            >
                                Home
                            </a>
                        </li>

                        <li>
                            <a
                                onClick={() => setMenuOpen(false)}
                                href="#about"
                                className={active === "about" ? "nav-link active" : "nav-link"}
                            >
                                About
                            </a>
                        </li>

                        <li>
                            <a
                                onClick={() => setMenuOpen(false)}
                                href="#skills"
                                className={active === "skills" ? "nav-link active" : "nav-link"}
                            >
                                Skills
                            </a>
                        </li>

                        <li>
                            <a
                                onClick={() => setMenuOpen(false)}
                                href="#services"
                                className={active === "services" ? "nav-link active" : "nav-link"}
                            >
                                Services
                            </a>
                        </li>

                        <li>
                            <a
                                onClick={() => setMenuOpen(false)}
                                href="#projects"
                                className={active === "projects" ? "nav-link active" : "nav-link"}
                            >
                                Projects
                            </a>
                        </li>

                        <li>
                            <a
                                onClick={() => setMenuOpen(false)}
                                href="#blog"
                                className={active === "blog" ? "nav-link active" : "nav-link"}
                            >
                                Blog
                            </a>
                        </li>

                        <li>
                            <a
                                onClick={() => setMenuOpen(false)}
                                href="#contact"
                                className={active === "contact" ? "nav-link active" : "nav-link"}
                            >
                                Contact
                            </a>
                        </li>

                    </ul>

                </nav>

            </div>

        </header>

    );

}

export default Navbar;
