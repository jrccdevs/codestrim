// src/components/DynamicBanner.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import { keyframes } from '@emotion/react';
import backgroundImage from '../../img/banner_javascript.png'; // Importa la imagen

// Define una animación CSS usando keyframes de @emotion/react
const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const textShadowAnimation = keyframes`
  0% { text-shadow: 0 0 5px rgba(255,255,255,0.7); }
  50% { text-shadow: 0 0 20px rgba(255,255,255,1), 0 0 30px rgba(255,255,255,0.8); }
  100% { text-shadow: 0 0 5px rgba(255,255,255,0.7); }
`;

const DynamicBanner = () => {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: { xs: '200px', sm: '300px' }, // Altura responsiva
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'white',
        padding: { xs: 2, sm: 4 },
        boxSizing: 'border-box',
        // Estilos de la imagen de fondo
        backgroundImage: `url(${backgroundImage})`, // Usa la imagen importada
        backgroundSize: 'cover', // Cubre todo el espacio del Box
        backgroundRepeat: 'no-repeat', // Evita que la imagen se repita
        backgroundPosition: 'center', // Centra la imagen
        // Overlap para el degradado animado (opcional, para oscurecer la imagen y mejorar el texto)
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(270deg, rgba(106, 17, 203, 0.7), rgba(37, 117, 252, 0.7), rgba(106, 17, 203, 0.7))',
          backgroundSize: '200% 200%',
          animation: `${gradientAnimation} 10s ease infinite`,
          opacity: 0.6, // Ajusta la opacidad del degradado
        },
        position: 'relative', // Necesario para que el ::before se posicione correctamente
        borderRadius: 2, // Bordes ligeramente redondeados
        boxShadow: '0 8px 16px rgba(0,0,0,0.3)', // Sombra para darle profundidad
        mb: 4, // Margen inferior para separarlo del contenido
        zIndex: 1, // Asegura que el texto esté por encima del ::before
      }}
    >
      <Typography
        variant="h3"
        component="h1"
        sx={{
          fontWeight: 'bold',
          mb: 1,
          animation: `${textShadowAnimation} 3s ease infinite`,
          fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
          zIndex: 2, // Asegura que el texto esté por encima del ::before
        }}
      >
        ¡Domina Javascript!
      </Typography>
      <Typography
        variant="h6"
        sx={{
          maxWidth: '800px',
          opacity: 0.9,
          fontSize: { xs: '1rem', sm: '1.25rem' },
          zIndex: 2, // Asegura que el texto esté por encima del ::before
        }}
      >
        Aprende, practica y construye con nuestros tutoriales interactivos y dinámicos.
      </Typography>
    </Box>
  );
};

export default DynamicBanner;