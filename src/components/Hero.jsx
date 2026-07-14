import { FiDownload } from "react-icons/fi";

function Hero() {

    const [stats, setStats] = useState({

        repos: 0,

        ui: 0

    });

    useEffect(() => {

        async function loadGithub() {

            try {

                const res = await fetch(

                    "https://api.github.com/users/sana-javed-04/repos"

                );

                const data = await res.json();

                setStats({

                    repos: data.length,

                    ui: data.filter(repo =>

                        repo.name.toLowerCase().includes("ui")

                    ).length

                });

            }

            catch (err) {

                console.log(err);

            }

        }

        loadGithub();

    }, []);
    return (
        <section id="home" className="hero">

            <div className="container hero-grid">

                <div className="hero-left" data-aos="fade-right">

                    <p className="hero-badge">
                        Frontend Developer • WordPress Expert
                    </p>

                    <h1>
                        Building Modern <span>Web Experiences</span>
                    </h1>

                    <p className="hero-text">
                        I'm Sana Javed, a frontend developer focused on building
                        responsive, high-performance websites with clean code,
                        beautiful UI and smooth user experiences.
                    </p>

                    <div className="hero-buttons" data-aos="fade-up"
                        data-aos-delay="350">

                        <a href="#projects" className="btn primary-btn" >
                            View Projects
                        </a>

                        <a
                            href="/images/Sana-Javed-CV.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="btn secondary-btn"
                        >
                            <FiDownload />
                            Download CV
                        </a>

                        <a href="#contact" className="btn secondary-btn">
                            Hire Me
                        </a>

                    </div>

                    <div className="hero-stats" data-aos="fade-up"
                        data-aos-delay="500">

                        <div className="stat-box">
                            <h3>{stats.repos}+</h3>
                            <p>Projects</p>
                        </div>

                        <div className="stat-box">
                            <h3>10+</h3>
                            <p>UI Builds</p>
                        </div>

                        <div className="stat-box">
                            <h3>100%</h3>
                            <p>Passion</p>
                        </div>

                    </div>

                </div>

                <div className="hero-right" data-aos="fade-left"
                    data-aos-delay="200">

                    <div className="profile-card">

                        <img
                            src="/images/hero.jpeg"
                            alt="Sana Javed"
                            className="profile-image"
                        />

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Hero;