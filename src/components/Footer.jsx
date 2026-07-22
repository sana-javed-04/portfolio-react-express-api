import {
    FaGithub,
    FaLinkedin
} from "react-icons/fa";

import { useEffect, useState } from "react";

import { getFooter } from "../api/portfolioApi";

export default function Footer() {

    const [footer, setFooter] = useState(null);

    useEffect(() => {

        async function loadFooter() {

            const data = await getFooter();

            setFooter(data);

        }

        loadFooter();

    }, []);

    if (!footer) return null;

    return (

        <footer className="footer">

            <div className="container">

                <h3>

                    Sana Javed

                </h3>

                <p>

                    {footer.tagline}

                </p>

                <div className="footer-socials">

                    <a
                        href={footer.github}
                        target="_blank"
                        rel="noreferrer"
                    >

                        <FaGithub />
                    </a>

                    <a
                        href={footer.linkedin}
                        target="_blank"
                        rel="noreferrer"
                    >

                        <FaLinkedin />
                    </a>

                    <a
                        href={footer.fiverr}
                        target="_blank"
                        rel="noreferrer"
                        className="social-circle fiverr"
                    >

                        FI

                    </a>

                </div>

                <p className="copyright">

                    {footer.copyright}

                </p>

            </div>

        </footer>

    );

}