// src/data/lessons/funciones.js

const funciones = {
    id: 'funciones',
    title: '4. Funciones: Bloques de Código Reutilizables',
    content: `
      <p>Las funciones son bloques de código diseñados para realizar una tarea específica. Nos permiten organizar nuestro código, hacerlo más legible y reutilizable.</p>
      <h3>Declarando una Función</h3>
      <p>En JavaScript, puedes declarar una función usando la palabra clave <code>function</code>:</p>
      <pre><code>function saludar() {
    console.log("¡Hola, mundo!");
  }</code></pre>
      <h3>Llamando (Ejecutando) una Función</h3>
      <p>Para que una función haga su trabajo, debes "llamada" o "invocarla":</p>
      <pre><code>saludar(); // Esto ejecutará el código dentro de la función saludar</code></pre>
      <h3>Funciones con Parámetros</h3>
      <p>Las funciones pueden aceptar entradas, llamadas **parámetros**, para hacerlas más flexibles:</p>
      <pre><code>function saludarA(nombre) {
    console.log("¡Hola, " + nombre + "!");
  }
  saludarA("Juan"); // Esto imprimirá "¡Hola, Juan!"</code></pre>
      <h3>Funciones que Devuelven un Valor</h3>
      <p>Las funciones también pueden producir una salida usando la palabra clave <code>return</code>:</p>
      <pre><code>function sumar(a, b) {
    return a + b;
  }
  let resultado = sumar(5, 3); // resultado será 8
  console.log(resultado);</code></pre>
    `,
    definitions: [
      { term: 'Función', definition: 'Un bloque de código con nombre que se puede definir una vez y ejecutar varias veces. Sirve para encapsular lógica y promover la reutilización.' },
      { term: 'Parámetro', definition: 'Un marcador de posición nombrado dentro de la definición de una función que representa un valor que se espera que la función reciba.' },
      { term: 'Argumento', definition: 'El valor real que se pasa a una función cuando se llama.' },
      { term: 'Return', definition: 'Una palabra clave que especifica el valor que una función debe devolver como su resultado. También finaliza la ejecución de la función.' },
    ],
    codeExample: `
  function obtenerDoble(numero) {
    return numero * 2;
  }
  
  let miNumero = 7;
  let doble = obtenerDoble(miNumero);
  console.log("El doble de " + miNumero + " es: " + doble);
  
  function decirGracias(persona) {
    console.log("Gracias, " + persona + " por tu ayuda!");
  }
  decirGracias("María");
    `,
    codeOutput: `
  El doble de 7 es: 14
  Gracias, María por tu ayuda!
    `,
    solvedExample: {
      title: 'Ejemplo Resuelto: Calcular el promedio de tres números',
      description: 'Crearemos una función que tome tres números y devuelva su promedio.',
      code: `
  function calcularPromedio(num1, num2, num3) {
    let suma = num1 + num2 + num3;
    let promedio = suma / 3;
    return promedio;
  }
  
  let p1 = calcularPromedio(10, 20, 30);
  console.log("El promedio es: " + p1);
  
  let p2 = calcularPromedio(5, 5, 5);
  console.log("El promedio es: " + p2);
      `,
      output: `
  El promedio es: 20
  El promedio es: 5
      `,
      explanation: 'La función `calcularPromedio` suma los tres parámetros y luego divide el resultado por 3, devolviendo el promedio. Demostramos su uso con diferentes argumentos.'
    },
    exercise: {
      title: 'Ejercicio Propuesto: Función de saludo personalizado',
      description: 'Crea una función llamada `saludarUsuario` que reciba un `nombre` como parámetro y use `console.log` para imprimir "Hola, [nombre]! ¡Bienvenido!". Luego, llama a la función con tu propio nombre.',
      starterCode: `
  // Define tu función saludarUsuario aquí:
  
  // Llama a tu función aquí:
  // saludarUsuario("TuNombre");
      `
    },
    exerciseSolution: {
      code: `
  function saludarUsuario(nombre) {
    console.log("Hola, " + nombre + "! ¡Bienvenido!");
  }
  
  saludarUsuario("Ana");
  saludarUsuario("Pedro");
      `,
      output: `
  Hola, Ana! ¡Bienvenido!
  Hola, Pedro! ¡Bienvenido!
      `,
      explanation: 'La función `saludarUsuario` toma un parámetro `nombre` y lo concatena con una cadena de texto para formar un mensaje personalizado que se imprime en la consola.'
    },
    quiz: {
      question: '¿Cuál es el propósito de la palabra clave `return` en una función?',
      options: [
        'A. Para imprimir un mensaje en la consola.',
        'B. Para declarar una nueva variable dentro de la función.',
        'C. Para enviar un valor de vuelta al lugar donde se llamó la función.',
        'D. Para detener la ejecución del programa completo.'
      ],
      correctAnswer: 'C',
      explanation: '`return` permite que una función "devuelva" un resultado que puede ser utilizado por el código que la llamó, y también finaliza la ejecución de la función.'
    }
  };
  
  export default funciones;