import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <h1>Paul{"'"}s Portfolio Website</h1>
      <p>This page is static. It was built on 06/09/2023.</p>
      <p>Adding a new commit to test if it updates</p>
      <p>This is how many clicks: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </>
  );
}
