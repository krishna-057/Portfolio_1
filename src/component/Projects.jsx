import React, { useEffect } from "react";
import "../css/Projects.css";

function Projects() {
  const projectsInfo = [
    {
      title: "Dubbing English to Assamese",
      description:
        "Developed an AI-powered video dubbing system that automatically translates and generates speech in Assamese from English video content",
      tech: [
        "Python",
        "Fastapi",
        "HTML",
        "CSS",
        "JavaScript",
        "Whisper(OpenAI)",
        "NLLB-200(Meta)",
        "Indic-parler-TTS(AI4Bharat)",
      ],
      icon: "🌐",
      link: "https://github.com/krishna-057/dubbing_english_to_assamese",
    },
    {
      title: "Natural Language to SQL",
      description:
        "This project focuses on bridging the gap between human-readable queries and structured database queries by developing a Natural Language to SQL (NL2SQL) system. The system allows users to input questions in plain English, and it automatically generates accurate SQL queries that can be executed on a relational database.",
      tech: ["Python", "Fastapi", "MySQL", "HTML", "CSS", "JavaScript"],
      icon: "🧮",
      link: "https://github.com/krishna-057/Natural_Language_to_SQL",
    },
    {
      title: "Techcracy",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      tech: ["React", "Node.js", "MongoDB"],
      icon: "🎨",
      link: "https://github.com/krishna-057/Techcracy",
    },
  ];

  useEffect(() => {
    const tSC = document.querySelectorAll('.tech-stack-container');
    
    const handleWheel = (e) => {
      e.preventDefault();
      e.currentTarget.scrollLeft += e.deltaY;
    };

    tSC.forEach(container => {
      container.addEventListener("wheel", handleWheel);
    });

    return () => {
      tSC.forEach(container => {
        container.removeEventListener("wheel", handleWheel);
      });
    };
  }, []);
  return (
    <div>
      <section className="section" id="projects">
        <div className="container">
          <h1 className="section-title">Featured Projects</h1>
          <div className="projects-grid">
            {projectsInfo.map((project, index) => (
              
                <div key={index} className="project-cd glass-cd">
                  <div className="project-head">
                    <div className="project-icon">{project.icon}</div>
                  </div>
                  <div className="project-content">
                  <a
                href={project.link}
                target="_blank"
                style={{
                  textDecoration: "none",
                  color: "white",
                  display: "inherit",
                }}
              >
                <h3 style={{borderBottom: "2px dotted rgba(255, 255, 255, 0.504)"}}>{project.title}</h3>
                    </a>
                    <br />
                    <p>{project.description}</p>
                    <div className="tech-stack-container">
                    {/* <div className="tech-stack"> */}
                    {project.tech.map((tech, tIndex) => (
                      <span className="tech-name" key={tIndex}>
                        {tech}
                      </span>    
                    )
                    )}
                    {/* </div> */}
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
