export default function BlogModal({

    blog,
    onClose

}) {

    if (!blog) return null;

    return (

        <div
            className="modal"
            onClick={onClose}
        >

            <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
            >

                <span
                    className="close-blog"
                    onClick={onClose}
                >
                    &times;
                </span>

                <img
                    src={blog.modalImage}
                    alt={blog.title}
                    className="blog-modal-image"
                    width="500"

                    height="350"
                    loading="lazy"
                />

                <span className="blog-category">

                    {blog.category}

                </span>

                <h2>

                    {blog.title}

                </h2>

                <small>

                    {blog.date}

                </small>

                <p
                    style={{
                        marginTop: "20px",
                        lineHeight: "1.8"
                    }}
                >

                    {blog.details}

                </p>

            </div>

        </div>

    );

}