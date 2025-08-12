import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Education from "./Components/Education/Education";
import Contact from "./Components/Contact/Contact";


function App() {
  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
    <Navbar />
    <Home />
    <About />
    <Experience />
    <Skills />
    <Projects />  
    <Education />
    <Contact />

    </div>
  )
}

export default App;
