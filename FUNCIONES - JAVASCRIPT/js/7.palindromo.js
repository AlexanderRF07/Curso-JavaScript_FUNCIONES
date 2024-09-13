
function esPalindromo(palabra) {
  
    const cleanedWord = palabra.toLowerCase().replace(/\s+/g, '');
    
  
    const palabraRevertida = cleanedWord.split('').reverse().join('');
    
    return cleanedWord === palabraRevertida;
}

const palabra1 = 'Anita lava la tina';
const palabra2 = 'Hola Mundo';

console.log(`¿"${palabra1}" es un palíndromo? ${esPalindromo(palabra1)}`);
console.log(`¿"${palabra2}" es un palíndromo? ${esPalindromo(palabra2)}`);
