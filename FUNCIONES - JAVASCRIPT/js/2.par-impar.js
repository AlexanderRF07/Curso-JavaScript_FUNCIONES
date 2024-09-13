function esParOImpar(numero) {
    return numero % 2 === 0 ? "par" : "impar";
}

// Solicitar al usuario que introduzca un número
const input = prompt('Introduce un número:');
const numero = Number(input);

if (isNaN(numero)) {
    alert('Por favor, introduce un número válido.');
} else {
    alert(`El número ${numero} es ${esParOImpar(numero)}.`);
}