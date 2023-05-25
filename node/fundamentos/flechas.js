//................. FUNCIÓN NORMAL...................//

function sumar (a, b) {
    return a + b;
}

console.log( sumar(8, 4));


//................. FUNCIÓN FLECHA...................//

const restar = (a, b) => {
    return a - b;
}

console.log( restar(10, 7));

//................. FUNCIÓN FLECHA ABREVIADA.........//

const multiplicar = (a, b) => a * b; // Si el cuerpo de la ejecución va en la misma linea, el return es implicito y no necesita llaves.

console.log(multiplicar(2,4));

