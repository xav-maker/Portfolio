import ProjectCard from '../components/ProjectCard'
import projectsData from '../data/projects.json'
import './Projects.css'

export interface Project {
  id: string
  title: string
  shortDescription: string
  fullDescription: string
  technologies: string[]
  image: string
  demoUrl?: string
  githubUrl?: string
}

function Projects() {
  const projects: Project[] = projectsData

  return (
    <div className="projects-page">
      <h1 className="page-title">Mes Réalisations</h1>
      <p className="page-subtitle">
        Découvrez une sélection de projets sur lesquels j'ai travaillé
      </p>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

export default Projects
