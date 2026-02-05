import type { IconType } from 'react-icons'
import './SkillCard.css'

interface SkillCardProps {
  name: string
  Icon: IconType
  color: string
}

function SkillCard({ name, Icon, color }: SkillCardProps) {
  return (
    <div className="skill-card">
      <div className="skill-icon" style={{ color }}>
        <Icon />
      </div>
      <span className="skill-name">{name}</span>
    </div>
  )
}

export default SkillCard
