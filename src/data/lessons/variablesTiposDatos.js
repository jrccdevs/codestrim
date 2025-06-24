// src/data/lessons/introProgramacion.js

const variablesTiposDatos = {
    
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
}
export default variablesTiposDatos; // ¡Exporta solo esta lección!