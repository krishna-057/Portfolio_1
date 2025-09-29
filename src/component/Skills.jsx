import React from "react";
import "../css/Skills.css";
function Skills() {
  const skillCategories = [
    {
      icon: "🚀",
      title: "Frontend Development",
      description: "Creating responsive, interactive user interfaces",
      skills: ["React", "JavaScript", "TypeScript", "CSS3", "HTML5"],
    },
    {
      icon: "⚡",
      title: "Backend Development",
      description: "Building robust server-side applications",
      skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs"],
    },
    {
      icon: "🛠️",
      title: "Tools & Technologies",
      description: "Modern development tools and workflows",
      skills: ["Git", "Webpack", "Docker", "AWS", "Figma"],
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
