import getProjectBySlug from "@/app/libs/getProjectBySlug";

const ProjectBySlugPage = async ({params}) => {
    const projectBySlug = await getProjectBySlug(params.slug);

    if (!projectBySlug) {
        return (
            <div>
                <h1>Aucun projet trouvé avec le slug {params.slug}</h1>
            </div>
        );
    }
    return (
        <div>
            <h1>Projet : {projectBySlug.attributes.name}</h1>
            <p>Description : {projectBySlug.attributes.description}</p>
        </div>
    );
};

export default ProjectBySlugPage;