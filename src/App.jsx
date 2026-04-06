import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Media from "./components/Media";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Project from "./components/Project"

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About/>
        <Skills/>
        <Project/>
        <Media/>
      </div>
    </>
  );
}

export default App;
