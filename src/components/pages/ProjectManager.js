import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faSyncAlt } from '@fortawesome/free-solid-svg-icons';

function ProjectManager() {
  const [projects, setProjects] = useState([
    { name: 'React Dashboard', status: 'In Progress', path: '/projects/react-dashboard' },
    { name: 'Portfolio', status: 'Completed', path: 'https://mgcinindlovu.github.io/Portfolio/' },
    { name: 'shoptacle', status: 'Completed', path: 'https://mgcinindlovu.github.io/shoptacle/' },
    { name: 'peacock-selective', status: 'Completed', path: 'https://mgcinindlovu.github.io/peacock-selective/' },
    { name: 'coworkspace', status: 'Completed', path: 'https://mgcinindlovu.github.io/coworkspace/' },
    { name: 'carwebsite', status: 'Completed', path: 'https://mgcinindlovu.github.io/carwebsite/' },
    { name: 'calculator', status: 'Completed', path: 'https://mgcinindlovu.github.io/Calculator/' },
  ]);

  const toggleStatus = (index) => {
    const updatedProjects = [...projects];
    updatedProjects[index].status =
      updatedProjects[index].status === 'In Progress' ? 'Completed' : 'In Progress';
    setProjects(updatedProjects);
  };

  const navigateToProject = (path) => {
    window.location.href = path;
  };

  return (
    <div className="project-manager">
      <h2>Project Manager</h2>
      <div className="project-cards">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.name}</h3>
            <p>Status: {project.status}</p>
            <div className="button-container">
              <button onClick={() => navigateToProject(project.path)}>
                <FontAwesomeIcon icon={faEye} /> View Project
              </button>
              <button onClick={() => toggleStatus(index)}>
                <FontAwesomeIcon icon={faSyncAlt} /> Toggle Status
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectManager;