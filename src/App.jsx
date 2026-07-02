import { Helmet } from "react-helmet-async";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import MiniProjects from "./components/MiniProjects";
import Blog from "./components/Blog";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {

  return (

    <>

      <Helmet>

        <title>

          Sana Javed | Frontend Developer

        </title>

        <meta
          name="description"
          content="Professional Frontend Developer Portfolio built with React.js showcasing projects, skills, blogs, testimonials and contact information."
        />

        <meta
          name="keywords"
          content="Frontend Developer, React Developer, JavaScript, HTML, CSS, Portfolio"
        />

        <meta
          name="author"
          content="Sana Javed"
        />

        <meta
          property="og:title"
          content="Sana Javed | Frontend Developer"
        />

        <meta
          property="og:description"
          content="Professional React Portfolio showcasing projects, skills and experience."
        />

        <meta
          property="og:type"
          content="website"
        />

      </Helmet>

      <Navbar />

      <main>

        <Hero />

        <About />

        <Skills />

        <Projects />

        <MiniProjects />

        <Blog />

        <Testimonials />

        <Contact />

      </main>

      <Footer />

      <ScrollToTop />

    </>

  );

}

export default App;