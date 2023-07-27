import Image from 'next/image';

import Github from '../public/icons/github.svg';
import LinkedIn from '../public/icons/linkedin.svg';
import ItchIO from '../public/icons/itchio.svg';
import Instagram from '../public/icons/instagram.svg';

import styles from './Socials.module.css';

export default function Socials() {
  return (
    <div className={styles.container}>
      <a href="https://github.com/21pdavis/" target="_blank" rel="noopener noreferrer">
        <Image
          src={Github}
          title="My Github"
          alt="My Github"
          width={0}
          height={0}
          style={{ width: '4rem', height: 'auto' }}
        />
      </a>
      
      <a href="https://www.linkedin.com/in/paul-c-davis/" target="_blank" rel="noopener noreferrer">
        <Image
          src={LinkedIn}
          title="My LinkedIn"
          alt="My LinkedIn"
          width={0}
          height={0}
          style={{ width: '4rem', height: 'auto' }}
        />
      </a>

      <a href="https://21pdavis.itch.io/" target="_blank" rel="noopener noreferrer">
        <Image
          src={ItchIO}
          title="My Itch.io"
          alt="My Itch.io"
          width={0}
          height={0}
          style={{ width: '4rem', height: 'auto' }}
        />
      </a>
      
      <a href="https://www.instagram.com/pauldavis135/" target="_blank" rel="noopener noreferrer">
        <Image
          src={Instagram}
          title="My Instagram"
          alt="My Instagram"
          width={0}
          height={0}
          style={{ width: '4rem', height: 'auto' }}
        />
      </a>
    </div>
  )
}