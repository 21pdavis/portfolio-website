import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <Layout>
      <div style={{ marginTop: "2rem" }}>
        <ProjectCard projectKey="testKey"/>
      </div>
    </Layout>
  )
}