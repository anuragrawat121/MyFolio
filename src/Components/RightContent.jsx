import React from "react";
import pfp from "../assets/pfp.jpeg";

const orbit = [
  {
    name: "React",
    href: "https://react.dev/",
    icon: "https://img.icons8.com/?size=100&id=wPohyHO_qO1a&format=png&color=000000",
  },
  {
    name: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
  },
  {
    name: "Tailwind",
    href: "https://tailwindcss.com/",
    icon: "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000",
  },
  {
    name: "Python",
    href: "https://www.python.org/",
    icon: "https://img.icons8.com/?size=100&id=13441&format=png&color=000000",
  },
  {
    name: "TypeScript",
    href: "https://www.typescriptlang.org/",
    icon: "https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000",
  },
  {
    name: "Node.js",
    href: "https://nodejs.org/",
    icon: "https://img.icons8.com/?size=100&id=54087&format=png&color=000000",
  },
];

const RightContent = () => {
  return (
    <div className="portrait-wrap">
      <div className="portrait">
        <div className="portrait-frame">
          <img src={pfp} alt="Anurag Rawat" />
          <span className="portrait-caption">Based in India</span>
        </div>
        <div className="orbit">
          {orbit.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="orbit-item"
              aria-label={item.name}
            >
              <img src={item.icon} alt="" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightContent;
