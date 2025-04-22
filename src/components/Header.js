import React from 'react';
import '../css/header.css';
import PerfilLight from '../img/perfil3.png'; // Imagen para modo claro
import PerfilDark from '../img/perfil2.png'; // Imagen para modo oscuro
import Fondo from '../img/fondo.png';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';

function Header({ onToggleDarkMode, darkMode }) {
  // Determina qué imagen usar según el modo
  const profileImageSource = darkMode ? PerfilDark : PerfilLight;

  return (
    <header className={`header ${darkMode ? 'header-dark' : ''}`}>
       <img
        src={Fondo}
        alt="fondo"
        className="header-background-image"
      />
      <img src={profileImageSource} alt="Tu foto de perfil" className="profile-image" />
      <div className="intro">
        <h1>Hi, I'm Julio</h1>
        <h2>Fullstack Developer</h2>
        <p>Driving digital transformation in education by creating innovative, intuitive, and efficient web applications, specializing in front- and back-end solutions that facilitate access to knowledge and enrich learning experiences in the digital age.</p>
        <div>
          
          <div className="dark-mode-toggle-container">
            <input
              type="checkbox"
              id="dark-mode-toggle"
              className="dark-mode-toggle-input"
              checked={darkMode}
              onChange={onToggleDarkMode}
            />
            <label
              htmlFor="dark-mode-toggle"
              className="dark-mode-toggle-label"
              data-mode={darkMode ? 'dark' : 'light'}
            >
              <span className="dark-mode-toggle-icons">
                <BsSunFill color={darkMode ? '#ffeb3b' : '#333'} />
                <BsMoonFill color={darkMode ? '#333' : '#f5f5f5'} />
              </span>
            </label>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;