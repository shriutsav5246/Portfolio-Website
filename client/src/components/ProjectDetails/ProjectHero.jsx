function ProjectHero({ project }) {
  return (
    <section className="project-hero">
      <div className="project-banner">
        {project.image ? (
          <img src={project.image} alt={project.title} />
        ) : (
          <div className="project-placeholder">
            <h1>{project.title}</h1>
          </div>
        )}
      </div>

      <div className="project-hero-content">
        <span className="project-category">{project.category}</span>

        <h1>{project.title}</h1>

        <p>{project.shortDescription}</p>

        <div className="project-tech-list">
          {project.technologies.map((tech) => (
            <span key={tech} className="project-tech">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectHero;
