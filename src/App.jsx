import "./App.css";
import Nav from "./component/Navigation/naviGation.jsx";
import Hero from "./component/Hero/Hero.jsx";
import About from "./component/About/About.jsx";
import Skills from "./component/Skills/Skills.jsx";
import Prjects from "./component/Projects/Projects.jsx";
import Contact from "./component/Contact/Contact.jsx";
import Footer from "./component/Footer/Footer.jsx";
import Scroll from "./component/Scroll/scroll.jsx";
import { useState, useEffect } from "react";
function App() {
  // state variables
  const [position, setPosition] = useState(0);
  const [dMode, setDMode] = useState(true);
  // useEffect functions
  // theme for getting the theme from the local storage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDMode(savedTheme === "dark");
    }
  }, []);
  // DOM manipulation according to the dMode variable
  useEffect(() => {
    if (dMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.remove("dark-mode");
      document.body.classList.add("light-mode");
    }
    localStorage.setItem("theme", dMode ? "dark" : "light");
  }, [dMode]);

  // toggling the theme
  const toggleTheme = () => {
    setDMode(!dMode);
  };

  // handling the scroll position
  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setPosition(position);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Scroll position={position} />
      <Nav dMode={dMode} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Skills />
      <Prjects />
      <Contact />
      <Footer />
    </>
  );
}
export default App;
