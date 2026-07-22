export default function MiniProjectModal({

    project,
    onClose

}) {

    if (!project) return null;
    console.log("Modal Rendered", project);

    return (

        <div className="mini-modal" onClick={onClose}>
            <div
                className="mini-modal-content"
                onClick={(e) => e.stopPropagation()}
            >

                <span
                    className="close-mini"
                    onClick={onClose}
                >
                    &times;
                </span>

                <h2 id="miniTitle">

                    {project.title}

                </h2>

                {/* Images */}

                <div
                    id="miniImages"
                    className="mini-images"
                >

                    {

                        project.images.map((image, index) => (

                            <img
                                key={index}
                                src={image}
                                alt={project.title}
                                width="500"

                                height="350"
                                loading="lazy"
                            />

                        ))

                    }

                </div>

                {/* Video */}

                {

                    project.video && (

                        <video
                            controls
                            style={{
                                width: "100%",
                                marginTop: "20px",
                                borderRadius: "12px"
                            }}
                        >

                            <source
                                src={project.video}
                                type="video/mp4"
                                loading="lazy"
                            />

                            Your browser does not support video.

                        </video>

                    )

                }

                {/* Description */}

                <p
                    id="miniDesc"
                    style={{
                        marginTop: "20px"
                    }}
                >

                    {project.details}

                </p>

                {/* GitHub */}

                <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn primary-btn"
                    style={{
                        marginTop: "20px",
                        display: "inline-block"
                    }}
                >

                    GitHub Code

                </a>

            </div>

        </div>

    );

}