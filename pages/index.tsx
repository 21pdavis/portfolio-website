import Head from 'next/head'
import Image from 'next/image'
import { GetStaticProps } from 'next'

import Layout, { siteTitle } from '../components/Layout'
import Socials from '../components/Socials'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      {/* Info banner at top of page with profile picture, bio, and socials links */}
      <section className={styles.container}>
        <div className={styles.header}>
          <Image
            priority
            src="/images/profile_picture.png"
            className={styles["border-circle"]}
            width={500}
            height={500}
            alt="Profle Picture"
          />
          <div className={styles["bio-container"]}>
            <h1>
              Paul Davis
            </h1>
            <p>
              I'm an Honors Computer Science and Mathematics student at UMass Amherst looking to jump-start a career in game development.
              <br /> <br />
              Welcome to my Portfolio! Take a look around.
            </p>
            <div style={{marginTop: "1rem"}}>
              <Socials />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
