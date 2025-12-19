import { Button } from "@mui/material";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./assets/Contact";
import FloatingActionButtons from "./assets/FloatingActionButtons";

function App() {

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Navbar */}
      <nav style={{ display: "flex", gap: "10px", padding: "10px", position: "fixed", top: 0, width: "100%", zIndex: 1000 }}>
        <Button onClick={() => scrollTo("home")}>HOME</Button>
        <Button onClick={() => scrollTo("projects")}>PROJECTS</Button>
        <Button onClick={() => scrollTo("skills")}>SKILLS</Button>
        <Button onClick={() => scrollTo("contact")}>CONTACT</Button>
      </nav>

      {/* Sections */}
      <div id="home">
        <Home />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="contact">
        <Contact />
      </div>

      <FloatingActionButtons />
    </>
  );
}

export default App;
