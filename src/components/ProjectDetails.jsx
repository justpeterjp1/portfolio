import { useParams, useNavigate } from "react-router-dom";
import projectsData from "../resources/ProjectsData";
import '../css/projects.css';

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find(p => p.id === parseInt(id));

  if (!project) return <div>Project not found.</div>;

  return (
    
   <div className="project-details-section">
  <button className="back-button" onClick={() => navigate(-1)}>← Back</button>

  <div className="details-wrapper">
    {/* Overview (left card) */}
    <div className="details-card overview-card">
      <div className="image-container">
        <img src={project.img} alt={project.title} />
      </div>
      <div className="card-body">
        <h1 className="card-title">{project.title}</h1>
        <p className="card-text">{project.details}</p>
        <p className="tech-stack">
          <strong>Tech Stack:</strong> {project.tools.join(", ")}
        </p>
      </div>
    </div>

    {/* Design Process & Challenges (right card) */}
    <div className="details-card story-card">
      <h2 className="card-title">Design Process & Challenges</h2>
      <p className="card-text">{project.designProcess}</p>
      <p className="card-text">{project.challenges}</p>

      <div className="btn-group">
        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-cyan">View Demo</a>
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-outline-cyan">Source Code</a>
      </div>
    </div>
  </div>
</div>


  );
}
