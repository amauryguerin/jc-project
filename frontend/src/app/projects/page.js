import Link from "next/link";
import Image from "next/image";

const getProjects = async () => {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    return data;
}
const ProjectsPage = async () => {
    const projects = await getProjects();
    console.log(projects);
    return (
        <main>
            <Link href="/">Accueil</Link>
            <Image
                src={projects.message}
                width={500}
                height={500}
                alt="Random dog"
                priority
            />
            <p>Projects page</p>
        </main>
    )
}
export default ProjectsPage