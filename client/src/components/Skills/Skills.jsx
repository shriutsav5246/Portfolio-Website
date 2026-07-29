import "./Skills.css";

import { skillCategories } from "../../data/skillsData";

import SkillCategory from "./SkillCategory";

function Skills() {
  return (
    <section className="skills">
      <div className="container">
        <div className="skills-header">
          <span className="skills-tag">MY SKILLS</span>

          <h2>Technologies & Expertise</h2>

          <p>
            A collection of technologies, programming languages, frameworks,
            databases, and development tools that I use to build modern,
            scalable, and user-friendly applications.
          </p>
        </div>

        {skillCategories.map((category) => (
          <SkillCategory
            key={category.title}
            title={category.title}
            skills={category.skills}
          />
        ))}
      </div>
    </section>
  );
}

export default Skills;
