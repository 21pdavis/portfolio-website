import Image from 'next/image'
import styles from './styles/page.module.css'

export default function Home() {
  return (
    <>
      <h1>Hi Mom!</h1>
      <p>This page is static. It was built on 06/09/2023.</p>
      <p>
        <a href="/ssr">View a server-side rendered page.</a>
      </p>
    </>
  );
}
