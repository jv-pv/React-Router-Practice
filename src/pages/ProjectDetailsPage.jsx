// src/pages/ProjectDetailsPage.jsx

import { useParams, Link } from 'react-router-dom';

function ProjectDetailsPage({projects}) {
  const { projectId } = useParams();
  console.log('projectId -->', projectId);

  const project = projects.find((project) => {
    return project._id === projectId
  })

  console.log(project)

  return (
    <div>
      <h1>Project Details</h1>
      {!project && (
        <>
        <h1>Page not found! Do not type in the URL :(</h1>
        <Link to="/projects">Back</Link>
        </>
      )}

      {project && (
        <>
        <h2>{project.name}</h2>    
        <h3>Tech Stach: {project.technologies}</h3>
        <p>{project.description}</p>
        <Link to="/projects">Back</Link>
        </>
      )}

    </div>
  );
}

export default ProjectDetailsPage;
