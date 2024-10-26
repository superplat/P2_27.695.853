const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


const nombre = "Hector Alejandro Arevalo Prieto";
const cedula = "27.695.853";
const seccion = "Sección 3.";

app.get('/', (req, res) => {
    res.send(`
        <h1>Hola mundo</h1>
        <p>Soy ${nombre} y mi cédula es ${cedula}.</p>
        <h2>Sección</h2>
        <p>${seccion}</p>
    `);
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});