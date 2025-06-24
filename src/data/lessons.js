// src/data/lessons.js

const lessones = [
  {
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
    // --- NUEVOS CAMPOS ---
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
  },
  {
    id: 'variables-tipos-datos',
    title: '2. Variables y Tipos de Datos',
    content: `
      <p>Las variables son como cajas donde guardamos información en nuestros programas.</p>
      <h3>Declarando Variables</h3>
      <p>En muchos lenguajes, declaras una variable y le asignas un valor. Por ejemplo:</p>
      <pre><code>let nombre = "Juan"; // Variable de tipo texto (String)
let edad = 25;    // Variable de tipo número (Number)
let esEstudiante = true; // Variable de tipo booleano (Boolean)</code></pre>
      <h3>Tipos de Datos Comunes</h3>
      <ul>
        <li><strong>Strings (Cadenas de Texto):</strong> Texto, como nombres o frases.</li>
        <li><strong>Numbers (Números):</strong> Enteros o decimales.</li>
        <li><strong>Booleans (Booleanos):</strong> Solo dos valores: <code>true</code> o <code>false</code>.</li>
        <li><strong>Arrays (Arreglos):</strong> Listas de elementos.</li>
        <li><strong>Objects (Objetos):</strong> Colecciones de pares clave-valor.</li>
      </ul>
    `,
    definitions: [
        { term: 'Variable', definition: 'Un contenedor para almacenar valores de datos.' },
        { term: 'String', definition: 'Un tipo de dato que representa una secuencia de caracteres (texto).' },
        { term: 'Number', definition: 'Un tipo de dato que representa valores numéricos, incluyendo enteros y flotantes.' },
        { term: 'Boolean', definition: 'Un tipo de dato que solo puede tener dos valores: `true` (verdadero) o `false` (falso).' },
    ],
    codeExample: `
let saludo = "Hola";
let nombreUsuario = "Programador";
let mensaje = saludo + ", " + nombreUsuario + "!";
console.log(mensaje);

let numero1 = 10;
let numero2 = 5;
let suma = numero1 + numero2;
console.log("La suma es: " + suma);
    `,
    codeOutput: `
Hola, Programador!
La suma es: 15
    `,
    solvedExample: {
        title: 'Ejemplo Resuelto: Calculando el área de un rectángulo',
        description: 'Usaremos variables para almacenar las dimensiones y calcular el área.',
        code: `
let ancho = 10;
let alto = 5;
let area = ancho * alto;
console.log("El área del rectángulo es: " + area);
// Explicación:
// 1. Declaramos 'ancho' y 'alto' con valores numéricos.
// 2. Multiplicamos estas variables para obtener el área.
// 3. Imprimimos el resultado usando concatenación de strings.
        `,
        output: `
El área del rectángulo es: 50
        `
    },
    exercise: {
        title: 'Ejercicio Propuesto: Tu edad en 10 años',
        description: 'Crea una variable `miEdad` con tu edad actual y otra variable `futuroAnios` con el valor 10. Luego, calcula e imprime la edad que tendrás en esos años.',
        starterCode: `
let miEdad = 30; // Cambia esto por tu edad
let futuroAnios = 10;
// Escribe tu código aquí para calcular e imprimir tu edad futura
        `
    },
    exerciseSolution: {
        code: `
let miEdad = 30;
let futuroAnios = 10;
let edadFutura = miEdad + futuroAnios;
console.log("En " + futuroAnios + " años, tendré " + edadFutura + " años.");
        `,
        output: `
En 10 años, tendré 40 años.
        `,
        explanation: 'Se suman las dos variables numéricas y se usa `console.log` para mostrar un mensaje descriptivo con el resultado.'
    },
    quiz: {
        question: '¿Qué tipo de dato usarías para almacenar si un usuario está "logueado" o no?',
        options: [
            'A. String',
            'B. Number',
            'C. Boolean',
            'D. Array'
        ],
        correctAnswer: 'C',
        explanation: 'Un Boolean (`true` o `false`) es perfecto para estados de sí/no o activado/desactivado.'
    }
  },
  {
    id: 'condicionales-if-else',
    title: '3. Condicionales: If/Else',
    content: `
      <p>Los condicionales nos permiten tomar decisiones en nuestros programas. Si una condición es verdadera, hacemos algo; si no, hacemos otra cosa.</p>
      <h3>La estructura <code>if</code></h3>
      <p>Es la forma más básica de tomar una decisión.</p>
      <pre><code>if (condicion) {
  // Código que se ejecuta si la condición es verdadera
}</code></pre>
      <h3>La estructura <code>if-else</code></h3>
      <p>Nos permite definir qué hacer si la condición es falsa.</p>
      <pre><code>if (condicion) {
  // Código si es verdadero
} else {
  // Código si es falso
}</code></pre>
      <h3><code>else if</code> para múltiples condiciones</h3>
      <p>Cuando necesitas evaluar varias condiciones.</p>
      <pre><code>if (condicion1) {
  // Código si condicion1 es verdadera
} else if (condicion2) {
  // Código si condicion1 es falsa Y condicion2 es verdadera
} else {
  // Código si ninguna de las anteriores es verdadera
}</code></pre>
    `,
    definitions: [
        { term: 'Condicional', definition: 'Una estructura de control que permite que el programa ejecute diferentes bloques de código según si una condición es verdadera o falsa.' },
        { term: 'Bloque de código', definition: 'Un conjunto de instrucciones agrupadas por llaves `{}`.' },
        { term: 'Operadores de comparación', definition: 'Símbolos como `==`, `===`, `>`, `<`, `>=`, `<=` que se usan para comparar valores y devolver un booleano.' },
    ],
    codeExample: `
let edad = 18;

if (edad >= 18) {
  console.log("Eres mayor de edad.");
} else {
  console.log("Eres menor de edad.");
}

let temperatura = 28;
if (temperatura > 30) {
  console.log("Hace mucho calor.");
} else if (temperatura > 20) {
  console.log("Temperatura agradable.");
} else {
  console.log("Hace frío.");
}
    `,
    codeOutput: `
Eres mayor de edad.
Temperatura agradable.
    `,
    solvedExample: {
        title: 'Ejemplo Resuelto: Determinar si un número es par o impar',
        description: 'Usaremos el operador módulo (`%`) para verificar si un número es divisible por 2.',
        code: `
let numero = 7;
if (numero % 2 === 0) {
  console.log(numero + " es un número par.");
} else {
  console.log(numero + " es un número impar.");
}
// Explicación:
// 1. El operador '%' (módulo) devuelve el resto de una división.
// 2. Si el resto de 'numero / 2' es 0, el número es par.
// 3. Si no, es impar.
        `,
        output: `
7 es un número impar.
        `
    },
    exercise: {
        title: 'Ejercicio Propuesto: Comprobador de Calificaciones',
        description: 'Crea una variable `calificacion` (un número del 0 al 100). Usa `if`/`else if`/`else` para imprimir: "Aprobado" (si >= 70), "Necesita mejorar" (si >= 50 y < 70), o "Reprobado" (si < 50).',
        starterCode: `
let calificacion = 65; // Prueba con diferentes valores (ej: 85, 55, 40)
// Escribe tu código aquí
        `
    },
    exerciseSolution: {
        code: `
let calificacion = 65; // Ejemplo

if (calificacion >= 70) {
  console.log("Aprobado");
} else if (calificacion >= 50) { // Esto implica que es < 70 y >= 50
  console.log("Necesita mejorar");
} else { // Esto implica que es < 50
  console.log("Reprobado");
}
        `,
        output: `
Necesita mejorar
        `,
        explanation: 'Evaluamos las condiciones de calificación en orden descendente. El primer `if` o `else if` cuya condición sea verdadera ejecutará su bloque de código.'
    },
    quiz: {
        question: '¿Cuál de las siguientes condiciones es verdadera si `x` es igual a 10?',
        options: [
            'A. `x < 10`',
            'B. `x === "10"`',
            'C. `x >= 10`',
            'D. `x !== 10`'
        ],
        correctAnswer: 'C',
        explanation: '`x >= 10` (x es mayor o igual a 10) es la única condición verdadera cuando x es 10. `x === "10"` sería falso porque compara el tipo de dato también (número vs. string).'
    }
  }
];

export default lessones;