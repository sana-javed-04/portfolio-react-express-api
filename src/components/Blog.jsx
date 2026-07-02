import { useEffect, useState } from "react";

import { getBlogs } from "../api/portfolioApi";

import BlogCard from "./BlogCard";
import BlogModal from "./BlogModal";
import SkeletonCard from "./SkeletonCard";

export default function Blog() {

    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const [selectedBlog, setSelectedBlog] = useState(null);

    useEffect(() => {

        async function loadBlogs() {

            try {

                await new Promise(resolve => setTimeout(resolve, 2000));

                const data = await getBlogs();

                setBlogs(data);

            }

            catch (err) {

                setError(err.message);

            }

            finally {

                setLoading(false);

            }

        }

        loadBlogs();

    }, []);

    if (loading) {

        return (

            <section
                id="blog"
                className="section blog-section"
            >

                <div className="container">

                    <h2 className="section-title">

                        Latest Articles

                    </h2>

                    <div className="blog-grid">

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

            <section
                className="section"
            >

                <div className="container">

                    <h2>

                        {error}

                    </h2>

                </div>

            </section>

        );

    }

    return (

        <>

            <section
                id="blog"
                className="section blog-section"
            >

                <div className="container">

                    <h2 className="section-title">

                        Latest Articles

                    </h2>

                    <div className="blog-grid">

                        {

                            blogs.map(blog => (

                                <BlogCard

                                    key={blog.id}

                                    blog={blog}

                                    onOpen={setSelectedBlog}

                                />

                            ))

                        }

                    </div>

                </div>

            </section>

            <BlogModal

                blog={selectedBlog}

                onClose={() => setSelectedBlog(null)}

            />

        </>

    );

}