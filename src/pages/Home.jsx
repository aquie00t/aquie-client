import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import WorkExperience from "../components/WorkExperience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <WorkExperience />
      <Contact />
      <Footer />
    </div>
  );
}
