import Link from "next/link";
import Image from "next/image";
import getProjects from "../libs/getProjects";

const ProjectsPage = async () => {
    const projects = await getProjects;
    return (
        <div>
            {projects.data.map(project => {
                return (
                    <div key={project.id}>
                        <p key={project.id}>{project.attributes.name}</p>
                        <Link href={'/projects/' + project.attributes.slug}>{project.attributes.slug}</Link>
                        {project.attributes.photo.data.map(photo => {
                            return (
                                <div key={photo.id}>
                                    <Image
                                        key={photo.id}
                                        src={"http://localhost:1337" + photo.attributes.url}
                                        width={500}
                                        height={500}
                                        alt="Random dog"
                                        priority
                                    />
                                </div>
                            )

                        })}
                    </div>
                )
            })}
            <p>Projects page</p>
        </div>
    )
}
export default ProjectsPage;