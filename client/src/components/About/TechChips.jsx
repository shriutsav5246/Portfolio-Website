import "./About.css";

import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaPython,
  FaJava,
  FaAws,
} from "react-icons/fa";

import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiAndroid,
  SiAndroidstudio,
  SiKotlin,
} from "react-icons/si";

const technologies = [
  // Web Development
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "React", icon: <FaReact /> },

  // Backend & Database
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },

  // Version Control
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },

  // Programming Languages
  { name: "Python", icon: <FaPython /> },
  { name: "Java", icon: <FaJava /> },
  { name: "Kotlin", icon: <SiKotlin /> },

  // App Development
  { name: "Android", icon: <SiAndroid /> },
  { name: "Android Studio", icon: <SiAndroidstudio /> },

  // Cloud
  { name: "AWS", icon: <FaAws /> },
];

function TechChips() {
  return (
    <section className="tech-section">
      <h2 className="tech-heading">Technologies I Work With</h2>

      <div className="tech-grid">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="tech-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.06,
            }}
          >
            <div className="tech-icon">{tech.icon}</div>

            <span>{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default TechChips;