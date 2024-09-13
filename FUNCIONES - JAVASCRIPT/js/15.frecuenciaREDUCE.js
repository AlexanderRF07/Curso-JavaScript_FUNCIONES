
function contarFrecuencia(arreglo) {
    return arreglo.reduce((frecuencia, elemento) => {
     
        frecuencia[elemento] = (frecuencia[elemento] || 0) + 1;
        return frecuencia;
    }, {}); 
}

const numeros = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
const frecuencia = contarFrecuencia(numeros);
console.log(frecuencia);
