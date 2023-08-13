import Link from 'next/link';

import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <div className={styles["navbar-container"]}>
            <Link href="/">Home</Link>
            <Link href="/projects-home">Projects</Link>
            <Link href="/about">About Me</Link>
            <Link href="/blog-home">Blog</Link>
        </div>
    );
}