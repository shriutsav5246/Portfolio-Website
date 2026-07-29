import { useNavigate } from "react-router-dom";

function ProjectCard({ project }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/projects/${project.slug}`);
  };

  return (
    <div className="project-card" onClick={handleCardClick}>
      <div className="project-image">
        <span>{project.title}</span>
      </div>

      <div className="project-content">
        <h3>{project.title}</h3>

        <p>{project.shortDescription}</p>

        <div className="tech-stack">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-buttons">
          <button onClick={(e) => e.stopPropagation()}>Live Demo</button>

          <button onClick={(e) => e.stopPropagation()}>GitHub</button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
