export default function TestimonialCard({

    testimonial,
    show

}) {

    return (

        <div
            className={`testimonial-card ${show ? "show" : ""}`}
        >

            <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial-img"
                width="500"

                height="350"
                loading="lazy"
            />

            <p>

                "{testimonial.review}"

            </p>

            <h4>

                {testimonial.name}

            </h4>

        </div>

    );

}