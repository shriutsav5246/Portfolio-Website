import { motion } from "framer-motion";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";

function ProjectLinks({ project }) {
  const hasGitHub = project.github && project.github !== "#";

  const handleGitHubClick = () => {
    if (!hasGitHub) return;

    window.open(project.github, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.section
      className="project-modal-links"
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
        delay: 0.85,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* =========================================
                    SECTION HEADING
      ========================================= */}

      <div className="project-modal-section-heading">
        <span className="project-modal-section-number">03</span>

        <h2>Project Repository</h2>
      </div>

      {/* =========================================
                    GITHUB BUTTON
      ========================================= */}

      <motion.button
        type="button"
        className={`project-modal-github-btn ${!hasGitHub ? "disabled" : ""}`}
        onClick={handleGitHubClick}
        disabled={!hasGitHub}
        whileHover={
          hasGitHub
            ? {
                y: -3,
              }
            : {}
        }
        whileTap={
          hasGitHub
            ? {
                scale: 0.97,
              }
            : {}
        }
      >
        <span className="project-modal-github-icon">
          <FaGithub />
        </span>

        <span className="project-modal-github-content">
          <strong>View on GitHub</strong>

          <small>
            {hasGitHub
              ? "Explore source code and project repository"
              : "Repository link will be added soon"}
          </small>
        </span>

        <FaArrowUpRightFromSquare className="project-modal-external-icon" />
      </motion.button>
    </motion.section>
  );
}

export default ProjectLinks;
