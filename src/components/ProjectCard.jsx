export default function ProjectCard({

    project,
    onOpen,
    ...props

}) {

    return (

        <div className="project-card">
            {...props}
            <img
                src={project.cardImage}
                alt={project.title}
                loading="lazy"
            />

            <div className="project-content">

                <h3>

                    {project.title}

                </h3>

                <p>

                    {project.description}

                </p>

                <div className="tech-stack">

                    {project.techStack.map((tech) => (

                        <span key={tech}>
                            {tech}
                        </span>

                    ))}

                </div>

                <div className="project-buttons">

                    <button
                        className="btn primary-btn"
                        onClick={() => onOpen(project)}
                    >

                        View Details

                    </button>

                    <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="btn secondary-btn"
                    >

                        GitHub

                    </a>

                </div>

            </div>

        </div>

    );

}