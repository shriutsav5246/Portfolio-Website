import { motion } from "framer-motion";
import SkillCard from "./SkillCard";

function SkillCategory({ title, skills }) {
  return (
    <motion.section
      className="skill-category"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="category-title"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <SkillCard
            key={skill.title}
            icon={skill.icon}
            title={skill.title}
            description={skill.description}
            delay={index * 0.1}
          />
        ))}
      </div>
    </motion.section>
  );
}

export default SkillCategory;
