import Link from 'next/link';

import styles from './ProjectCard.module.css';

type ProjectCardProps = {
  title: string,
  description: string,
  backgroundImage: string
  projectKey: string
}

export default function ProjectCard({
  title,
  description,
  backgroundImage,
  projectKey
}: ProjectCardProps) {
  return (
    <div className={styles.container} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Link href={`/projects/${projectKey}`} style={{ textDecoration: "none" }}>
        <div className={styles.overlay}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </Link>
    </div> 
  )
}

