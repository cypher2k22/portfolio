import { Button, Stack } from "@mui/material";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./assets/Contact";

function App() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="app">
      <header className="navbar">
        <strong className="brand">BK<span>.</span></strong>
        <Stack direction="row" spacing={1}>
          {["home", "projects", "skills", "contact"].map((id) => (
            <Button key={id} onClick={() => scrollTo(id)}>{id}</Button>
          ))}
        </Stack>
      </header>

      <main>
        <section id="home"><Home onProjects={() => scrollTo("projects")} /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section>
        <section id="contact"><Contact /></section>
      </main>
    </div>
  );
}

export default App;
