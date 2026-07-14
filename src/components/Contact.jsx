import { useEffect, useState } from "react";
import { getContact } from "../api/portfolioApi";

export default function Contact() {

    const [contact, setContact] = useState(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const [sending, setSending] = useState(false);

    const [success, setSuccess] = useState(false);

    const [formData, setFormData] = useState({

        name: "",

        email: "",

        subject: "",

        message: ""

    });

    const [errors, setErrors] = useState({});

    useEffect(() => {

        async function loadContact() {

            try {

                const data = await getContact();

                setContact(data);

            }

            catch (err) {

                setError(err.message);

            }

            finally {

                setLoading(false);

            }

        }

        loadContact();

    }, []);

    function handleChange(e) {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });

    }

    function validate() {

        const newErrors = {};

        if (!formData.name.trim()) {

            newErrors.name = "Name is required";

        }

        if (!formData.email.trim()) {

            newErrors.email = "Email is required";

        }

        else if (!/\S+@\S+\.\S+/.test(formData.email)) {

            newErrors.email = "Enter a valid email";

        }

        if (!formData.subject.trim()) {

            newErrors.subject = "Subject is required";

        }

        if (!formData.message.trim()) {

            newErrors.message = "Message is required";

        }

        return newErrors;

    }

    async function handleSubmit(e) {

        e.preventDefault();

        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {

            setErrors(validationErrors);

            return;

        }

        setErrors({});
        setSending(true);

        try {

            const response = await fetch(


                "/api/contact",

                {

                    method: "POST",

                    headers: {

                        "Content-Type": "application/json"

                    },

                    body: JSON.stringify(formData)

                }

            );

            const data = await response.json();

            if (data.success) {

                setSuccess(true);

                setFormData({

                    name: "",

                    email: "",

                    subject: "",

                    message: ""

                });

            }

            else {

                alert(data.message);

            }

        }

        catch (error) {

            alert("Server Error");

            console.error(error);

        }

        finally {

            setSending(false);

        }

    }

    if (loading) {

        return (

            <section className="section contact-section">

                <div className="container">

                    <h2 className="section-title">

                        Loading Contact...

                    </h2>

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

        <section
            id="contact"
            className="section contact-section"
            data-aos="fade-up"
        >

            <div className="container">

                <h2 className="section-title">

                    {contact.heading}

                </h2>

                <div className="contact-grid">

                    <div className="contact-info"
                        data-aos="fade-right">

                        <h3>

                            {contact.title}

                        </h3>

                        <p>

                            {contact.description}

                        </p>

                        <div className="contact-item">

                            <i className="fa-solid fa-envelope"></i>

                            <span>

                                {contact.email}

                            </span>

                        </div>

                        <div className="contact-item">

                            <i className="fa-solid fa-phone"></i>

                            <span>

                                {contact.phone}

                            </span>

                        </div>

                        <div className="contact-item">

                            <i className="fa-solid fa-location-dot"></i>

                            <span>

                                {contact.location}

                            </span>

                        </div>

                        <div className="social-links">

                            <a
                                href={contact.social.github}
                                target="_blank"
                                rel="noreferrer"
                            >

                                <i className="fa-brands fa-github"></i>

                            </a>

                            <a
                                href={contact.social.linkedin}
                                target="_blank"
                                rel="noreferrer"
                            >

                                <i className="fa-brands fa-linkedin"></i>

                            </a>

                            <a
                                href={contact.social.fiverr}
                                target="_blank"
                                rel="noreferrer"
                                className="social-circle fiverr"
                            >

                                FI

                            </a>

                        </div>

                    </div>

                    <form
                        className="contact-form"
                        onSubmit={handleSubmit}
                        data-aos="fade-left"
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                        />

                        {

                            errors.name &&

                            <small className="error">

                                {errors.name}

                            </small>

                        }

                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                        />

                        {

                            errors.email &&

                            <small className="error">

                                {errors.email}

                            </small>

                        }

                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                        />

                        {

                            errors.subject &&

                            <small className="error">

                                {errors.subject}

                            </small>

                        }

                        <textarea
                            rows="6"
                            name="message"
                            placeholder="Write Message"
                            value={formData.message}
                            onChange={handleChange}
                        />

                        {

                            errors.message &&

                            <small className="error">

                                {errors.message}

                            </small>

                        }

                        <button
                            className="btn primary-btn"
                            type="submit"
                            disabled={sending}
                        >

                            {

                                sending

                                    ? "Sending..."

                                    : "Send Message"

                            }

                        </button>

                    </form>

                </div>

            </div>

            <div

                className={

                    success

                        ? "success-modal show"

                        : "success-modal"

                }

            >

                <div className="success-box">

                    <div className="success-icon">

                        <i className="fa-solid fa-circle-check"></i>

                    </div>

                    <h2>

                        Thank You!

                    </h2>

                    <p>

                        Your message has been sent successfully.

                    </p>

                    <button

                        onClick={() => setSuccess(false)}

                    >

                        Close

                    </button>

                </div>

            </div>

        </section>

    );

}