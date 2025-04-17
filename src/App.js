import React, { useState } from 'react';
import Header from './components/Header.js';
import './App.css'; // Si decides mantener este archivo
import ProjectsSection from './components/ProyectSecction';
import SkillsSecctions from './components/SkillsSection'
import Animacion from './components/Animancion'

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      <Animacion />
      <Header onToggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <ProjectsSection darkMode={darkMode} /> {/* Pasa el prop darkMode */}
     
      {/* Aquí irán las demás secciones */}
    </div>
  );
}

export default App;