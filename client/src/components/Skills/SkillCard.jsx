import { motion } from "framer-motion";

function SkillCard({ icon, title, description, delay = 0 }) {
  return (
    <motion.article
      className="skill-card"
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.45,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -6,
      }}
    >
      {/* Skill Icon */}

      <div className="skill-icon">{icon}</div>

      {/* Skill Information */}

      <div className="skill-info">
        <h3>{title}</h3>

        <p>{description}</p>
      </div>
    </motion.article>
  );
}

export default SkillCard;
