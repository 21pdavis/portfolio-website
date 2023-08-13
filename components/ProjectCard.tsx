import styles from './ProjectCard.module.css'

type ProjectCardProps = {
  title: string,
  description: string,
  backgroundImage: string
}

export default function ProjectCard({ title, description, backgroundImage }: ProjectCardProps) {
  return (
    <div className={styles.container} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className={styles.overlay}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}

