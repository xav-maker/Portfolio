import { FiDownload, FiMail, FiMapPin } from 'react-icons/fi'
import Button from '../components/Button'
import './CV.css'

const experiences = [
  {
    title: 'Développeur Full Stack Freelance',
    company: 'Indépendant',
    period: '2024 - Présent',
    description:
      'Conception et développement d\'applications web sur mesure.',
    technologies: ['React', 'Node.js', 'TypeScript', 'Next.js', 'MongoDB'],
  },
  {
    title: 'Développeur/testeur d\'applications web en alternance',
    company: 'COPPELIS',
    period: '2020 - 2021',
    description:'Développement et test de 3 applications web en React, rédaction de features dans le serveur dotnet.',
    technologies: ['React', 'C#', '.NET', 'Javascript'],
  },
]

const education = [
  {
    degree: 'BTS SIO',
    school: 'Ecole IRIS',
    period: '2020 - 2022',
    description: 'Paris 17',
  },
  {
    degree: 'Licence en sciences sociales',
    school: 'Institut catholique de Paris',
    period: '2016 - 2019',
    description: 'Economie, sociologie, science politique',
  },
]

const skillCategories = [
  {
    category: 'Front-end',
    skills: ['React', 'React Native', 'Next.js', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Redux'],
  },
  {
    category: 'Back-end',
    skills: ['Node.js', 'C#', '.NET', 'Python', 'REST APIs'],
  },
  {
    category: 'Base de données',
    skills: ['PostgreSQL', 'MongoDB', 'SQL Server', 'Redis'],
  },
  {
    category: 'Outils & DevOps',
    skills: ['Git', 'Docker', 'Vercel'],
  },
  {
    category: 'Langues',
    skills: ['Français ( natif )', 'Anglais ( professionnel )', 'Espagnol ( notions )']
  },
  {
    category: 'Autres',
    skills: ['Gimp', 'Excel', 'Méthode Agile', 'Veille Technique']
  }
]

function CV() {
  const handleDownload = () => {
    window.open('/cv.pdf', '_blank')
  }

  return (
    <div className="cv-page">
      <div className="cv-header">
        <div className="cv-intro">
          <h1 className="cv-name">Xavier Coll</h1>
          <h2 className="cv-title">Développeur Web Full-Stack</h2>
          <p className="cv-summary">
            Développeur passionné avec plusieurs années d'expérience dans la conception
            d'applications web modernes. Spécialisé dans l'écosystème JavaScript/TypeScript.
          </p>
          <div className="cv-contact">
            <span className="contact-item">
              <FiMail /> xaviercoll.dev@gmail.com
            </span>
            <span className="contact-item">
              <FiMapPin /> Paris, France
            </span>
          </div>
        </div>
        <div className="cv-download">
          <Button variant="primary" onClick={handleDownload}>
            <FiDownload /> Télécharger le PDF
          </Button>
        </div>
      </div>

      <div className="cv-content">
        <section className="cv-section">
          <h2 className="section-title">Expérience Professionnelle</h2>
          <div className="experience-list">
            {experiences.map((exp, index) => (
              <div key={index} className="experience-item">
                <div className="experience-header">
                  <div>
                    <h3 className="experience-title">{exp.title}</h3>
                    <p className="experience-company">{exp.company}</p>
                  </div>
                  <span className="experience-period">{exp.period}</span>
                </div>
                <p className="experience-description">{exp.description}</p>
                <div className="experience-tech">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="cv-section">
          <h2 className="section-title">Formation</h2>
          <div className="education-list">
            {education.map((edu, index) => (
              <div key={index} className="education-item">
                <div className="education-header">
                  <div>
                    <h3 className="education-degree">{edu.degree}</h3>
                    <p className="education-school">{edu.school}</p>
                  </div>
                  <span className="education-period">{edu.period}</span>
                </div>
                <p className="education-description">{edu.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="cv-section">
          <h2 className="section-title">Compétences</h2>
          <div className="skills-categories">
            {skillCategories.map((cat) => (
              <div key={cat.category} className="skill-category">
                <h3 className="category-title">{cat.category}</h3>
                <div className="category-skills">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default CV
