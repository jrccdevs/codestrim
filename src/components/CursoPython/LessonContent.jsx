// src/components/LessonContent.jsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Box,
  Typography,
  Paper,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  List, ListItem, ListItemText,
} from '@mui/material';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';


function LessonContent({ lesson }) {
  // --- TODOS LOS HOOKS DEBEN IR AQUÍ, AL PRINCIPIO DEL COMPONENTE ---
  const [showSolution, setShowSolution] = useState(false);
  const [quizAnswer, setQuizAnswer] = useState('');
  const [quizFeedback, setQuizFeedback] = useState('');

  const [studentCode, setStudentCode] = useState('');
  const [codeOutput, setCodeOutput] = useState('');
  const iframeRef = useRef(null);

  // Reinicia el estado cuando cambia la lección
  // Este useEffect tiene una dependencia 'lesson' y se ejecutará
  // solo si lesson cambia. Es independiente del renderizado inicial.
  useEffect(() => {
    if (lesson) {
      setStudentCode(lesson.exercise?.starterCode || '');
      setCodeOutput('');
      setShowSolution(false);
      setQuizAnswer('');
      setQuizFeedback('');
    }
  }, [lesson]);

  // Comunicación con el iframe para capturar la salida
  useEffect(() => {
    const handleMessage = (event) => {
      // Opcional: Para mayor seguridad, verifica el origen del mensaje
      // if (event.origin !== window.location.origin) return; // Solo permite mensajes de tu mismo origen

      if (event.data?.type === 'codeOutput') {
        setCodeOutput(event.data.output);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  // Función para ejecutar el código del alumno, envuelta en useCallback
  const runStudentCode = useCallback(() => {
    setCodeOutput('');
    const iframe = iframeRef.current;

    if (!iframe) {
      console.error("Iframe no disponible.");
      return;
    }

    const iframeContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { margin: 0; font-family: monospace; background: black; color: white; }
          pre { white-space: pre-wrap; word-break: break-all; }
        </style>
      </head>
      <body>
        <script>
          let originalConsoleLog = console.log;
          let outputBuffer = [];
          console.log = function(...args) {
            outputBuffer.push(args.map(arg => String(arg)).join(' '));
            originalConsoleLog.apply(console, args);
          };

          try {
            ${studentCode}
          } catch (e) {
            outputBuffer.push("Error: " + e.message);
          } finally {
            window.parent.postMessage({
              type: 'codeOutput',
              output: outputBuffer.join('\\n')
            }, '*'); // Considera usar window.location.origin para mayor seguridad
          }
          console.log = originalConsoleLog;
        </script>
      </body>
      </html>
    `;

    iframe.srcdoc = iframeContent;
  }, [studentCode]); // studentCode es una dependencia para useCallback

  // --- AHORA PUEDES TENER TU LÓGICA CONDICIONAL O RETURN TEMPRANO ---
  if (!lesson) {
    return (
      <Paper sx={{ p: 3, textAlign: 'center' }}>
        <Typography variant="h5">Selecciona una lección para comenzar</Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          Usa el menú lateral para navegar por los temas.
        </Typography>
      </Paper>
    );
  }

  // --- Resto del JSX del componente ---
  const handleQuizSubmit = () => {
    if (quizAnswer === lesson.quiz.correctAnswer) {
      setQuizFeedback('¡Correcto! 🎉');
    } else {
      setQuizFeedback(`Incorrecto. La respuesta correcta es: ${lesson.quiz.correctAnswer} - ${lesson.quiz.explanation}`);
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        {lesson.title}
      </Typography>

      {/* Contenido principal de la lección */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <div dangerouslySetInnerHTML={{ __html: lesson.content }} />
      </Paper>

      {/* Definiciones */}
      {lesson.definitions && lesson.definitions.length > 0 && (
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h5" gutterBottom>
            Conceptos Clave
          </Typography>
          <List dense>
            {lesson.definitions.map((def, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={<Typography component="span" sx={{ fontWeight: 'bold' }}>{def.term}:</Typography>}
                  secondary={def.definition}
                />
              </ListItem>
            ))}
          </List>
        </Paper>
      )}

      {/* Ejemplo de Código */}
      {lesson.codeExample && (
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h5" gutterBottom>
            Ejemplo de Código
          </Typography>
          <CodeMirror
            value={lesson.codeExample}
            height="auto"
            theme="dark"
            extensions={[javascript({ jsx: true })]}
            options={{ readOnly: true }}
            style={{ fontSize: '0.9rem' }}
          />
          {lesson.codeOutput && (
            <Box sx={{ mt: 2, p: 2, bgcolor: 'grey.900', color: 'success.light', borderRadius: 1 }}>
              <Typography variant="subtitle2" sx={{ mb: 1, color: 'grey.400' }}>Salida Esperada:</Typography>
              <pre style={{ margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>{lesson.codeOutput}</pre>
            </Box>
          )}
        </Paper>
      )}

      {/* Ejemplo Resuelto */}
      {lesson.solvedExample && (
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h5" gutterBottom>
            {lesson.solvedExample.title}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {lesson.solvedExample.description}
          </Typography>
          <CodeMirror
            value={lesson.solvedExample.code}
            height="auto"
            theme="dark"
            extensions={[javascript({ jsx: true })]}
            options={{ readOnly: true }}
            style={{ fontSize: '0.9rem' }}
          />
          {lesson.solvedExample.output && (
            <Box sx={{ mt: 2, p: 2, bgcolor: 'grey.900', color: 'success.light', borderRadius: 1 }}>
              <Typography variant="subtitle2" sx={{ mb: 1, color: 'grey.400' }}>Salida:</Typography>
              <pre style={{ margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>{lesson.solvedExample.output}</pre>
            </Box>
          )}
        </Paper>
      )}

      {/* Ejercicio para el Alumno - Con Ejecución */}
      {lesson.exercise && (
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h5" gutterBottom>
            {lesson.exercise.title}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {lesson.exercise.description}
          </Typography>
          <CodeMirror
            value={studentCode}
            height="150px"
            theme="light"
            extensions={[javascript({ jsx: true })]}
            onChange={setStudentCode}
            style={{ fontSize: '0.9rem' }}
          />
          <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={runStudentCode}
            >
              Ejecutar Código
            </Button>
            <Button
              variant="outlined"
              onClick={() => setShowSolution(!showSolution)}
            >
              {showSolution ? 'Ocultar Solución' : 'Mostrar Solución'}
            </Button>
          </Box>

          {codeOutput && (
            <Box sx={{ mt: 3, p: 2, bgcolor: 'primary.dark', color: 'white', borderRadius: 1, boxShadow: 3 }}>
              <Typography variant="subtitle2" sx={{ mb: 1, color: 'info.light' }}>Tu Salida:</Typography>
              <pre style={{ margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>{codeOutput}</pre>
            </Box>
          )}

          {/* Iframe oculto para ejecutar código en sandbox */}
          <iframe
            ref={iframeRef}
            style={{ display: 'none' }}
            sandbox="allow-scripts"
            title="code-sandbox"
          ></iframe>

          {showSolution && lesson.exerciseSolution && (
            <Box sx={{ mt: 3 }}>
              <Typography variant="h6" gutterBottom>
                Solución
              </Typography>
              <CodeMirror
                value={lesson.exerciseSolution.code}
                height="auto"
                theme="dark"
                extensions={[javascript({ jsx: true })]}
                options={{ readOnly: true }}
                style={{ fontSize: '0.9rem' }}
              />
              {lesson.exerciseSolution.output && (
                <Box sx={{ mt: 2, p: 2, bgcolor: 'grey.900', color: 'success.light', borderRadius: 1 }}>
                  <Typography variant="subtitle2" sx={{ mb: 1, color: 'grey.400' }}>Salida Esperada:</Typography>
                  <pre style={{ margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>{lesson.exerciseSolution.output}</pre>
                </Box>
              )}
              {lesson.exerciseSolution.explanation && (
                  <Typography variant="body2" sx={{ mt: 2, fontStyle: 'italic' }}>
                      **Explicación:** {lesson.exerciseSolution.explanation}
                  </Typography>
              )}
            </Box>
          )}
        </Paper>
      )}

      {/* Quiz */}
      {lesson.quiz && (
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h5" gutterBottom>
            Ponte a Prueba: {lesson.quiz.question}
          </Typography>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="quiz-options"
              name="quiz-options"
              value={quizAnswer}
              onChange={(event) => {
                setQuizAnswer(event.target.value);
                setQuizFeedback('');
              }}
            >
              {lesson.quiz.options.map((option, index) => (
                <FormControlLabel
                  key={index}
                  value={option.charAt(0)}
                  control={<Radio />}
                  label={option}
                />
              ))}
            </RadioGroup>
            <Button variant="contained" onClick={handleQuizSubmit} sx={{ mt: 2 }}>
              Verificar Respuesta
            </Button>
            {quizFeedback && (
              <Typography
                variant="body2"
                sx={{
                  mt: 2,
                  fontWeight: 'bold',
                  color: quizFeedback.includes('Correcto') ? 'success.main' : 'error.main'
                }}
              >
                {quizFeedback}
              </Typography>
            )}
          </FormControl>
        </Paper>
      )}
    </Box>
  );
}

export default LessonContent;