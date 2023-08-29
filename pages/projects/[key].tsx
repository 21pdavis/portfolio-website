import Head from "next/head";

import Layout from "../../components/Layout";

export async function getServerSideProps(context) {
  const { key } = context.query; // slug will be Contentful key

  // TODO: data

  // console.log(`id: ${key}`)
  return {
    props: {
      title: key,
    }
  }
}

type ProjectPageProps = {
  title: string
}

export default function ProjectPage({ title }: ProjectPageProps) {
  return (
    <Layout>
      <div>
        <Head>
          <title>{title}</title>
        </Head>
        <h1>{title}</h1>
      </div>
    </Layout>
  )
}