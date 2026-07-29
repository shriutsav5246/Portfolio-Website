function ProjectOverview({ project }) {
  return (
    <section className="project-overview">
      <h2>Project Overview</h2>

      <p>{project.fullDescription}</p>
    </section>
  );
}

export default ProjectOverview;
