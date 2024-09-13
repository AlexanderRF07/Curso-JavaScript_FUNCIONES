
function encontrarMinimo(arreglo) {
    return Math.min(...arreglo);
}

const numeros = [5, 3, 9, 1, 6];
console.log(`El número más pequeño en el arreglo es ${encontrarMinimo(numeros)}`);
