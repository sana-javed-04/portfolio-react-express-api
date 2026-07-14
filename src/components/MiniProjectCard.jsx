export default function MiniProjectCard({

    project,
    onOpen,

    ...props

}) {

    return (

        <div
            className="mini-card"
            {...props}
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