import { useEffect, useState, useContext } from 'react';

import context from './context';

import styles from './ProjectCard.module.css'

type ProjectCardProps = {
  projectKey: string
}

export default function ProjectCard({ projectKey }: ProjectCardProps) {
  // this is run-time style so we can't just use a CSS class
  const { getEntryByKeyAndType } = useContext(context);
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectImage, setProjectImage] = useState("");
  
  async function fetchProjectData() {
    try {
      const entry = await getEntryByKeyAndType(projectKey, "projectCard");
      setProjectTitle(entry.fields.title);
      setProjectDescription(entry.fields.description);
      setProjectImage(entry.fields.backgroundImage.fields.file.url);
      console.log(`image is ${JSON.stringify(entry.fields, null, 2)}`)
    }
    catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
    // TODO: move to getServerSideProps
    fetchProjectData();
  }, []);

  return (
    <div className={styles.container} style={{ backgroundImage: `url(${projectImage})` }}>
      <div className={styles.overlay}>
        <p>
          <span className={styles.title}>{projectTitle}</span>
          <br />
          <span className={styles.description}>{projectDescription}</span>
        </p>  
      </div>
    </div>
  )
}