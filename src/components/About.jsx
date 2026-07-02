function About() {
    return (
        <section id="about" className="section">

            <div className="container">

                <h2 className="section-title">About Me</h2>

                <div className="about-grid">

                    <div className="about-left">

                        <h3>Passionate Developer with Creative Vision</h3>

                        <p>
                            I am a BS Computer Science student from Pakistan,
                            passionate about frontend development and digital design.
                        </p>

                        <p>
                            My goal is to transform ideas into scalable,
                            elegant and user-centered digital products.
                        </p>

                        <div className="about-tags">

                            <span>Problem Solving</span>
                            <span>Responsive Design</span>
                            <span>UI/UX Focus</span>
                            <span>Clean Code</span>

                        </div>

                    </div>

                    <div className="about-card">

                        <div className="info-row">
                            <span>Name</span>
                            <strong>Sana Javed</strong>
                        </div>

                        <div className="info-row">
                            <span>Location</span>
                            <strong>Punjab, Pakistan</strong>
                        </div>

                        <div className="info-row">
                            <span>Languages</span>
                            <strong>Urdu / English</strong>
                        </div>

                        <div className="info-row">
                            <span>Degree</span>
                            <strong>BS Computer Science</strong>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default About;