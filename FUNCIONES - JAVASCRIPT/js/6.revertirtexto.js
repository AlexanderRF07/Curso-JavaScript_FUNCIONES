function revertirCadena(cadena) {
    return cadena.split('').reverse().join('');
}


const texto = 'Hola Mundo';
console.log(`Cadena original: ${texto}`);
console.log(`Cadena invertida: ${revertirCadena(texto)}`);
