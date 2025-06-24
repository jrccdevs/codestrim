// src/data/lessons/domManipulacion.js

const domManipulacion = {
    id: 'dom-manipulacion',
    title: '7. Manipulación del DOM: Haciendo tus Páginas Interactivas',
    content: `
      <p>El **DOM (Document Object Model)** es una representación en forma de árbol de los elementos de tu página web. JavaScript nos permite interactuar con este árbol para cambiar el contenido, el estilo y la estructura de una página web después de que ha sido cargada en el navegador.</p>
      <h3>Seleccionando Elementos HTML</h3>
      <p>Antes de poder modificar un elemento, debemos seleccionarlo. Los métodos más comunes son:</p>
      <ul>
        <li><code>document.getElementById('id')</code>: Selecciona un elemento por su atributo {id} (debe ser único).</li>
        <li><code>document.querySelector('selectorCSS')</code>: Selecciona el primer elemento que coincide con un selector CSS (ej. '.clase', '#id', 'div').</li>
        <li><code>document.querySelectorAll('selectorCSS')</code>: Selecciona **todos** los elementos que coinciden con un selector CSS, devolviendo una lista de nodos.</li>
      </ul>
      <h3>Modificando Contenido</h3>
      <ul>
        <li><code>elemento.textContent = 'nuevo texto'</code>: Cambia el texto dentro de un elemento.</li>
        <li><code>elemento.innerHTML = '<b>nuevo HTML</b>'</code>: Cambia el HTML dentro de un elemento (¡usar con precaución por seguridad!).</li>
      </ul>
      <h3>Modificando Estilos</h3>
      <p>Puedes cambiar los estilos CSS de un elemento usando la propiedad <code>.style</code>:</p>
      <pre><code>let miDiv = document.getElementById('miDiv');
  miDiv.style.backgroundColor = 'blue';
  miDiv.style.color = 'white';</code></pre>
      <h3>Manejo de Eventos</h3>
      <p>Los eventos nos permiten responder a las interacciones del usuario (clics, teclado, etc.).</p>
      <pre><code>let miBoton = document.getElementById('miBoton');
  miBoton.addEventListener('click', function() {
    alert('¡Botón clickeado!');
  });</code></pre>
      <p>La función pasada a <code>addEventListener</code> se llama **callback** o **manejador de eventos**.</p>
    `,
    definitions: [
      { term: 'DOM (Document Object Model)', definition: 'Una interfaz de programación para documentos HTML y XML. Representa la página como un árbol de objetos, permitiendo que programas (como JavaScript) cambien la estructura, estilo y contenido del documento.' },
      { term: 'Elemento HTML', definition: 'Una parte de una página web, como un párrafo (`<p>`), un encabezado (`<h1>`), o un botón (`<button>`).' },
      { term: 'Selector CSS', definition: 'Un patrón utilizado para seleccionar elementos HTML a los que aplicar estilos o, en JavaScript, para manipular.' },
      { term: 'Evento', definition: 'Una acción o suceso que ocurre en el sistema (ej. clic de ratón, pulsación de tecla, carga de página) a la que JavaScript puede responder.' },
      { term: 'Manejador de Eventos (Event Handler)', definition: 'Una función de JavaScript que se ejecuta cuando ocurre un evento específico.' },
    ],
    codeExample: `
  // Este código solo funcionaría en un entorno HTML con los elementos correspondientes
  // document.getElementById('tituloPrincipal').textContent = "Nuevo Título";
  
  // document.querySelector('.parrafo-importante').style.color = 'red';
  
  // let boton = document.getElementById('miBoton');
  // boton.addEventListener('click', function() {
  //   alert('Has clickeado el botón!');
  // });
  
  // Para demostrar en este entorno, solo haremos operaciones de JS:
  let mensaje = "Manipulación del DOM es poderosa.";
  console.log(mensaje);
    `,
    codeOutput: `
  Manipulación del DOM es poderosa.
    `,
    solvedExample: {
      title: 'Ejemplo Resuelto: Cambiando el texto de un párrafo',
      description: 'Imagina que tienes un párrafo con `id="miParrafo"`. Este código cambiaría su texto.',
      code: `
  // Imaginemos que tenemos un HTML como: <p id="miParrafo">Texto original.</p>
  
  // const miParrafo = document.getElementById('miParrafo');
  // if (miParrafo) { // Siempre verifica que el elemento exista
  //   miParrafo.textContent = "¡Este es el texto modificado con JavaScript!";
  //   miParrafo.style.color = "purple";
  // } else {
  //   console.log("El elemento 'miParrafo' no se encontró en el DOM.");
  // }
  
  // Para que funcione en este simulador:
  let textoSimulado = "Texto original.";
  console.log("Texto antes: " + textoSimulado);
  textoSimulado = "¡Este es el texto modificado con JavaScript!";
  console.log("Texto después: " + textoSimulado);
      `,
      output: `
  Texto antes: Texto original.
  Texto después: ¡Este es el texto modificado con JavaScript!
      `,
      explanation: 'Aunque la manipulación real del DOM no es posible en este entorno (simplemente simulamos el cambio), el concepto es seleccionar un elemento por su ID y luego cambiar su propiedad `textContent`.'
    },
    exercise: {
      title: 'Ejercicio Propuesto: Interacción con un Botón (Simulado)',
      description: 'Imagina que tienes un botón con `id="btnClic"` y un párrafo con `id="textoSalida"`. Cuando se hace clic en el botón, el párrafo debe mostrar el mensaje "¡Has hecho clic!". Simula esta lógica en el editor.',
      starterCode: `
  // Simula la selección de elementos
  // let botonSimulado = {
  //   id: "btnClic",
  //   clickEvent: null,
  //   addEventListener: function(event, callback) {
  //     if (event === 'click') {
  //       this.clickEvent = callback;
  //     }
  //   },
  //   simulateClick: function() {
  //     if (this.clickEvent) {
  //       this.clickEvent();
  //     }
  //   }
  // };
  
  // let parrafoSalidaSimulado = {
  //   id: "textoSalida",
  //   textContent: ""
  // };
  
  // Escribe tu código aquí para simular el manejador de eventos
  // Cuando simules el clic, console.log el texto que tendría el párrafo
  
  // Ejemplo de cómo sería en un navegador real:
  // const btn = document.getElementById('btnClic');
  // const salida = document.getElementById('textoSalida');
  // if (btn && salida) {
  //   btn.addEventListener('click', function() {
  //     salida.textContent = "¡Has hecho clic!";
  //   });
  // }
  
  // Para este ejercicio:
  let mensajePulsado = "";
  function manejarClick() {
    mensajePulsado = "¡Has hecho clic!";
    console.log(mensajePulsado);
  }
  
  // Simula el clic aquí llamando a manejarClick()
  // manejarClick();
      `
    },
    exerciseSolution: {
      code: `
  let mensajePulsado = "";
  function manejarClick() {
    mensajePulsado = "¡Has hecho clic!";
    console.log(mensajePulsado);
  }
  
  manejarClick(); // Simulamos el clic del botón
      `,
      output: `
  ¡Has hecho clic!
      `,
      explanation: 'Aunque la manipulación directa del DOM no es posible aquí, la lógica consiste en definir una función que actualice el texto deseado. Al "simular" el clic (llamando a la función `manejarClick`), el mensaje se imprime como si se hubiera actualizado el párrafo en la página.'
    },
    quiz: {
      question: '¿Qué método usarías para seleccionar el **primer** elemento HTML con la clase `item`?',
      options: [
        'A. `document.getElementById("item")`',
        'B. `document.querySelectorAll(".item")`',
        'C. `document.querySelector(".item")`',
        'D. `document.getElementsByClassName("item")[0]`'
      ],
      correctAnswer: 'C',
      explanation: '`document.querySelector()` selecciona el primer elemento que coincide con el selector CSS proporcionado. `B` y `D` devolverían colecciones de elementos, no solo el primero directamente.'
    }
  };
  
  export default domManipulacion;