import React, { useState, useRef, useEffect } from 'react';
import '../css/Tutorial.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

function SingleTutorial() {
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [userCode, setUserCode] = useState('');
  const [output, setOutput] = useState('');
  const [showSolution, setShowSolution] = useState(false);
  const [completionMessage, setCompletionMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // Nuevo estado para el mensaje de error
  const outputRef = useRef(null);

  const lessons = [
    {
      title: 'Introducción a JavaScript',
      description: 'Esta es la primera lección sobre JavaScript. Aprenderás a imprimir texto en la consola.',
      example: '// Escribe tu primer código aquí\nconsole.log("¡Hola, mundo!");',
      solution: 'console.log("¡Hola, mundo!");',
      solutionOutput: 'Hola, mundo!\n',
      language: 'javascript',
    },
    {
      title: 'Variables y Tipos de Datos',
      description: 'En esta lección aprenderás sobre variables y los tipos de datos básicos en JavaScript: string, number y boolean.',
      example: 'let nombre = "TuNombre";\nlet edad = 30;\nlet esMayor = true;\n\n// Imprime el valor de las variables',
      solution: 'let nombre = "TuNombre";\nlet edad = 30;\nlet esMayor = true;\nconsole.log(nombre);\nconsole.log(edad);\nconsole.log(esMayor);',
      solutionOutput: 'TuNombre\n30\ntrue\n',
      language: 'javascript',
    },
    // Agrega más lecciones aquí...
  ];

  const currentLesson = lessons[currentLessonIndex];
  const totalLessons = lessons.length;

  const handleNextLesson = () => {
    if (currentLessonIndex < totalLessons - 1) {
      setCurrentLessonIndex(currentLessonIndex + 1);
      setUserCode('');
      setOutput('');
      setShowSolution(false);
      setCompletionMessage('');
      setErrorMessage(''); // Limpiar el mensaje de error
    } else {
      setCompletionMessage('¡Has completado todas las lecciones!');
      setErrorMessage(''); // Limpiar el mensaje de error
    }
  };

  const handlePrevLesson = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(currentLessonIndex - 1);
      setUserCode('');
      setOutput('');
      setShowSolution(false);
      setCompletionMessage('');
      setErrorMessage(''); // Limpiar el mensaje de error
    }
  };

  const handleCodeChange = (event) => {
    setUserCode(event.target.value);
  };

  const handleRunCode = () => {
    const originalConsoleLog = console.log;
    let consoleOutput = '';
    console.log = (...args) => {
      consoleOutput += args.join(' ') + '\n';
      originalConsoleLog(...args);
    };

    try {
      const result = eval(userCode);
      setOutput(consoleOutput + (result !== undefined ? String(result) : ''));
      setErrorMessage(''); // Limpiar el mensaje de error si la ejecución es exitosa
      const trimmedUserCode = userCode.trim();
      const trimmedSolution = currentLesson.solution.trim();
      console.log('trimmedUserCode:', trimmedUserCode);
      console.log('trimmedSolution:', trimmedSolution);
      console.log('¿Son iguales?:', trimmedUserCode === trimmedSolution);
      if (userCode.trim() === currentLesson.solution.trim()) {
        setCompletionMessage('¡Lección completada!');
        setTimeout(handleNextLesson, 2000);
      } else {
        setCompletionMessage('');
      }
    } catch (error) {
      setOutput(consoleOutput + `Error: ${error.message}`);
      setCompletionMessage('');
      setErrorMessage(`Error de sintaxis:( ${error.message}`); // Establecer el mensaje de error
      setTimeout(() => setErrorMessage(''), 3000); // Ocultar el mensaje después de 3 segundos
    } finally {
      console.log = originalConsoleLog;
    }
  };

  const handleShowSolution = () => {
    setShowSolution(true);
    setOutput(currentLesson.solutionOutput || '');
    setErrorMessage(''); // Limpiar el mensaje de error al mostrar la solución
  };

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  return (
    <div className="single-tutorial-container">
      <h1>Tutorial de JavaScript</h1>
      <h1>Sigue las instrucciones correctamente :)</h1>
      <div className="lesson-navigation">
        <button onClick={handlePrevLesson} disabled={currentLessonIndex === 0}>
          Anterior
        </button>
        <span>Lección {currentLessonIndex + 1} de {totalLessons}</span>
        <button onClick={handleNextLesson} disabled={currentLessonIndex === totalLessons - 1}>
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
            <pre ref={outputRef}>{output}</pre>
          </div>
        )}

        {currentLesson.solution && !showSolution && (
          <button onClick={handleShowSolution}>Mostrar Solución</button>
        )}

        {showSolution && currentLesson.solution && (
          <div className="solution-area">
            <h3>Solución:</h3>
            <SyntaxHighlighter language={currentLesson.language} style={dracula}>
              {currentLesson.solution}
            </SyntaxHighlighter>
          </div>
        )}
      </div>

      {completionMessage && (
        <div className="completion-message">
          {completionMessage}
        </div>
      )}

      {errorMessage && (
        <div className="error-message">
          {errorMessage}
        </div>
      )}
    </div>
  );
}

export default SingleTutorial;