// src/data/lessons/objetos.js

const objetos = {
    id: 'objetos',
    title: '6. Objetos: Colecciones de Propiedades',
    content: `
      <p>Los **objetos** en JavaScript son colecciones de datos no ordenados que se almacenan como pares de **clave-valor**. Son fundamentales para representar entidades con múltiples características.</p>
      <h3>Creando Objetos</h3>
      <p>Los objetos se crean usando llaves <code>{}</code>. Cada par clave-valor se separa por comas, y la clave y el valor por dos puntos <code>:</code>.</p>
      <pre><code>let persona = {
    nombre: "Alicia",
    edad: 30,
    ciudad: "Madrid",
    esEstudiante: false
  };</code></pre>
      <p>Aquí, <code>nombre</code>, <code>edad</code>, <code>ciudad</code> y <code>esEstudiante</code> son las **claves** (o propiedades), y "Alicia", 30, "Madrid", false son sus **valores**.</p>
      <h3>Accediendo a Propiedades</h3>
      <p>Hay dos formas principales de acceder a las propiedades de un objeto:</p>
      <ol>
        <li><strong>Notación de punto (.)</strong>: Más común y legible cuando la clave es un identificador válido.</li>
        <pre><code>console.log(persona.nombre);   // "Alicia"
       console.log(persona.edad);     // 30</code></pre>
        <li><strong>Notación de corchetes ([ ])</strong>: Útil cuando la clave contiene espacios, caracteres especiales, o cuando la clave se almacena en una variable.</li>
        <pre><code>console.log(persona["ciudad"]); // "Madrid"
  let propiedad = "edad";
  console.log(persona[propiedad]); // 30</code></pre>
      </ol>
      <h3>Modificando y Añadiendo Propiedades</h3>
      <p>Puedes cambiar el valor de una propiedad existente o añadir una nueva:</p>
      <pre><code>persona.edad = 31; // Cambia la edad
  persona.profesion = "Ingeniera"; // Añade una nueva propiedad
  console.log(persona);</code></pre>
    `,
    definitions: [
      { term: 'Objeto', definition: 'Un tipo de dato en JavaScript que permite almacenar colecciones de pares clave-valor (propiedades).' },
      { term: 'Clave (Propiedad)', definition: 'El nombre identificador de un dato dentro de un objeto.' },
      { term: 'Valor', definition: 'El dato asociado a una clave en un objeto.' },
      { term: 'Notación de punto', definition: 'Método para acceder a las propiedades de un objeto usando un punto (`.`).' },
      { term: 'Notación de corchetes', definition: 'Método para acceder a las propiedades de un objeto usando corchetes (`[]`), especialmente útil para claves dinámicas o con caracteres especiales.' },
    ],
    codeExample: `
  let libro = {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    anioPublicacion: 1967,
    genero: "Realismo mágico"
  };
  
  console.log("Título:", libro.titulo);
  console.log("Autor:", libro["autor"]);
  
  libro.anioPublicacion = 1970; // Modificar
  libro.editorial = "Sudamericana"; // Añadir
  console.log("Libro actualizado:", libro);
  console.log("Editorial:", libro.editorial);
    `,
    codeOutput: `
  Título: Cien años de soledad
  Autor: Gabriel García Márquez
  Libro actualizado: { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', anioPublicacion: 1970, genero: 'Realismo mágico', editorial: 'Sudamericana' }
  Editorial: Sudamericana
    `,
    solvedExample: {
      title: 'Ejemplo Resuelto: Datos de un producto',
      description: 'Crearemos un objeto para un producto, mostraremos su precio y luego le daremos un descuento.',
      code: `
  let producto = {
    nombre: "Laptop Pro",
    precio: 1200,
    disponible: true
  };
  
  console.log("Precio original:", producto.precio + " USD");
  
  // Aplicar un descuento del 10%
  producto.precio = producto.precio * 0.90; // O producto.precio *= 0.90;
  console.log("Precio con descuento:", producto.precio + " USD");
  
  // Añadir una categoría
  producto.categoria = "Electrónica";
  console.log("Categoría:", producto.categoria);
      `,
      output: `
  Precio original: 1200 USD
  Precio con descuento: 1080 USD
  Categoría: Electrónica
      `,
      explanation: 'Se define un objeto `producto`. Accedemos a su propiedad `precio` para imprimirla y luego la modificamos para aplicar un descuento. Finalmente, se añade una nueva propiedad `categoria` al objeto.'
    },
    exercise: {
      title: 'Ejercicio Propuesto: Perfil de Usuario',
      description: 'Crea un objeto llamado `usuario` con las propiedades `nombre`, `apellido`, `edad` y `email`. Asigna valores a estas propiedades. Luego, actualiza la propiedad `edad` para aumentarla en 1, y añade una nueva propiedad `estaActivo` con el valor `true`. Finalmente, imprime el objeto `usuario` completo.',
      starterCode: `
  let usuario = {
    // Define las propiedades aquí
    nombre: "Juan",
    apellido: "Perez",
    edad: 25,
    email: "juan.perez@example.com"
  };
  
  // 1. Aumenta la edad en 1
  
  // 2. Añade la propiedad 'estaActivo' con valor true
  
  // 3. Imprime el objeto usuario completo
      `
    },
    exerciseSolution: {
      code: `
  let usuario = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 25,
    email: "juan.perez@example.com"
  };
  
  usuario.edad += 1; // Aumenta la edad en 1
  usuario.estaActivo = true; // Añade la propiedad
  
  console.log(usuario);
      `,
      output: `
  { nombre: 'Juan', apellido: 'Perez', edad: 26, email: 'juan.perez@example.com', estaActivo: true }
      `,
      explanation: 'Se accede a la propiedad `edad` para incrementarla, y luego se añade una nueva propiedad `estaActivo` al objeto `usuario`, mostrando la flexibilidad de los objetos.'
    },
    quiz: {
      question: 'Si tienes un objeto `coche = { marca: "Toyota", modelo: "Corolla" }`, ¿cómo accedes al valor de `modelo`?',
      options: [
        'A. `coche[1]`',
        'B. `coche.modelo`',
        'C. `coche.2`',
        'D. `coche("modelo")`'
      ],
      correctAnswer: 'B',
      explanation: 'La notación de punto (`.`) es la forma más común y legible para acceder a las propiedades de un objeto cuando el nombre de la propiedad es un identificador válido.'
    }
  };
  
  export default objetos;