import "./About.css";

import IntroSection from "./IntroSection";
import StatsSection from "./StatsSection";
import TimelineSection from "./TimelineSection";
import TechChips from "./TechChips";

function About() {
  return (
    <section className="about">
      <div className="container">
        <IntroSection />

        <StatsSection />

        <TimelineSection />

        <TechChips />
      </div>
    </section>
  );
}

export default About;
