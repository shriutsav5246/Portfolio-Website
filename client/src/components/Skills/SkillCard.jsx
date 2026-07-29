import { motion } from "framer-motion";

function SkillCard({ icon, title, description, delay = 0 }) {
  return (
    <motion.div
      className="skill-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.45,
        delay,
      }}
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
    >
      <div className="skill-icon">{icon}</div>

      <h3>{title}</h3>

      <p>{description}</p>
    </motion.div>
  );
}

export default SkillCard;
