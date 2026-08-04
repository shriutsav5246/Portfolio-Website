import "./Skills.css";

import { motion } from "framer-motion";

import { skillCategories } from "../../data/skillsData";

import SkillCategory from "./SkillCategory";

function Skills() {
  return (
    <section className="skills">
      <div className="skills-container">
        {/* =========================================
                        HEADER
        ========================================= */}

        <motion.div
          className="skills-header"
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <h1>Technologies & Expertise</h1>

          <p>
            A practical overview of the technologies, programming languages,
            frameworks, databases, and development tools I use across full-stack
            development and software projects.
          </p>
        </motion.div>

        {/* =========================================
                    SKILL CATEGORIES
        ========================================= */}

        <div className="skills-categories">
          {skillCategories.map((category) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
