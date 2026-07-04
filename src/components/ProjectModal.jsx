import { useEffect } from "react";

export default function ProjectModal({

    project,
    onClose

}) {

    useEffect(() => {

        if (!project) return;

        document.body.style.overflow = "hidden";

        const handleEsc = (e) => {

            if (e.key === "Escape") {

                onClose();

            }

        };

        window.addEventListener("keydown", handleEsc);

        return () => {

            document.body.style.overflow = "auto";

            window.removeEventListener("keydown", handleEsc);

        };

    }, [project, onClose]);



    if (!project) return null;



    return (

        <div className="project-modal" onClick={onClose}>
            <div
                className="project-modal-content"
                onClick={(e) => e.stopPropagation()}
            >

                <span
                    className="close-modal"
                    onClick={onClose}
                >
                    &times;
                </span>

                <h2>

                    {project.title}

                </h2>

                <img
                    src={project.modalImage}
                    alt={project.title}
                    loading="lazy"
                />

                {

                    project.video && (

                        <>

                            <h3
                                style={{
                                    marginTop: "20px",
                                    marginBottom: "15px"
                                }}
                            >
                                Project Preview
                            </h3>

                            <video
                                controls
                                width="100%"
                                style={{
                                    borderRadius: "12px"
                                }}
                            >

                                <source
                                    src={project.video}
                                    type="video/mp4"
                                    loading="lazy"
                                />

                            </video>

                        </>

                    )

                }

                <h3
                    style={{
                        marginTop: "25px",
                        marginBottom: "12px"
                    }}
                >
                    About Project
                </h3>

                <div className="tech-stack">

                    {project.techStack.map((tech) => (

                        <span key={tech}>
                            {tech}
                        </span>

                    ))}

                </div>

                <p>

                    {project.details}

                </p>

                <div
                    className="project-buttons"
                    style={{
                        marginTop: "20px"
                    }}
                >

                    <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="btn secondary-btn"
                    >

                        View Source Code

                    </a>

                </div>

            </div>

        </div>

    );

}