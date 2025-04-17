import React from 'react';
import '../css/project-card.css';
import { Link } from "react-router-dom";


function ProjectCard({ project, darkMode }) {
  return (
    <div className={`project-card ${darkMode ? 'dark' : ''}`}>
      <div className="project-image-container">
      <a href={project.url} target="_blank" rel="noopener noreferrer">
          <img src={project.image} alt={project.title} className="project-image" />
        </a>
      </div>
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        {/* Puedes añadir más detalles como tecnologías */}
      </div>
    </div>
  );
}

export default ProjectCard;