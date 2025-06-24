// src/components/CodeEditor.jsx
import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const CodeEditor = ({ code, output }) => {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6" gutterBottom>
        Ejemplo de Código
      </Typography>
      <Paper elevation={2} sx={{ p: 2, backgroundColor: '#282c34', color: '#abb2bf', borderRadius: 2 }}>
        <pre style={{ margin: 0, overflowX: 'auto', whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
          <code>{code}</code>
        </pre>
      </Paper>

      {output && (
        <>
          <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
            Salida Esperada
          </Typography>
          <Paper elevation={2} sx={{ p: 2, backgroundColor: '#3a3f4a', color: '#ffffff', borderRadius: 2 }}>
            <pre style={{ margin: 0, overflowX: 'auto', whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
              <code>{output}</code>
            </pre>
          </Paper>
        </>
      )}
    </Box>
  );
};

export default CodeEditor;