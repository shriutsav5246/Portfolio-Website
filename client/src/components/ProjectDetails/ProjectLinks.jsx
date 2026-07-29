function ProjectLinks({ project }) {
  return (
    <section className="project-links">
      <h2>Explore Project</h2>

      <div className="links-container">
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="live-btn"
        >
          Live Demo
        </a>

        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="github-btn"
        >
          GitHub Repository
        </a>
      </div>
    </section>
  );
}

export default ProjectLinks;
