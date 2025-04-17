import React, { useEffect } from 'react';
import '../css/Animacion.css'; // Importa el CSS (ajusta la ruta)

const SnowAnimation = () => {
  useEffect(() => {
    const createSnowflakes = () => {
      const targetElement = document.body; // o document.getElementById('main-container');
      if (targetElement) {
        for (let i = 0; i < 100; i++) {
          let snowFlake = document.createElement('div');
          snowFlake.className = 'snow';
          snowFlake.style.left = Math.random() * 100 + 'vw';
          snowFlake.style.animationDelay = Math.random() * 5 + 's';
          snowFlake.style.animationDuration = Math.random() * 5 + 5 + 's';
          targetElement.appendChild(snowFlake);
        }
      }
    };

    createSnowflakes();
  }, []); // El array vacío asegura que esto solo se ejecute una vez (al montar el componente)

  return null; // Este componente no renderiza nada visualmente, solo añade la animación
};

export default SnowAnimation;