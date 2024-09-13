
function convertirAStrings(personas) {
    return personas.map(persona => `Nombre: ${persona.nombre}, Edad: ${persona.edad}`);
}

const personas = [
    { nombre: 'Ana', edad: 30 },
    { nombre: 'Luis', edad: 25 },
    { nombre: 'Carlos', edad: 40 }
];

const cadenas = convertirAStrings(personas);
console.log(cadenas);
