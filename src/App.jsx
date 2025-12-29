import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Stats from "./components/Stats";


export default function App() {
  return (
    <div className="bg-zinc-950 text-zinc-100">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Stats />
      
      <Contact />
      
    </div>
  );
}
