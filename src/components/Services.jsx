import { useEffect, useState } from "react";
import { getServices } from "../api/portfolioApi";

import ServiceCard from "./ServiceCard";
import SkeletonCard from "./SkeletonCard";

export default function Services() {

    const [services, setServices] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    useEffect(() => {

        async function loadServices() {

            try {

                await new Promise(resolve => setTimeout(resolve, 1500));

                const data = await getServices();

                setServices(data);

            }

            catch (err) {

                setError(err.message);

            }

            finally {

                setLoading(false);

            }

        }

        loadServices();

    }, []);

    if (loading) {

        return (

            <section
                id="services"
                className="section services-section"
            >

                <div className="container">

                    <h2 className="section-title">

                        Services

                    </h2>

                    <div className="services-grid">

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

        <section

            id="services"

            className="section services-section"

        >

            <div className="container">

                <h2 className="section-title">

                    Professional Services

                </h2>

                <p className="section-subtitle">

                    Professional web development services focused on building modern, responsive, and high-performance digital experiences.

                </p>

                <div className="services-grid">

                    {

                        services.map(service => (

                            <ServiceCard

                                key={service.id}

                                service={service}

                            />

                        ))

                    }

                </div>

            </div>

        </section>

    );

}