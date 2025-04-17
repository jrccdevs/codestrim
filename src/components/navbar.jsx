import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css'; // Importa el archivo CSS

function Navbar() {
  const [theme, setTheme] = useState('light');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-theme', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${theme === 'dark' ? 'dark-navbar' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/">Mi App</Link>
        </div>
        <div className="navbar-links-desktop">
          <Link to="/">Inicio</Link>
          <Link to="/acerca">Acerca de</Link>
          <Link to="/servicios">Servicios</Link>
          <button onClick={toggleTheme} className="theme-toggle">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
        <button className="navbar-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      {isMenuOpen && (
        <div className="navbar-links-mobile">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Inicio</Link>
          <Link to="/acerca" onClick={() => setIsMenuOpen(false)}>Acerca de</Link>
          <Link to="/servicios" onClick={() => setIsMenuOpen(false)}>Servicios</Link>
          <button onClick={() => { toggleTheme(); setIsMenuOpen(false); }} className="theme-toggle">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;