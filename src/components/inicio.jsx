import React, { useState } from 'react';
import Header from './Header';
import '../css/inicio.css';
import Animacion from './Animancion';
import { Link } from 'react-router-dom'
import ProjectsSection from './ProyectSecction';
import Rea from '../img/react.png';
import Python from '../img/python.png';
import Node from '../img/node.png';
import Js from '../img/js.png';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';

const skills = [
  { name: 'JavaScript', icon: Js, url: '/HomePage', level: 90 },
  { name: 'Python', icon: Python, url: '/Guia-Python', level: 75 },
  { name: 'React.js', icon: Rea, url: '/Lesson', level: 85 },
  { name: 'Node.js', icon: Node, level: 80 }
  
];

const theme = createTheme({
  palette: {
    primary: { main: '#556cd6' },
    secondary: { main: '#19857b' },
    background: { default: '#f4f6f8' },
  },
  typography: { fontFamily: 'Roboto, sans-serif' },
});
export default function Inicio() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  
  return (
    
    <div style={{ width: '100%', margin: 0, padding: 0 }}className={`App ${darkMode ? 'dark' : ''}`}>
      <Animacion />
      <Header onToggleDarkMode={toggleDarkMode} darkMode={darkMode} />
    <div style={{ marginTop: '20px' }}>
      <ProjectsSection ProjectsSection darkMode={darkMode} skills={skills} />
    </div>
    
  </div>
    
  )
}


