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

                        <img

                            src={selectedImage}

                            alt="Certificate"

                        />

                    </div>

                )

            }

        </section>

    );

}