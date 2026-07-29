import "./Projects.css";

import { projects } from "../../data/projectsData";

import FilterBar from "./FilterBar";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section className="projects">
      <div className="container">
        <div className="projects-header">
          <span className="projects-tag">MY PROJECTS</span>

          <h2>Featured Work</h2>

          <p>
            A collection of projects that demonstrate my frontend, backend, and
            full-stack development experience using modern technologies.
          </p>
        </div>

        <FilterBar />

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
