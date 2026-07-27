import {

    FaCode,
    FaWordpress,
    FaPalette,
    FaServer,
    FaBolt,
    FaMobileAlt

} from "react-icons/fa";

export default function ServiceCard({ service }) {

    const icons = {

        code: <FaCode />,
        wordpress: <FaWordpress />,
        palette: <FaPalette />,
        server: <FaServer />,
        bolt: <FaBolt />,
        mobile: <FaMobileAlt />

    };

    return (

        <div

            className="service-card"

            data-aos="zoom-in"

        >

            <div className="service-icon">

                {

                    icons[service.icon]

                }

            </div>

            <h3>

                {service.title}

            </h3>

            <p>

                {service.description}

            </p>

        </div>

    );

}