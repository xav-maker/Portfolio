import { Link } from 'react-router-dom'
import type { Project } from '../pages/Projects'
import './ProjectCard.css'

interface ProjectCardProps {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link to={`/projects/${project.id}`} className="project-card">
      <div className="project-image-wrapper">
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
        />
      </div>
      <div className="project-info">
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-description">{project.shortDescription}</p>
        <div className="project-technologies">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="tech-badge-small">
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="tech-badge-small">+{project.technologies.length - 4}</span>
          )}
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard
