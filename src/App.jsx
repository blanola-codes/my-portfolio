import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Stats from "./components/Stats";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Journey from "./components/Journey";
import Certificates from "./components/Certificates";
import TechStack from "./components/TechStack";
import BackToTop from "./components/BackToTop";
import "./App.css";

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Stats/>
            <Journey />
            <Skills />
            <TechStack/>
            <Certificates />
            <Projects />
            <Contact />
            <Footer />
            <BackToTop/>
        </>
    );
}

export default App;

