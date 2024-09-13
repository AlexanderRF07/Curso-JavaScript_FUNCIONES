
function sumarArreglo(arreglo) {
    return arreglo.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
}

// Ejemplo de uso
const numeros = [1, 2, 3, 4, 5];
console.log(`La suma de los números en el arreglo es ${sumarArreglo(numeros)}`);
