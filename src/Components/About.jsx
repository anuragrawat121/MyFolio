import React from "react";
import { Download } from "lucide-react";
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
          <div style={{ marginTop: "1.75rem" }}>
            <a
              href="https://drive.google.com/uc?export=download&id=1VafCk3WhuVaIC0FEjFGvBOjzPqeif7qZ"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary inline-flex items-center gap-2"
            >
              <Download className="w-4 h-4" /> Download Resume (PDF)
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
