import React, { useState } from 'react';
import '../css/Tutorial.css'; // Archivo de estilos específico para este componente
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

function SingleTutorial() {
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [userCode, setUserCode] = useState('');
  const [output, setOutput] = useState('');
  const [showSolution, setShowSolution] = useState(false);

  // Datos de las lecciones directamente en el componente
  const lessons = [
    {
      title: 'Introducción a JavaScript',
      description: 'Esta es la primera lección sobre JavaScript. Aprenderás a imprimir texto en la consola.',
      example: '// Escribe tu primer código aquí\nconsole.log("¡Hola, mundo!");',
      solution: 'console.log("¡Hola, mundo!");',
      language: 'javascript',
    },
    {
      title: 'Variables y Tipos de Datos',
      description: 'En esta lección aprenderás sobre variables y los tipos de datos básicos en JavaScript: string, number y boolean.',
      example: 'let nombre = "TuNombre";\nlet edad = 30;\nlet esMayor = true;\n\n// Imprime el valor de las variables',
      solution: 'let nombre = "TuNombre";\nlet edad = 30;\nlet esMayor = true;\nconsole.log(nombre);\nconsole.log(edad);\nconsole.log(esMayor);',
      language: 'javascript',
    },
    // Agrega más lecciones aquí...
  ];

  const currentLesson = lessons[currentLessonIndex];

  const handleNextLesson = () => {
    if (currentLessonIndex < lessons.length - 1) {
      setCurrentLessonIndex(currentLessonIndex + 1);
      setUserCode('');
      setOutput('');
      setShowSolution(false);
    } else {
      alert('¡Has completado todas las lecciones!');
    }
  };

  const handlePrevLesson = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(currentLessonIndex - 1);
      setUserCode('');
      setOutput('');
      setShowSolution(false);
    }
  };

  const handleCodeChange = (event) => {
    setUserCode(event.target.value);
  };

  const handleRunCode = () => {
    try {
      // ¡Advertencia! 'eval()' puede ser peligroso. Considera alternativas seguras.
      const result = eval(userCode);
      setOutput(String(result));
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };

  const handleShowSolution = () => {
    setShowSolution(true);
  };

  return (
    <div className="single-tutorial-container">
      <h1>Tutorial de JavaScript</h1> {/* Puedes hardcodear el lenguaje aquí */}
      <div className="lesson-navigation">
        <button onClick={handlePrevLesson} disabled={currentLessonIndex === 0}>
          Anterior
        </button>
        <span>Lección {currentLessonIndex + 1} de {lessons.length}</span>
        <button onClick={handleNextLesson} disabled={currentLessonIndex === lessons.length - 1}>
          Siguiente
        </button>
      </div>

      <div className="lesson-content">
        <h2 className="title">{currentLesson.title}</h2>
        <p>{currentLesson.description}</p>

        {currentLesson.example && (
          <div className="code-editor">
            <textarea
              value={userCode}
              onChange={handleCodeChange}
              placeholder={currentLesson.example}
            />
            <button onClick={handleRunCode}>Ejecutar</button>
          </div>
        )}

        {output && (
          <div className="output-area">
            <h3>Resultado:</h3>
            <pre>{output}</pre>
          </div>
        )}

        {currentLesson.solution && !showSolution && (
          <button onClick={handleShowSolution}>Mostrar Solución</button>
        )}

        {showSolution && currentLesson.solution && (
          <div className="solution-area">
            <h3>Solución:</h3>
            <SyntaxHighlighter language={currentLesson.language} >
              {currentLesson.solution}
            </SyntaxHighlighter>
          </div>
        )}
      </div>
    </div>
  );
}

export default SingleTutorial;