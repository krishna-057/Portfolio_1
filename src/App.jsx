import "./App.css";
import Nav from "./component/naviGation.jsx";
import Hero from "./component/Hero.jsx";
import About from "./component/About.jsx";
import Skills from "./component/Skills.jsx";
import Prjects from './component/Projects.jsx'
function App() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Prjects/>
      {/* <Contact/> */}
      {/* <Footer/> */}
    </>
  );
}
export default App;
