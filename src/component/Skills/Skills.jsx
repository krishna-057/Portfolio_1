import React from "react";
import "./Skills.css";
import frontendImage from "../../assets/frontend.png";
import backendImage from "../../assets/backend.png";
import aiImage from "../../assets/AI_ML.png";
function Skills() {
  const skillCategories = [
    {
      image: frontendImage,
      title: "Frontend Development",
      description: "Creating responsive, interactive user interfaces",
      skills: ["React", "JavaScript", "TypeScript", "CSS3", "HTML5"],
    },
    {
      image: backendImage,
      title: "Backend Development",
      description: "Building robust server-side applications",
      skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs","Python","Pyngrok", "Fastapi", "MySQL","JWT","Bcrypt","CORS"],
    },
    {
      image: aiImage,
      title: "AI/ML",
      description: "AI/ML tools and workflows",
      skills: ["PyTorch","Kaagle", "Jupyter", "NumPy", "Pandas", "Matplotlib", "TensorFlow", "Keras", "PyTorch", "Hugging Face", ],
    },
  ];
  return (
    <section className="section" id="skills">
      <div className="container">
        <h1 className="section-title">Skills & Expertise</h1>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skills-category glass-cd">
              <div className="skills-icon">{category.icon}</div>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
              <div className="skills-list">
                {category.skills.map((skill, skillsIndex) => (
                  <span key={skillsIndex} className="skill-name">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
