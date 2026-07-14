import { useEffect, useState } from "react";
import { getMiniProjects } from "../api/portfolioApi";

import MiniProjectCard from "./MiniProjectCard";
import MiniProjectModal from "./MiniProjectModal";
import SkeletonCard from "./SkeletonCard";

export default function MiniProjects() {

    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const [search, setSearch] = useState("");

    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {

        async function loadMiniProjects() {

            try {

                await new Promise(resolve => setTimeout(resolve, 2000));

                const data = await getMiniProjects();

                setProjects(data);

            }

            catch (err) {

                setError(err.message);

            }

            finally {

                setLoading(false);

            }

        }

        loadMiniProjects();

    }, []);

    const filteredProjects = projects.filter(project =>

        project.title?.toLowerCase().includes(search.toLowerCase()) ||

        project.shortDescription?.toLowerCase().includes(search.toLowerCase())

    );

    if (loading) {

        return (

            <section className="mini-projects section">

                <div className="container">

                    <h2 className="section-title">

                        Mini Projects

                    </h2>

                    <div className="mini-grid">

                        <SkeletonCard />
                        <SkeletonCard />
                        <SkeletonCard />
                        <SkeletonCard />
                        <SkeletonCard />
                        <SkeletonCard />

                    </div>

                </div>

            </section>

        );

    }

    if (error) {

        return (

            <section className="section">

                <div className="container">

                    <h2>

                        {error}

                    </h2>

                </div>

            </section>

        );

    }

    return (

        <>

            <section className="mini-projects section" data-aos="fade-up">

                <div className="container">

                    <h2 className="section-title">

                        Mini Projects

                    </h2>

                    <input

                        type="text"

                        className="search-input"

                        placeholder="Search Mini Project..."

                        value={search}

                        onChange={(e) =>

                            setSearch(e.target.value)

                        }

                    />

                    {

                        filteredProjects.length === 0

                            ?

                            (

                                <div className="empty-state">

                                    <h2>

                                        No Mini Project Found

                                    </h2>

                                </div>

                            )

                            :

                            (

                                <div className="mini-grid">

                                    {

                                        filteredProjects.map(project => (

                                            <MiniProjectCard

                                                key={project.id}

                                                project={project}

                                                onOpen={setSelectedProject}


                                            />

                                        ))

                                    }

                                </div>

                            )

                    }

                </div>

            </section>

            <MiniProjectModal

                project={selectedProject}

                onClose={() =>

                    setSelectedProject(null)

                }

            />

        </>

    );

}