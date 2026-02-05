import { useParams, Link } from 'react-router-dom'
import { FiExternalLink, FiGithub, FiArrowLeft } from 'react-icons/fi'
import projectsData from '../data/projects.json'
import type { Project } from './Projects'
import './ProjectDetail.css'

function ProjectDetail() {
  const { id } = useParams<{ id: string }>()
  const project: Project | undefined = projectsData.find((p) => p.id === id)

  if (!project) {
    return (
      <div className="project-not-found">
        <h1>Projet non trouvé</h1>
        <Link to="/projects" className="back-link">
          <FiArrowLeft /> Retour aux projets
        </Link>
      </div>
    )
  }

  return (
    <div className="project-detail">
      <Link to="/projects" className="back-link">
        <FiArrowLeft /> Retour aux projets
      </Link>

      <div className="project-header">
        <h1 className="project-title">{project.title}</h1>
        <div className="project-links">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link demo-link"
            >
              <FiExternalLink /> Voir la démo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link github-link"
            >
              <FiGithub /> Code source
            </a>
          )}
        </div>
      </div>

      <div className="project-image-container">
        <img
          src={project.image}
          alt={project.title}
          className="project-image-large"
        />
      </div>

      <div className="project-content">
        <section className="project-description">
          <h2>Description</h2>
          <p>{project.fullDescription}</p>
        </section>

        <section className="project-technologies">
          <h2>Technologies utilisées</h2>
          <div className="tech-badges">
            {project.technologies.map((tech) => (
              <span key={tech} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default ProjectDetail
