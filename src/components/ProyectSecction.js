import React from 'react';
import '../css/projects-section.css';
import ProjectCard from './ProyectCard';
import SkillsSecction from './SkillsSection';
import Contacto from './Contacto'
import Animacion from './Animancion'
import Banner from '../img/alfa.png'
import Banner2 from '../img/banner1.jpg';
import Banner1 from '../img/triton.png'

// Datos de ejemplo de los proyectos (puedes mover esto a un archivo separado)
const projectsData = [
  {
    title: 'Web-Commerce Platform',
    description: 'An essential digital platform designed to transparently and professionally communicate the companys identity, products, research, and commitment to health. It serves as an informational hub for a variety of audiences, including healthcare professionals, patients, investors, business partners, and the general public.',
    image: Banner, // Reemplaza con la ruta de tu imagen
    url: 'https://boliviandcode.vercel.app/'
  },
  {
    title: 'Military Clothing web Platform',
    description: 'A specialized digital platform designed to showcase and communicate a companys capabilities in the production of high-quality tactical clothing and military uniforms. Its primary objective is to connect with key clients such as government defense agencies, armed forces, law enforcement agencies, military contractors, and specialized distributors.',
    image: Banner1, // Reemplaza con la ruta de tu imagen
    url : 'https://triton-blue.vercel.app/'
  },
  {
    title: 'Integrated Process System',
    description: 'Integrated Process System is an informative and persuasive digital platform designed to clearly and concisely communicate the benefits, features, and value proposition of a technological solution that seeks to optimize and centralize the management of an organizations workflows and operations.',
    image: Banner2, // Reemplaza con la ruta de tu imagen
    url: '/'
  },
  // Puedes añadir más proyectos aquí
];

function ProjectsSection({ darkMode }) {
    return (
      <>
      <Animacion />
      <section className={`projects-section ${darkMode ? 'dark' : ''}`}>
        <h2>Featured Projects</h2>
        <div className="projects-container">
          {projectsData.map((project, index) => (
          
            <ProjectCard key={index} project={project} darkMode={darkMode} />
            
          ))}
          
        </div>
      </section>
      <section className={`projects-section ${darkMode ? 'dark' : ''}`}>
        <h2>Skills</h2>
        <div className="projects-containers">
 
            <SkillsSecction darkMode={darkMode} />
 
        </div>
      </section>

      <section className={`projects-section ${darkMode ? 'dark' : ''}`}>
        <h2>Contact</h2>
        <div className="pro-containers">
 
            <Contacto darkMode={darkMode} />
 
        </div>
      </section>
      
      </>
    );
  }
export default ProjectsSection;