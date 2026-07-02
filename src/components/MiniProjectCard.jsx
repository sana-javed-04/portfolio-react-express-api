export default function MiniProjectCard({

    project,
    onOpen

}) {

    return (

        <div
            className="mini-card"
            onClick={() => onOpen(project)}
        >

            <h3>

                {project.icon} {project.title}

            </h3>

            <p>

                {project.shortDescription}

            </p>

        </div>

    );

}