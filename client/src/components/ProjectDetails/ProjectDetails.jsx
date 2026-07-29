import { Navigate, Link, useParams } from "react-router-dom";

import { projects } from "../../data/projectsData";

import ProjectHero from "./ProjectHero";
import ProjectOverview from "./ProjectOverview";
import ProjectFeatures from "./ProjectFeatures";
import ProjectLinks from "./ProjectLinks";

import "./ProjectDetails.css";

function ProjectDetails() {
  const { slug } = useParams();

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return (
    <section className="project-details">
      <div className="container">
        <Link to="/projects" className="back-button">
          ← Back to Projects
        </Link>

        <ProjectHero project={project} />

        <ProjectOverview project={project} />

        <ProjectFeatures project={project} />

        <ProjectLinks project={project} />
      </div>
    </section>
  );
}

export default ProjectDetails;
