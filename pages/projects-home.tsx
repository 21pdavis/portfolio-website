import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";

const mockData = {
  testKey: {
    projectTitle: "Test Project",
    projectDescription: "This is a test project",
    projectImage: "https://via.placeholder.com/569x300"
  }
}

export default function Projects() {
  return (
    <Layout>
      <div style={{ marginTop: "2rem" }}>
        <ProjectCard
          projectKey="testKey"
          projectTitle={mockData.testKey.projectTitle}
          projectDescription={mockData.testKey.projectDescription}
          projectImage={mockData.testKey.projectImage}
        />
      </div>
    </Layout>
  )
}