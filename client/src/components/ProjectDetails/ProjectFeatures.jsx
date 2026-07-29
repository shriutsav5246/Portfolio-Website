function ProjectFeatures({ project }) {
  return (
    <section className="project-features">
      <h2>Key Features</h2>

      <div className="features-grid">
        {project.features.map((feature) => (
          <div key={feature} className="feature-card">
            <div className="feature-icon">✓</div>

            <p>{feature}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectFeatures;
