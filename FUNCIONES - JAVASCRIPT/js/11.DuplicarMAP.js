
function duplicarValores(arreglo) {
    return arreglo.map(valor => valor * 2);
}

const numeros = [1, 2, 3, 4, 5];
const duplicados = duplicarValores(numeros);
console.log(`Arreglo original: ${numeros}`);
console.log(`Arreglo con valores duplicados: ${duplicados}`);
