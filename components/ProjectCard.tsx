import Link from 'next/link';
import Image from 'next/image';

import styles from './ProjectCard.module.css'

export default function ProjectCard({ projectKey, projectTitle, projectDescription, projectImage }) {
  return (
    <div className={styles.container} style={{ backgroundImage: `url(${projectImage}) no-repeat` }}>
      <p>
        <span className={styles.title}>{projectTitle}</span>
        <br />
        <span className={styles.description}>{projectDescription}</span>
      </p>
    </div>
  )
}