import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const education = [
  {
    period: "2024 — Jul 2026",
    title: "Master of Computer Applications",
    place: "Dev Bhoomi Uttarakhand University",
    detail:
      "Completed in July 2026. Two years of full-stack work, system design basics, and turning coursework into things I could actually ship — not just submit.",
  },
  {
    period: "2021 — 2024",
    title: "Bachelor of Computer Applications",
    place: "Shri Guru Ram Rai University",
    detail:
      "Where I got serious about web development and modular thinking. Also captained the university volleyball team to a championship — taught me more about pressure and teamwork than any lab ever did.",
  },
  {
    period: "2019 — 2021",
    title: "Higher Secondary",
    place: "GIC Rikhnikhal, Pauri Garhwal",
    detail:
      "Grew up in the hills of Uttarakhand. Finished school with 80% in Class XII and 74% in Class X — science stream, first steps toward building with computers.",
  },
];

const experience = [
  {
    period: "Jan — May 2026",
    title: "Frontend Developer Intern",
    place: "Codeware IT Pvt. Ltd.",
    detail:
      "Worked on a live e-commerce product in React and Tailwind — wiring REST APIs, fixing cross-browser quirks, and keeping the UI fast enough that it didn’t feel like a side project.",
  },
  {
    period: "Jun — Jul 2025",
    title: "Software Developer Intern",
    place: "Uttarakhand Media Ventures Pvt. Ltd.",
    detail:
      "Built and refined components for a news portal where content updates constantly. Learned how to keep layouts stable when data is always moving, and how Git fits into a real team workflow.",
  },
];

const Career = () => {
  return (
    <section className="site-section" id="career">
      <Reveal>
        <SectionHeader
          index="02"
          kicker="Career"
          title="Where I learned"
          italic="to build."
        />
      </Reveal>

      <Reveal delay={60}>
        <p className="career-intro">
          I&apos;m from Pauri Garhwal, Uttarakhand — a small-town start, but I&apos;ve
          been lucky to study, intern, and build in places that pushed me. This
          is the path that got me here.
        </p>
      </Reveal>

      <div className="career-block">
        <Reveal>
          <h3 className="career-label">Education</h3>
        </Reveal>
        <div className="career-list">
          {education.map((item, index) => (
            <Reveal key={item.title} delay={index * 60}>
              <article className="career-row">
                <time className="career-period">{item.period}</time>
                <div className="career-body">
                  <h4 className="career-title">{item.title}</h4>
                  <p className="career-place">{item.place}</p>
                  <p className="career-detail">{item.detail}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="career-block">
        <Reveal>
          <h3 className="career-label">Experience</h3>
        </Reveal>
        <div className="career-list">
          {experience.map((item, index) => (
            <Reveal key={item.title} delay={index * 60}>
              <article className="career-row">
                <time className="career-period">{item.period}</time>
                <div className="career-body">
                  <h4 className="career-title">{item.title}</h4>
                  <p className="career-place">{item.place}</p>
                  <p className="career-detail">{item.detail}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;
