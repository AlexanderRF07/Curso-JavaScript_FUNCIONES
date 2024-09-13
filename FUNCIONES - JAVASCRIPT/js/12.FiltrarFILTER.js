function filtrarPares(arreglo) {
    return arreglo.filter(valor => valor % 2 === 0);
}


const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const pares = filtrarPares(numeros);
console.log(`Arreglo original: ${numeros}`);
console.log(`Arreglo con números pares: ${pares}`);
