
const condicionalesIfElse = {
    
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
  };
  
  export default condicionalesIfElse; // ¡Exporta solo esta lección!