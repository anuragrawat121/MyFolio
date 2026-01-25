import React from "react";

const SkillsPreview = () => {
  const skills = [
    {
      name: "React",
      icon: "https://img.icons8.com/?size=100&id=wPohyHO_qO1a&format=png&color=000000",
      color: "#61DAFB",
    },
    {
      name: "JavaScript",
      icon: "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
      color: "#F7DF1E",
    },
    {
      name: "HTML5",
      icon: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
      color: "#E34F26",
    },
    {
      name: "CSS3",
      icon: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000",
      color: "#1572B6",
    },
    {
      name: "Tailwind CSS",
      icon: "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000",
      color: "#06B6D4",
    },
    {
      name: "Node.js",
      icon: "https://img.icons8.com/?size=100&id=54087&format=png&color=000000",
      color: "#339933",
    },
    {
      name: "Git",
      icon: "https://img.icons8.com/?size=100&id=20906&format=png&color=000000",
      color: "#F05032",
    },
    {
      name: "Python",
      icon: "https://img.icons8.com/?size=100&id=13441&format=png&color=000000",
      color: "#3776AB",
    },
    {
      name: "TypeScript",
      icon: "https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000",
      color: "#3178C6",
    },
    {
      name: "Redux",
      icon: "https://img.icons8.com/?size=100&id=jD-fJzVguBmw&format=png&color=000000",
      color: "#764ABC",
    },
    {
      name: "MongoDB",
      icon: "https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000",
      color: "#47A248",
    },
    {
      name: "Express",
      icon: "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000",
      color: "#000000",
    },
  ];

  return (
    <section className="skills-preview" id="skills">
      <div className="section-header">
        <h2 className="section-title">Tech Stack</h2>
        <p className="section-subtitle">
          Technologies I work with to bring your ideas to life
        </p>
      </div>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-item"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="skill-icon">
              <img
                src={skill.icon}
                alt={skill.name}
                style={{ width: "48px", height: "48px" }}
              />
            </div>
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsPreview;
