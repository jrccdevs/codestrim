// src/data/lessons/index.js

import introProgramacion from './lessons/introProgramacion';
import variablesTiposDatos from './lessons/variablesTiposDatos';
import condicionalesIfElse from './lessons/condicionalesIfElse';
import funciones from './lessons/funciones'; // <-- Nueva importación
import arrays from './lessons/arrays';       // <-- Nueva importación
import objetos from './lessons/objetos';     // <-- Nueva importación
import domManipulacion from './lessons/domManipulacion'; // <-- Nueva importación

import arraysPython from './python/arrays';
const lessons = [
  introProgramacion,
  variablesTiposDatos,
  condicionalesIfElse,
  funciones,          // <-- Añadir al array
  arrays,             // <-- Añadir al array
  objetos,            // <-- Añadir al array
  domManipulacion,    // <-- Añadir al array
];

const lessonsPython = [
  arraysPython
];

export {lessons, lessonsPython};
