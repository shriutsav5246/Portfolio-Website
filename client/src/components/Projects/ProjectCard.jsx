import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { FaArrowRight, FaGithub } from "react-icons/fa";

function ProjectCard({ project, index = 0 }) {
  const navigate = useNavigate();

  /* =========================================
              OPEN PROJECT DETAILS
  ========================================= */

  const handleCardClick = () => {
    navigate(`/projects/${project.slug}`);
  };

  /* =========================================
                    GITHUB
  ========================================= */

  const handleGitHub = (event) => {
    event.stopPropagation();

    if (project.github && project.github !== "#") {
      window.open(project.github, "_blank", "noopener,noreferrer");
    }
  };

  /* =========================================
                GITHUB AVAILABILITY
  ========================================= */

  const hasGitHub = project.github && project.github !== "#";

  return (
    <motion.article
      layout
      className={`project-card ${
        project.featured ? "project-card-featured" : ""
      }`}
      onClick={handleCardClick}
      initial={{
        opacity: 0,
        y: 45,
        scale: 0.98,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        y: 20,
        scale: 0.97,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -6,
      }}
    >
      {/* =========================================
                    PROJECT PREVIEW
      ========================================= */}

      <div className="project-image">
        {project.image ? (
          <img src={project.image} alt={`${project.title} project preview`} />
        ) : (
          <div className="project-placeholder">
            <div className="project-placeholder-number">
              {String(index + 1).padStart(2, "0")}
            </div>

            <div className="project-placeholder-content">
              <span className="project-placeholder-category">
                {project.category}
              </span>

              <h3>{project.title}</h3>
            </div>
          </div>
        )}

        <div className="project-image-overlay" />

        {/* =========================================
                    FEATURED LABEL
        ========================================= */}

        {project.featured && (
          <span className="project-featured-label">Featured</span>
        )}
      </div>

      {/* =========================================
                    PROJECT CONTENT
      ========================================= */}

      <div className="project-content">
        {/* =========================================
                    PROJECT TITLE
        ========================================= */}

        <div className="project-title-row">
          <h3>{project.title}</h3>

          <span className="project-details-arrow">
            <FaArrowRight />
          </span>
        </div>

        {/* =========================================
                    DESCRIPTION
        ========================================= */}

        <p className="project-description">{project.shortDescription}</p>

        {/* =========================================
                    TECHNOLOGIES
        ========================================= */}

        <div className="tech-stack">
          {project.technologies.map((tech) => (
            <span key={`${project.id}-${tech}`} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>

        {/* =========================================
                      GITHUB BUTTON
        ========================================= */}

        <div className="project-buttons">
          <button
            type="button"
            className="project-github-btn"
            onClick={handleGitHub}
            disabled={!hasGitHub}
            aria-label={`Open ${project.title} GitHub repository`}
          >
            <FaGithub />

            <span>View on GitHub</span>
          </button>
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
