export default function BlogCard({

    blog,
    onOpen

}) {

    return (

        <div className="blog-card">

            <img
                src={blog.cardImage}
                alt={blog.title}
                loading="lazy"
            />

            <h3>

                {blog.title}

            </h3>

            <p>

                {blog.shortDescription}

            </p>

            <button
                className="read-more"
                onClick={() => onOpen(blog)}
            >

                Read More

            </button>

        </div>

    );

}