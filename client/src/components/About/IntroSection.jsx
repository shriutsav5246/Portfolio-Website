import "./About.css";

import { motion } from "framer-motion";

import profile from "../../assets/images/profile.jpeg";

import portfolioData from "../../data/portfolioData";

function IntroSection() {
  return (
    <motion.section
      className="intro-section"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="intro-image"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <img src={profile} alt={portfolioData.personal.fullName} />
      </motion.div>

      <motion.div
        className="intro-content"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <span className="intro-tag">ABOUT ME</span>

        <h2>Hi, I'm {portfolioData.personal.firstName}</h2>

        <h3>{portfolioData.personal.roleSequence[0]}</h3>

        <p>{portfolioData.personal.description}</p>

        <button className="primary-btn">Download Resume</button>
      </motion.div>
    </motion.section>
  );
}

export default IntroSection;
