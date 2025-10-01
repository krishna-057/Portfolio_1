import React from "react";
import "../css/Projects.css";

function Projects() {
  const projectsInfo = [
    {
      title: "Pr1",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      tech: ["React", "Node.js", "MongoDB"],
      icon:"🌐"
    },
    {
      title: "Pr1",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      tech: ["React", "Node.js", "MongoDB"],
      icon: "🧮"
    },
    {
      title: "Pr1",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      tech: ["React", "Node.js", "MongoDB"],
       icon: "🎨"
    },
  ];
  return (
    <div>
      <section className="section" id="projects">
        <div className="container">
          <h1 className="section-title">Featured Projects</h1>
          <div className="projects-grid">
              {
                projectsInfo.map((project,index)=>
                (
                  <div key={index} className="project-cd glass-cd"> 
                  
                    <div className="project-head">
                      <div className="project-icon">{project.icon}</div>
                      </div>
                      <div className="project-content">
                        <h3>{project.title}</h3>
                        <br />
                        <p>{project.description}</p>
                        {
                        project.tech.map((tech,tIndex)=>
                        (
                          <span className="tech-name" key={tIndex}>{tech}</span>
                        ))
                        }
                      </div>
                  </div>
                ))
              }
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
