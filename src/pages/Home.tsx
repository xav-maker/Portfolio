import { Link } from 'react-router-dom'
import SkillCard from '../components/SkillCard'
import Button from '../components/Button'
import { 
  SiReact, 
  SiNodedotjs, 
  SiTypescript, 
  SiJavascript, 
  SiSharp, 
  SiPython,
  SiNextdotjs
} from 'react-icons/si'
import { TbBrandReactNative } from 'react-icons/tb'
import './Home.css'

const skills = [
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'C#', icon: SiSharp, color: '#512BD4' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'React Native', icon: TbBrandReactNative, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
]

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <p className="hero-name">Xavier Coll</p>
          <h1 className="hero-title">Développeur Web Freelance</h1>
          <p className="hero-subtitle">
            Conception d'applications web de A à Z
          </p>
          <p className="hero-description">
            Je transforme vos idées en solutions digitales performantes et modernes.
            Spécialisé dans le développement full-stack, je vous accompagne de la conception à la mise en production.
          </p>
          <div className="hero-buttons">
            <Link to="/cv">
              <Button variant="primary">Voir mon CV</Button>
            </Link>
            <Link to="/projects">
              <Button variant="secondary">Mes réalisations</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="skills-section">
        <h2 className="section-title">Mes compétences</h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              Icon={skill.icon}
              color={skill.color}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
