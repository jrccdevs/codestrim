import React,{ useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import '../css/SkillsSection.css'; // Archivo CSS para estilos
import Rea from '../img/react.png'
import Python from '../img/python.png'
import Node from '../img/node.png'
import Js from '../img/js.png'
import Tutorial from './Tutorial'
import Modal from './Modal'
import Lesson from '../pages/HomePage'


  const skills = [
    { name: 'JavaScript', icon: Js, description: 'Lenguaje fundamental para el desarrollo web...', level: 90, url: Tutorial },
    { name: 'React.js', icon: Rea, description: 'Librería para construir interfaces de usuario...', level: 85, url: Lesson },
    { name: 'Node.js', icon: Node, description: 'Entorno de ejecución para JavaScript en el servidor...', level: 80 },
    { name: 'Python', icon: Python, description: 'Lenguaje versátil para desarrollo web, ciencia de datos...', level: 75 },
 //   { name: 'HTML5', icon: 'html5.svg', description: 'Lenguaje de marcado para la estructura web...', level: 95 },
   // { name: 'CSS3', icon: 'css3.svg', description: 'Lenguaje de estilos para la presentación web...', level: 90 },
    // ... Agrega más lenguajes
  ];
  function SkillsSection  ({ darkMode }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(false);

  const openModal = (skill) => {
    setSelectedSkill(skill);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSkill(null);
  };
  return (
    <section id="skills" className={`skills-section ${darkMode ? 'dark' : ''}`}>
    
    <div className="skills-grid">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} onOpenModal={openModal} />
        ))}
      </div>
      {selectedSkill && selectedSkill.url && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          {/* Renderiza el componente del tutorial dinámicamente */}
          {React.createElement(selectedSkill.url)}
        </Modal>
      )}
    </section>
  );
};

const SkillCard = ({ skill, onOpenModal }) => {
  return (
    
    <div className="skill-card">
      <div className="skill-icon">
        <img src={skill.icon} onClick={() => onOpenModal(skill)} style={{ cursor: 'pointer' }} alt={skill.name} />
       
      </div>
      <div className="skill-details">
        <h3>{skill.name}</h3>
        <p>{skill.description}</p>
        <div className="skill-level">
          <div className="skill-level-bar" style={{ width: `${skill.level}%` }}></div>
        </div>
      </div>
      
    </div>
    
  );
};

export default SkillsSection;