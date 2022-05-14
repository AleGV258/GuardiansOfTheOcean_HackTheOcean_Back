/*

    HACK THE OCEAN

    Equipo: Guardians of the Ocean

    Integrantes:
    - Lenin Sebastian Facio
    - Michell Alejandro García
    - Luis Josué Cruz
    - ​​José Alfonso Ramos
    - Michel Dávila

*/

const express = require('express'); /* Express para la creación de la API */
const app = express(); /* Creación de la Aplicación */
const port = 3000 || process.env.PORT;
const animalesRouter = require('./app/routes/animales');

const cors = require("cors");
const corsOptions = {
    origin: "http://localhost:8081"
};
app.use(cors(corsOptions));

/* Prueba de conexión con la Base de Datos */
app.get('/HackTheOcean', (req, res) => {
    sql = 'SELECT * FROM AnimalesMarinos;';
    db.get(sql, (err, row) => {
        if (err) { /* En caso de que la consulta falle, se regresa un estatus de error y se imprime la falla */
            res.status(400).json({ "error": err.message });
            return;
        } else {
            if (typeof row === 'undefined') { 
                res.status(400).json({ "error": err.message });
                return;
            } else { 
                res.json({Animales: row});
            }
        }
    });
});

/* Levantar el servidor en el puerto 5000 */
app.listen(5000, () => { console.log('Servidor Web Iniciado'); });