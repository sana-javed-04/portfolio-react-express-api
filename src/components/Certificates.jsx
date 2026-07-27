import { useEffect, useState } from "react";
import { getCertificates } from "../api/portfolioApi";

export default function Certificates() {

    const [certificates, setCertificates] = useState([]);

    const [loading, setLoading] = useState(true);

    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {

        async function loadCertificates() {

            try {

                const data = await getCertificates();

                setCertificates(data);

            }

            finally {

                setLoading(false);

            }

        }

        loadCertificates();

    }, []);
    useEffect(() => {

        function handleEsc(e) {

            if (e.key === "Escape") {

                setSelectedImage(null);

            }

        }

        window.addEventListener("keydown", handleEsc);

        return () =>

            window.removeEventListener("keydown", handleEsc);

    }, []);
    if (loading) {

        return (

            <section className="section">

                <div className="container">

                    <h2 className="section-title">

                        Professional Certifications

                    </h2>

                </div>

            </section>

        );

    }

    return (

        <section
            id="certificates"
            className="section"
            data-aos="fade-up"
        >

            <div className="container">

                <h2 className="section-title">

                    Professional Certifications

                </h2>

                <div className="certificate-slider" data-aos="zoom-in">

                    {

                        certificates.map((certificate) => (

                            <img

                                key={certificate.id}

                                src={certificate.image}

                                alt="Certificate"
                                width="500"

                                height="350"

                                loading="lazy"

                                onClick={() =>

                                    setSelectedImage(certificate.image)

                                }

                            />

                        ))

                    }

                </div>

            </div>

            {

                selectedImage && (

                    <div
                        className="certificate-modal"
                        onClick={() =>

                            setSelectedImage(null)

                        }
                    >
                        <button

                            className="close-modal"

                            onClick={() => setSelectedImage(null)}

                            aria-label="Close Certificate"

                        >

                            ✕

                        </button>

                        <img

                            src={selectedImage}
                            width="500"

                            height="350"

                            alt="Certificate"

                        />

                    </div>

                )

            }

        </section>

    );

}