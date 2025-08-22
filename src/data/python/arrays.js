// src/data/lessons/arrays.js

const arrays = {
    id: 'arrays',
    title: '1. Introduccion a Python: Listas de Elementos',
    content: `
      <p>Un **array** (o arreglo, o lista) es un tipo de dato que te permite almacenar una colección ordenada de elementos. Cada elemento en un array tiene un **índice** numérico, que comienza desde 0.</p>
      <h3>Creando Arrays</h3>
      <p>Puedes crear un array usando corchetes <code>[]</code> y separando los elementos con comas:</p>
      <pre><code>let frutas = ["manzana", "banana", "cereza"];
  let numeros = [1, 2, 3, 4, 5];
  let mixto = ["texto", 123, true];</code></pre>
      <h3>Accediendo a Elementos</h3>
      <p>Accedes a los elementos de un array usando su índice:</p>
      <pre><code>let primeraFruta = frutas[0]; // "manzana"
  let segundoNumero = numeros[1]; // 2</code></pre>
      <p>Recuerda que el primer elemento está en el índice 0.</p>
      <h3>Modificando Elementos</h3>
      <p>Puedes cambiar un elemento en un índice específico:</p>
      <pre><code>frutas[1] = "kiwi"; // frutas ahora es ["manzana", "kiwi", "cereza"]</code></pre>
      <h3>Propiedad <code>length</code></h3>
      <p>La propiedad <code>.length</code> te dice cuántos elementos tiene un array:</p>
      <pre><code>let cantidadFrutas = frutas.length; // 3</code></pre>
      <h3>Añadir y Eliminar Elementos</h3>
      <ul>
        <li><code>.push()</code>: Añade un elemento al final.</li>
        <li><code>.pop()</code>: Elimina el último elemento.</li>
        <li><code>.unshift()</code>: Añade un elemento al principio.</li>
        <li><code>.shift()</code>: Elimina el primer elemento.</li>
      </ul>
    `,
    definitions: [
      { term: 'Array', definition: 'Un objeto que permite almacenar una colección ordenada de elementos, accesibles mediante un índice numérico.' },
      { term: 'Índice', definition: 'La posición numérica de un elemento dentro de un array, comenzando desde 0 para el primer elemento.' },
      { term: 'Elemento', definition: 'Cada valor individual almacenado dentro de un array.' },
      { term: 'Propiedad .length', definition: 'Una propiedad de los arrays que devuelve el número de elementos en el array.' },
    ],
    codeExample: `
  let colores = ["rojo", "verde", "azul"];
  console.log("Array original:", colores); // Salida: Array original: [ 'rojo', 'verde', 'azul' ]
  
  colores.push("amarillo");
  console.log("Después de push:", colores); // Salida: Después de push: [ 'rojo', 'verde', 'azul', 'amarillo' ]
  
  let ultimoColor = colores.pop();
  console.log("Color removido con pop:", ultimoColor); // Salida: Color removido con pop: amarillo
  console.log("Después de pop:", colores); // Salida: Después de pop: [ 'rojo', 'verde', 'azul' ]
  
  console.log("El segundo color es:", colores[1]); // Salida: El segundo color es: verde
  colores[0] = "negro";
  console.log("Después de modificar:", colores); // Salida: Después de modificar: [ 'negro', 'verde', 'azul' ]
    `,
    codeOutput: `
  Array original: rojo,verde,azul
  Después de push: rojo,verde,azul,amarillo
  Color removido con pop: amarillo
  Después de pop: rojo,verde,azul
  El segundo color es: verde
  Después de modificar: negro,verde,azul
    `,
    solvedExample: {
      title: 'Ejemplo Resuelto: Listado de tareas',
      description: 'Crearemos una lista de tareas, añadiremos una, eliminaremos la primera y mostraremos el total.',
      code: `
  let tareas = ["Estudiar JavaScript", "Hacer ejercicio", "Comprar víveres"];
  console.log("Tareas iniciales:", tareas);
  
  // Añadir una nueva tarea
  tareas.push("Llamar a mamá");
  console.log("Tareas después de añadir:", tareas);
  
  // Eliminar la primera tarea (ya hecha)
  let tareaCompletada = tareas.shift();
  console.log("Tarea completada:", tareaCompletada);
  console.log("Tareas restantes:", tareas);
  
  // Mostrar cuántas tareas quedan
  console.log("Quedan " + tareas.length + " tareas.");
      `,
      output: `
  Tareas iniciales: Estudiar JavaScript,Hacer ejercicio,Comprar víveres
  Tareas después de añadir: Estudiar JavaScript,Hacer ejercicio,Comprar víveres,Llamar a mamá
  Tarea completada: Estudiar JavaScript
  Tareas restantes: Hacer ejercicio,Comprar víveres,Llamar a mamá
  Quedan 3 tareas.
      `,
      explanation: 'Manipulamos un array `tareas` usando `push` para añadir, `shift` para eliminar el primer elemento y `length` para obtener el tamaño.'
    },
    exercise: {
      title: 'Ejercicio Propuesto: Mis Películas Favoritas',
      description: 'Crea un array llamado `peliculas` con al menos tres de tus películas favoritas. Luego, añade una nueva película al final y elimina la primera película de la lista. Finalmente, imprime el array completo y la cantidad de películas restantes.',
      starterCode: `
  let peliculas = [
    "Interestelar",
    "El Origen",
    "Parasitos"
  ];
  
  // 1. Añade una nueva película al final
  
  // 2. Elimina la primera película
  
  // 3. Imprime el array completo
  
  // 4. Imprime la cantidad de películas restantes
      `
    },
    exerciseSolution: {
      code: `
  let peliculas = [
    "Interestelar",
    "El Origen",
    "Parasitos"
  ];
  
  peliculas.push("Matrix"); // Añade al final
  peliculas.shift();        // Elimina la primera
  
  console.log("Mis películas actuales:", peliculas);
  console.log("Cantidad de películas:", peliculas.length);
      `,
      output: `
  Mis películas actuales: El Origen,Parasitos,Matrix
  Cantidad de películas: 3
      `,
      explanation: 'Se utiliza `push` para añadir un elemento al final del array y `shift` para remover el primer elemento. Finalmente, se imprime el array modificado y su longitud.'
    },
    quiz: {
      question: '¿Cuál es el índice del primer elemento en un array en JavaScript?',
      options: [
        'A. 1',
        'B. 0',
        'C. El nombre del array',
        'D. No tiene índice'
      ],
      correctAnswer: 'B',
      explanation: 'En JavaScript (y en la mayoría de los lenguajes de programación), los arrays se basan en cero, lo que significa que el primer elemento está en el índice 0.'
    }
  };
  
  export default arrays;