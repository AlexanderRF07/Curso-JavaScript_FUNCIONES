
function factorialIterativo(n) {
    if (n < 0) {
        return 'El factorial no está definido para números negativos.';
    }
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

const numero = 5;
console.log(`El factorial de ${numero} es ${factorialIterativo(numero)}`);
