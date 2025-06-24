const introProgramacion = {
    id: 'intro-programacion',
    title: '1. Introducción a la Programación',
    content: `
      <p>¡Bienvenido al mundo de la programación! Aquí aprenderás los conceptos básicos que te permitirán comunicarte con las computadoras.</p>
      <h3>¿Qué es la Programación?</h3>
      <p>La programación es el arte de darle instrucciones a una computadora para que realice tareas específicas. Es como escribir una receta, pero para una máquina.</p>
      <h3>¿Por qué Aprender a Programar?</h3>
      <ul>
        <li>Desarrollar pensamiento lógico y resolución de problemas.</li>
        <li>Crear aplicaciones, sitios web, juegos, etc.</li>
        <li>Entender cómo funciona la tecnología que nos rodea.</li>
      </ul>
      <h4>Un poco de Historia</h4>
      <p>El primer programa de computadora se atribuye a Ada Lovelace en el siglo XIX. Desde entonces, el campo ha evolucionado enormemente.</p>
    `,
    definitions: [
      { term: 'Programación', definition: 'El proceso de diseñar, escribir, probar y mantener el código fuente de programas informáticos.' },
      { term: 'Algoritmo', definition: 'Conjunto ordenado y finito de instrucciones o reglas bien definidas que permite solucionar un problema.' },
      { term: 'Código Fuente', definition: 'Conjunto de líneas de texto que son las instrucciones que debe seguir el computador para ejecutar un programa.' },
    ],
    codeExample: `
  // Este es un comentario en JavaScript
  console.log("¡Hola, mundo!"); // Imprime un mensaje en la consola
    `,
    codeOutput: `
  ¡Hola, mundo!
    `,
    solvedExample: {
      title: 'Ejemplo Resuelto: Imprimiendo tu nombre',
      description: 'Vamos a ver cómo usar `console.log` para mostrar un mensaje personalizado en la consola.',
      code: `
  let miNombre = "ChatGPT";
  console.log("¡Hola, " + miNombre + "!");
  // Explicación:
  // 1. 'let miNombre = "ChatGPT";' declara una variable llamada miNombre y le asigna el valor de texto "ChatGPT".
  // 2. 'console.log(...);' es una función que imprime lo que le pasemos entre paréntesis en la consola.
  // 3. Usamos el operador '+' para "concatenar" (unir) cadenas de texto y el valor de la variable.
        `,
      output: `
  ¡Hola, ChatGPT!
        `
    },
    exercise: {
      title: 'Ejercicio Propuesto: Tu primera operación',
      description: 'Utiliza `console.log` para imprimir el resultado de la suma de 5 y 3. ¡Inténtalo por ti mismo!',
      starterCode: `
  // Escribe tu código aquí
  // Debes imprimir el resultado de 5 + 3
        `
    },
    exerciseSolution: {
      code: `
  console.log(5 + 3);
  // Opcional, guardando en una variable:
  // let num1 = 5;
  // let num2 = 3;
  // console.log(num1 + num2);
        `,
      output: `
  8
        `,
      explanation: 'Simplemente sumamos los dos números y pasamos el resultado a `console.log`.'
    },
    quiz: {
      question: '¿Cuál es el propósito principal de `console.log()` en JavaScript?',
      options: [
        'A. Para crear un nuevo archivo.',
        'B. Para ejecutar código en el navegador.',
        'C. Para mostrar mensajes en la consola para depuración o información.',
        'D. Para guardar datos en una base de datos.'
      ],
      correctAnswer: 'C',
      explanation: '`console.log()` es una herramienta fundamental para los desarrolladores para ver valores y mensajes durante la ejecución del programa.'
    }
  };
  
  export default introProgramacion; // ¡Exporta solo esta lección!