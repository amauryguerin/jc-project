import Link from 'next/link';

const HomePage = () => {
    return (
        <main>
            <p>Home page</p>
            <Link href="/projects">Projets</Link>
        </main>
    )
}

export default HomePage;