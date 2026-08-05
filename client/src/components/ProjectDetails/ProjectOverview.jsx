import { motion } from "framer-motion";

function ProjectOverview({ project }) {
  return (
    <motion.section
      className="project-modal-overview"
      initial={{
        opacity: 0,
        y: 25,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
        delay: 0.62,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* =========================================
                    SECTION TITLE
      ========================================= */}

      <div className="project-modal-section-heading">
        <span className="project-modal-section-number">01</span>

        <h2>Project Overview</h2>
      </div>

      {/* =========================================
                    DESCRIPTION
      ========================================= */}

      <p className="project-modal-overview-text">
        {project.fullDescription}
      </p>
    </motion.section>
  );
}

export default ProjectOverview;