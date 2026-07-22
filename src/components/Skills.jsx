import {
    FaHtml5,
    FaWordpress,
    FaMobileAlt,
    FaCodeBranch,
    FaCloud,
    FaChartLine
} from "react-icons/fa";

import { useEffect, useState } from "react";
import { getSkills } from "../api/portfolioApi";

export default function Skills() {

    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(true);
    const [animatedCards, setAnimatedCards] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {

        async function loadSkills() {

            try {

                // Testing purpose only
                await new Promise(resolve => setTimeout(resolve, 2000));

                const data = await getSkills();

                setSkills(data);

            } catch (err) {

                setError(err.message);

            } finally {

                setLoading(false);

            }

        }

        loadSkills();

    }, []);



    if (loading) {
        return (
            <section className="section skills-section" >
                <div className="loading-container">

                    <div className="spinner"></div>

                    <h3>Loading Skills...</h3>

                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="section skills-section">

                <div className="container">

                    <h2>{error}</h2>

                </div>

            </section>
        );
    }

    const icons = {
        html5: <FaHtml5 />,
        wordpress: <FaWordpress />,
        mobile: <FaMobileAlt />,
        git: <FaCodeBranch />,
        cloud: <FaCloud />,
        seo: <FaChartLine />
    };

    return (

        <section
            id="skills"
            className="section skills-section" data-aos="fade-up"
        >

            <div className="container">

                <h2 className="section-title">

                    Technical Expertise

                </h2>

                <div className="skills-grid">

                    {

                        skills.map(skill => (

                            <div
                                className="skill-card"
                                data-aos="zoom-in"
                                key={skill.id}
                                ref={(el) => {

                                    if (!el) return;

                                    const observer = new IntersectionObserver(

                                        ([entry]) => {

                                            if (entry.isIntersecting) {

                                                setAnimatedCards((prev) =>

                                                    prev.includes(skill.id)

                                                        ? prev

                                                        : [...prev, skill.id]

                                                );

                                                observer.disconnect();

                                            }

                                        },

                                        {

                                            threshold: 0.5

                                        }

                                    );

                                    observer.observe(el);

                                }}
                            >

                                <div className="skill-icon">

                                    {icons[skill.icon]}

                                </div>

                                <h3>{skill.title}</h3>

                                <p>{skill.desc}</p>

                                <div className="skill-progress">

                                    <div className="progress-info">

                                        <span>

                                            Proficiency

                                        </span>

                                        <span>

                                            {skill.percent}%

                                        </span>

                                    </div>

                                    <div className="progress-bar">

                                        <div

                                            className="progress-fill"

                                            style={{

                                                width: animatedCards.includes(skill.id)
                                                    ? `${skill.percent}%`
                                                    : "0%"

                                            }}

                                        ></div>

                                    </div>

                                </div>

                                <span
                                    className={
                                        skill.level === "Advanced"
                                            ? "skill-level advanced"
                                            : "skill-level intermediate"
                                    }
                                >

                                    {skill.level}

                                </span>

                            </div>

                        ))

                    }

                </div>

            </div>

        </section>

    );

}