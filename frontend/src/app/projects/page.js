import Link from "next/link";
import Image from "next/image";
import getProjects from "../libs/getProjects";

const ProjectsPage = async () => {
    const projects = await getProjects;
    // console.log(projects.data[0].attributes.photo.data[0].attributes.url);
    return (
        <div>
            {projects.data.map(project => {
                console.log(project.attributes.photo.data);
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
                                    <p>{photo.attributes.url}</p>
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
export default ProjectsPage