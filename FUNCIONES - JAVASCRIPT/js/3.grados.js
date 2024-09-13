(function() {
    // Función para convertir grados Celsius a Fahrenheit
    function celsiusAFahrenheit(celsius) {
        return (celsius * 9/5) + 32;
    }

    // Solicitar al usuario que introduzca la temperatura en grados Celsius
    const input = prompt('Introduce la temperatura en grados Celsius:');
    const celsius = parseFloat(input);

    if (isNaN(celsius)) {
        alert('Por favor, introduce un número válido.');
    } else {
        const fahrenheit = celsiusAFahrenheit(celsius);
        alert(`La temperatura de ${celsius}°C es igual a ${fahrenheit}°F.`);
    }
})();