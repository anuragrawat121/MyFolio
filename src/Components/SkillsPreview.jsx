import React from "react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const skills = [
  {
    name: "React",
    icon: "https://img.icons8.com/?size=100&id=wPohyHO_qO1a&format=png&color=000000",
    link: "https://react.dev/",
  },
  {
    name: "JavaScript",
    icon: "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "HTML5",
    icon: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS3",
    icon: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "Tailwind",
    icon: "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000",
    link: "https://tailwindcss.com/",
  },
  {
    name: "Node.js",
    icon: "https://img.icons8.com/?size=100&id=54087&format=png&color=000000",
    link: "https://nodejs.org/",
  },
  {
    name: "Git",
    icon: "https://img.icons8.com/?size=100&id=20906&format=png&color=000000",
    link: "https://git-scm.com/",
  },
  {
    name: "Python",
    icon: "https://img.icons8.com/?size=100&id=13441&format=png&color=000000",
    link: "https://www.python.org/",
  },
  {
    name: "TypeScript",
    icon: "https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000",
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "Redux",
    icon: "https://img.icons8.com/?size=100&id=jD-fJzVguBmw&format=png&color=000000",
    link: "https://redux.js.org/",
  },
  {
    name: "MongoDB",
    icon: "https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000",
    link: "https://www.mongodb.com/",
  },
  {
    name: "Express",
    icon: "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000",
    link: "https://expressjs.com/",
  },
];

const SkillsPreview = () => {
  const row = [...skills, ...skills];

  return (
    <section className="site-section" id="skills">
      <Reveal>
        <SectionHeader
          index="03"
          kicker="Stack"
          title="Tools I actually"
          italic="ship with."
        />
      </Reveal>
      <Reveal delay={80}>
        <div className="marquee-wrap">
          <div className="marquee-row">
            {row.map((skill, index) => (
              <a
                key={`a-${skill.name}-${index}`}
                href={skill.link}
                target="_blank"
                rel="noopener noreferrer"
                className="skill-chip"
              >
                <img src={skill.icon} alt="" />
                <span>{skill.name}</span>
              </a>
            ))}
          </div>
          <div className="marquee-row reverse">
            {row.map((skill, index) => (
              <a
                key={`b-${skill.name}-${index}`}
                href={skill.link}
                target="_blank"
                rel="noopener noreferrer"
                className="skill-chip"
              >
                <img src={skill.icon} alt="" />
                <span>{skill.name}</span>
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default SkillsPreview;
