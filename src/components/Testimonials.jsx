import { useEffect, useState } from "react";
import { getTestimonials } from "../api/portfolioApi";

import TestimonialCard from "./TestimonialCard";
import SkeletonCard from "./SkeletonCard";

export default function Testimonials() {

    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const [index, setIndex] = useState(0);

    const [isMobile, setIsMobile] = useState(
        window.innerWidth <= 768
    );

    useEffect(() => {

        async function loadTestimonials() {

            try {

                await new Promise(resolve => setTimeout(resolve, 2000));

                const data = await getTestimonials();

                setTestimonials(data);

            }

            catch (err) {

                setError(err.message);

            }

            finally {

                setLoading(false);

            }

        }

        loadTestimonials();

    }, []);

    useEffect(() => {

        function handleResize() {

            setIsMobile(window.innerWidth <= 768);

        }

        window.addEventListener("resize", handleResize);

        return () => {

            window.removeEventListener("resize", handleResize);

        };

    }, []);

    useEffect(() => {

        if (testimonials.length === 0) return;

        const interval = setInterval(() => {

            setIndex(prev =>

                prev >= testimonials.length - 1

                    ? 0

                    : prev + 1

            );

        }, 3000);

        return () => clearInterval(interval);

    }, [testimonials]);

    if (loading) {

        return (

            <section className="section testimonials">

                <div className="container">

                    <h2 className="section-title">

                        Testimonials

                    </h2>

                    <div className="testimonial-slider">

                        <SkeletonCard />

                        {

                            !isMobile &&

                            <SkeletonCard />

                        }

                    </div>

                </div>

            </section>

        );

    }

    if (error) {

        return (

            <section className="section">

                <div className="container">

                    <h2>{error}</h2>

                </div>

            </section>

        );

    }

    return (

        <section className="section testimonials" >

            <div className="container">

                <h2 className="section-title">

                    Testimonials

                </h2>

                <div className="testimonial-slider" >

                    {

                        testimonials.map((testimonial, i) => (

                            <TestimonialCard

                                key={testimonial.id}

                                testimonial={testimonial}

                                show={

                                    isMobile

                                        ? i === index

                                        : (

                                            i === index ||

                                            i === (index + 1) % testimonials.length

                                        )

                                }

                            />

                        ))

                    }

                </div>

            </div>

        </section>

    );

}