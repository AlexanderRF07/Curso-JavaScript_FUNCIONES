// Función para encontrar el número mayor entre tres números
function encontrarMayor(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } else if (num2 >= num1 && num2 >= num3) {
        return num2;
    } else {
        return num3;
    }
}

// Ejemplo de uso
const numero1 = 5;
const numero2 = 8;
const numero3 = 3;

console.log(`El número mayor entre ${numero1}, ${numero2} y ${numero3} es  ${encontrarMayor(numero1, numero2, numero3)}`);
