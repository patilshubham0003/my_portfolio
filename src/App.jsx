import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Media from "./components/Media";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About/>
        <Skills/>
        <Media/>
      </div>
    </>
  );
}

export default App;
