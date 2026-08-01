import "./Hero.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SocialLinks from "../SocialLinks/SocialLinks";
import portfolioData from "../../data/portfolioData";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <motion.h1
          className="hero-name"
          initial={{
            opacity: 0,
            scale: 0.9,
            filter: "blur(2px)",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {portfolioData.personal.fullName}
        </motion.h1>

        <p className="hero-description">{portfolioData.personal.description}</p>

        <div className="hero-buttons">
          <Link to="/projects" className="hero-btn primary-btn">
            View Projects
          </Link>

          <a href="/resume.pdf" rel="noopener noreferrer" className="hero-btn secondary-btn">Resume</a>

          <Link to="/contact" className="hero-btn secondary-btn">
            Contact
          </Link>
        </div>

        <SocialLinks />
      </div>
    </section>
  );
}

export default Hero;
