import Link from 'next/link';
import Image from 'next/image';

export default function ProjectCard({ projectKey }) {
    return (
        <Link href={`/projects/${projectKey}`}>
            Test
        </Link>
    )
}