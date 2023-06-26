import "./App.css";
import About from "./Components/Header/About";
import Contact from "./Components/Header/Contact";
import Footer from "./Components/Header/Footer";
import Hero from "./Components/Header/Hero";
import Navbar from "./Components/Header/Navbar";
import Projects from "./Components/Header/Projects";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
