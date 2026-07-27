import { useEffect, useState } from "react";
import { getProjects } from "../api/portfolioApi";

import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import SkeletonCard from "./SkeletonCard";
import CustomDropdown from "./CustomDropdown";

export default function Projects() {

    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [technology, setTechnology] = useState("All");
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {

        async function loadProjects() {

            try {

                await new Promise(resolve => setTimeout(resolve, 2000));

                const data = await getProjects();

                setProjects(data);

            }

            catch (err) {

                setError(err.message);

            }

            finally {

                setLoading(false);

            }

        }

        loadProjects();

    }, []);

    const categories = [

        "All",

        ...new Set(

            projects.map(project => project.category)

        )

    ];
    const technologies = [

        "All",

        ...new Set(

            projects.map(project => project.technology)

        )

    ];
    const filteredProjects = projects.filter(project => {

        const matchesSearch =

            project.title
                .toLowerCase()
                .includes(search.toLowerCase())

            ||

            project.description
                .toLowerCase()
                .includes(search.toLowerCase());

        const matchesCategory =

            category === "All"

            ||

            project.category === category;

        const matchesTechnology =

            technology === "All"

            ||

            project.technology === technology;
        return (

            matchesSearch &&

            matchesCategory &&

            matchesTechnology

        );

    });

    if (loading) {

        return (

            <section
                id="projects"
                className="section"
            >

                <div className="container">

                    <h2 className="section-title">

                        Featured Projects

                    </h2>

                    <div className="projects-grid">

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

        <section
            id="projects"
            className="section"
        >

            <div className="container">

                <h2 className="section-title">

                    Featured Projects

                </h2>

                <div className="project-filters">
                    <div className="serdiv">
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Search Project..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                    <div className="catdiv">
                        <CustomDropdown

                            label="Category"

                            options={categories}

                            value={category}

                            onChange={setCategory}

                        />

                        <CustomDropdown

                            label="Technology"

                            options={technologies}

                            value={technology}

                            onChange={setTechnology}

                        />

                    </div>
                </div>

                {

                    filteredProjects.length === 0

                        ?

                        (

                            <div className="empty-state">

                                <h2>

                                    No Project Found

                                </h2>

                            </div>

                        )

                        :

                        (

                            <div className="projects-grid">

                                {

                                    filteredProjects.map(project => (

                                        <ProjectCard

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



            {

                selectedProject && (

                    <ProjectModal

                        project={selectedProject}

                        onClose={() =>

                            setSelectedProject(null)

                        }

                    />

                )

            }

        </section>

    );

}