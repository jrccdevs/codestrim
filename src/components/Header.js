import React, { useEffect, useRef, useState } from 'react';
import '../css/header.css';
import PerfilLight from '../img/perfil3.png'; // Imagen para modo claro
import PerfilDark from '../img/perfil2.png'; // Imagen para modo oscuro
import Fondo from '../img/fondo.png';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';

function Header({ onToggleDarkMode, darkMode }) {

  const [particles, setParticles] = useState([]);
  const numParticles = 100;
  const particleColor = 'electricblue';
  const animationFrameId = useRef(null);
  const particleGradient = '(135deg, #0f2027, #203a43, #2c5364)';


  useEffect(() => {
    const generateParticles = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const newParticles = Array.from({ length: numParticles }).map((_, i) => {
        const size = Math.random() * 8 + 5;
        const x = Math.random() * screenWidth;
        const y = Math.random() * screenHeight;
        const opacity = Math.random() * 0.6 + 0.4;
        const vx = (Math.random() - 0.5) * 0.5; // Velocidad horizontal aleatoria
        const vy = (Math.random() - 0.5) * 0.5; // Velocidad vertical aleatoria
        
 
        return { id: i, x, y, size, opacity, color: particleColor, vx, vy };
      });
      setParticles(newParticles);
    };

    generateParticles();

    const animateParticles = () => {
      setParticles(prevParticles =>
        prevParticles.map(particle => {
          let newX = particle.x + particle.vx;
          let newY = particle.y + particle.vy;

          // Rebotar en los bordes
          if (newX < 0 || newX > window.innerWidth - particle.size) {
            particle.vx *= -1;
          }
          if (newY < 0 || newY > window.innerHeight - particle.size) {
            particle.vy *= -1;
          }

          return { ...particle, x: newX, y: newY };
        })
      );

      animationFrameId.current = requestAnimationFrame(animateParticles);
    };

    animationFrameId.current = requestAnimationFrame(animateParticles);

    const handleResize = () => {
      generateParticles();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId.current); // Limpiar la animación
    };
  }, [numParticles, particleColor]);


  // Determina qué imagen usar según el modo
  const profileImageSource = darkMode ? PerfilDark : PerfilLight;

  return (
    <header className={`header ${darkMode ? 'header-dark' : ''}`} >
     {particles.map(particle => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            backgroundColor: particleGradient,
            position: 'absolute',
          }}
        ></div>
      ))}
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