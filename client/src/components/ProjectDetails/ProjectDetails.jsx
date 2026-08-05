import { useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";

import { projects } from "../../data/projectsData";

import ProjectHero from "./ProjectHero";
import ProjectOverview from "./ProjectOverview";
import ProjectFeatures from "./ProjectFeatures";
import ProjectLinks from "./ProjectLinks";

import "./ProjectDetails.css";

function ProjectDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const project = projects.find((item) => item.slug === slug);

  /* =========================================
              CLOSE PROJECT MODAL
  ========================================= */

  const handleClose = () => {
    navigate("/projects");
  };

  /* =========================================
              ESCAPE KEY CLOSE
  ========================================= */

  useEffect(() => {
    // Project details open hote hi viewport top par lao
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

    // Background page ko scroll hone se roko
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        navigate("/projects");
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [navigate]);

  /* =========================================
              INVALID PROJECT
  ========================================= */

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return (
    <motion.div
      className="project-details-overlay"
      onClick={handleClose}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.35,
      }}
    >
      {/* =========================================
                  FLIP PROJECT CARD
      ========================================= */}

      <motion.div
        className="project-details-modal"
        onClick={(event) => event.stopPropagation()}
        initial={{
          opacity: 0,
          rotateY: -90,
          scale: 0.82,
        }}
        animate={{
          opacity: 1,
          rotateY: 0,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          rotateY: 90,
          scale: 0.82,
        }}
        transition={{
          duration: 0.65,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* =========================================
                    CLOSE BUTTON
        ========================================= */}

        <button
          type="button"
          className="project-details-close"
          onClick={handleClose}
          aria-label="Close project details"
        >
          ×
        </button>

        {/* =========================================
                    MODAL CONTENT
        ========================================= */}

        <div className="project-details-content">
          <ProjectHero project={project} />

          <ProjectOverview project={project} />

          <ProjectFeatures project={project} />

          <ProjectLinks project={project} />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ProjectDetails;
