import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";

import { getAllEntries } from "../utils/contentful-api-utils";

interface Entry {
  title: string;
  description: string;
  backgroundImage: string;
  key: string;
}

function mapEntry(entry: any) {
  return {
    title: entry.fields.title as string,
    description: entry.fields.description as string,
    backgroundImage: (entry.fields.backgroundImage as any).fields.file.url as string,
    key: entry.fields.key as string,
  };
}

export async function getServerSideProps() {
  const entries = await getAllEntries();
  console.log(`entries are ${JSON.stringify(entries, null, 2)}`);

  // extract the url for the background image
  const mappedEntries: Entry[] = entries.map(entry => mapEntry(entry));

  return  { 
    props: {
      entries: mappedEntries
    }
   };
}

type ProjectsProps = { entries: Entry[] };
export default function Projects({ entries }: ProjectsProps) {
  return entries.map(entry => (
    <Layout>
      <div style={{ marginTop: "2rem" }}>
        <ProjectCard title={entry.title} description={entry.description} backgroundImage={entry.backgroundImage} />
      </div>
    </Layout>
  ))
}