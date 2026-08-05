import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

function ProjectFeatures({ project }) {
  return (
    <motion.section
      className="project-modal-features"
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
        delay: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* =========================================
                    SECTION HEADING
      ========================================= */}

      <div className="project-modal-section-heading">
        <span className="project-modal-section-number">02</span>

        <h2>Key Features</h2>
      </div>

      {/* =========================================
                    FEATURES GRID
      ========================================= */}

      <div className="project-modal-features-grid">
        {project.features.map((feature, index) => (
          <motion.div
            key={`${project.id}-${feature}`}
            className="project-modal-feature-card"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.4,
              delay: 0.78 + index * 0.06,
            }}
          >
            <div className="project-modal-feature-icon">
              <FaCheck />
            </div>

            <p>{feature}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default ProjectFeatures;
