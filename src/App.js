import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Inicio from './components/inicio';

import HomePage from './pages/HomePage';


function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      
      <Routes>
        <Route path="/" element={<Inicio darkMode={darkMode}/>} />
        
        <Route path="/HomePage" element={<HomePage darkMode={darkMode}/>} />
        
      </Routes>
    </div>
  );
}

export default App;