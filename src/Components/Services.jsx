import React from "react";
import { Code2, Gauge, Layers, PenTool } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const services = [
  {
    title: "Web Development",
    description:
      "Responsive product interfaces with React, Next.js, and careful performance budgets.",
    icon: Code2,
  },
  {
    title: "Interface Design",
    description:
      "Layouts, type, and motion that make a product feel inevitable instead of decorated.",
    icon: PenTool,
  },
  {
    title: "Software Systems",
    description:
      "APIs, data models, and admin flows that stay maintainable after the first demo.",
    icon: Layers,
  },
  {
    title: "Performance",
    description:
      "Load, interaction, and SEO work so the experience holds up on real devices.",
    icon: Gauge,
  },
];

const Services = () => {
  return (
    <section className="site-section" id="services">
      <Reveal>
        <SectionHeader
          index="04"
          kicker="Services"
          title="What I can take"
          italic="off your plate."
        />
      </Reveal>
      <div className="services-list">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Reveal key={service.title} delay={index * 70}>
              <div className="service-row">
                <span className="service-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-copy">{service.description}</p>
                <Icon className="service-icon" size={18} />
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
