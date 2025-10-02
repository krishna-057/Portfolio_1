import React from "react";
// import "../css/hero.css";
import "../css/Hero.css";
function Hero() {
  return (
    <section className="hero" id="home">
      {/* <div className="hero"> */}
        <div className="hero-bg"></div>
        <div className="hero-content container">
          <h1 className="hero-title">Krishna Sharma</h1>
          <h2 className="hero-subtitle">Full Stack Developer</h2>
          <p className="hero-description">
            I’m a full stack developer who loves turning ideas into real,
            working web apps. From front-end design to back-end logic, I enjoy
            building things that people actually use.
          </p>
          <div className="cta-buttons">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href="https://drive.google.com/uc?export=download&id=10U73wDPw3OmC0rGahWnWibABXVSnJeti" className="btn btn-secondary">
              Download Resume
            </a>
          </div>
        </div>
      {/* </div> */}
    </section>
  );
}

export default Hero;
