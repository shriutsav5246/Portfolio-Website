import "./About.css";

import { motion } from "framer-motion";

const timeline = [
  {
    year: "2023",
    title: "Started B.Tech CSE",
    description:
      "Began my Computer Science Engineering journey at NIMS University and built a strong foundation in programming and core computer science subjects.",
  },
  {
    year: "2024",
    title: "Explored Programming",
    description:
      "Strengthened problem-solving skills through C++, Java, Data Structures, Algorithms, and academic projects.",
  },
  {
    year: "2025",
    title: "Full Stack Development",
    description:
      "Started building responsive web applications using HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB.",
  },
  {
    year: "2026",
    title: "Professional Growth",
    description:
      "Developing full-stack MERN projects, cloud computing skills, DevOps fundamentals, and preparing for software engineering placements.",
  },
];

function TimelineSection() {
  return (
    <section className="timeline-section">
      <div className="timeline">
        {timeline.map((item, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
          >
            <div className="timeline-dot"></div>

            <div className="timeline-card">
              <span>{item.year}</span>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default TimelineSection;
