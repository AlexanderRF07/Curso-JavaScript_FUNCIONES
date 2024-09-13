//
function sumarArreglo(arreglo) {
    return arreglo.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
}


const numeros = [1, 2, 3, 4, 5];
const suma = sumarArreglo(numeros);
console.log(`La suma de los números en el arreglo es ${suma}`);
