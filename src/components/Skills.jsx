import { useEffect, useState } from "react";
import { getSkills } from "../api/portfolioApi";

export default function Skills() {

    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(true);
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
            <section className="section skills-section">
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

    return (

        <section
            id="skills"
            className="section skills-section"
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
                                key={skill.id}
                            >

                                <i className={skill.icon}></i>

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
                                                width:
                                                    `${skill.percent}%`
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