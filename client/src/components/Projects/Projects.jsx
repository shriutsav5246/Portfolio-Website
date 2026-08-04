import "./Projects.css";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { projects } from "../../data/projectsData";

import FilterBar from "./FilterBar";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  /* =========================================
                FILTER PROJECTS
  ========================================= */

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section className="projects">
      <div className="projects-container">
        {/* =========================================
                        PAGE HEADER
        ========================================= */}

        <motion.div
          className="projects-header"
          initial={{
            opacity: 0,
            y: 35,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <h1>
            Things I've <span>Built.</span>
          </h1>

          <p>
            A selection of projects where I applied frontend, backend and
            full-stack development concepts to build practical applications and
            improve my software development skills.
          </p>
        </motion.div>

        {/* =========================================
                        FILTER AREA
        ========================================= */}

        <motion.div
          className="projects-toolbar"
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="projects-toolbar-info">
            <span className="projects-count">
              {filteredProjects.length.toString().padStart(2, "0")}
            </span>

            <span className="projects-count-label">
              {activeFilter === "All" ? "Projects" : `${activeFilter} Projects`}
            </span>
          </div>

          <FilterBar
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />
        </motion.div>

        {/* =========================================
                        PROJECT GRID
        ========================================= */}

        <motion.div layout className="projects-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* =========================================
                        EMPTY STATE
        ========================================= */}

        {filteredProjects.length === 0 && (
          <div className="projects-empty">
            <h3>No projects found.</h3>

            <p>There are currently no projects available in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
