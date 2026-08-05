import { motion } from "framer-motion";

function ProjectHero({ project }) {
  return (
    <section className="project-modal-hero">
      {/* =========================================
                    PROJECT CATEGORY
      ========================================= */}

      <motion.span
        className="project-modal-category"
        initial={{
          opacity: 0,
          y: 15,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.4,
          delay: 0.3,
        }}
      >
        {project.category}
      </motion.span>

      {/* =========================================
                    PROJECT TITLE
      ========================================= */}

      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.45,
          delay: 0.38,
        }}
      >
        {project.title}
      </motion.h1>

      {/* =========================================
                  SHORT DESCRIPTION
      ========================================= */}

      <motion.p
        className="project-modal-description"
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.45,
          delay: 0.46,
        }}
      >
        {project.shortDescription}
      </motion.p>

      {/* =========================================
                    TECHNOLOGIES
      ========================================= */}

      <motion.div
        className="project-modal-tech-list"
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.45,
          delay: 0.54,
        }}
      >
        {project.technologies.map((technology) => (
          <span
            key={`${project.id}-${technology}`}
            className="project-modal-tech"
          >
            {technology}
          </span>
        ))}
      </motion.div>
    </section>
  );
}

export default ProjectHero;