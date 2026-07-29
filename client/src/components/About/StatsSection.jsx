import "./About.css";

import { motion } from "framer-motion";

const stats = [
  {
    number: "15+",
    title: "Projects Built",
  },
  {
    number: "10+",
    title: "Technologies",
  },
  {
    number: "4th",
    title: "Year CSE Student",
  },
  {
    number: "∞",
    title: "Continuous Learning",
  },
];

function StatsSection() {
  return (
    <section className="stats-section">
      <div className="stats-grid">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            className="stat-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
            }}
          >
            <h2>{item.number}</h2>

            <p>{item.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default StatsSection;
