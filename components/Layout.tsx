import Head from 'next/head'

import Navbar from './Navbar'
// import Footer from './Footer'

import styles from './Layout.module.css'

export const siteTitle = 'Paul Davis\'s Portfolio'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <Head>
      </Head>
      <Navbar />
      {/* Do I need a footer? */}
      {/* <Footer /> */} 
      <main>
        {children}
      </main>
    </div>
  )
}
