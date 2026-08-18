import React from "react";
import Globe from "./Globe";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const About = () => {
  return (
    <section className="site-section" id="about">
      <Reveal>
        <SectionHeader
          index="01"
          kicker="About"
          title="World-class code,"
          italic="from anywhere."
        />
      </Reveal>
      <div className="about-layout">
        <Reveal>
          <Globe />
        </Reveal>
        <Reveal delay={120} className="about-copy">
          <div className="remote-badge">Remote ready</div>
          <p>
            I&apos;m a software developer with a bias for{" "}
            <strong>clear systems</strong> and interfaces that feel inevitable.
            I work across the stack — React and Next.js on the surface, Python,
            Node, and Postgres underneath.
          </p>
          <p>
            Recent work includes MandiSync, a live mandi-arbitrage tool for
            Indian farmers, and ArtByAnjali, an animation-led art portfolio with
            a custom admin.
          </p>
          <div className="about-stats">
            <div className="about-stat">
              <span>04</span>
              <small>Shipped products</small>
            </div>
            <div className="about-stat">
              <span>FS</span>
              <small>Full-stack</small>
            </div>
            <div className="about-stat">
              <span>IN</span>
              <small>Based in India</small>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
