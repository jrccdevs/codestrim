import React, { useState } from 'react';
import Header from './Header';
import '../css/inicio.css';


function Inicio() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      <Header onToggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      {/* Aquí irán las demás secciones */}
      <h3 className="inicio-titulo">HOLA ESTAMOS EN LA PAGINA DE INICIO</h3>
      
    </div>
   
  );
}

export default Inicio;
