import Link from 'next/link';

const HomePage = () => {
    return (
        <div>
            <main>
                <p>Home page</p>
                <Link href="/projects">Projets</Link>
            </main>
        </div>
    )
}

export default HomePage;