//IMPORTAR BIBLIOTECAS

const express = require ('express');
const cors = require ('cors');
require('dotenv').config();

const mysql = require ('mysql2/promise');

//CREAR VARIABLES

const app = express();
const port = 4000;

//CONFIGURAR EXPRESS

app.use(cors());
app.use (express.json({limit:'25Mb'}));

//CONFIGURAR MYSQL

const getConnection = async () => {
    
    const connection = await mysql.createConnection ({
        host: process.env.MYSQL_HOST || 'localhost', 
        user: process.env.MYSQL_USER || 'root',
        password: process.env.MYSQL_PASS,
        database: process.env.MYSQL_SCHEMA || 'recetas_db'
    });

    await connection.connect();

    console.log(
        `Conexión establecida con la base de datos (identificador=${connection.threadId})`
    );

    return connection;
};

//ARRANCAR EL SERVIDOR

app.listen (port, () => {
    console.log(`Server has been started in <http://localhost:${port}>`);
})

//ENDPOINTS

//Obtener todas las recetas (GET /api/recetas):

app.get('/api/recetas', async (req, res) => {
    
    const conn = await getConnection();

    const queryGetRecetas = `
    SELECT * FROM recetas;
    `;

    const [results] = await conn.query(queryGetRecetas);
    
    res.json(results);
});

//Obtener una receta por su ID (GET /api/recetas/:id)

app.get('/api/recetas', (req, res) => {

});

//Crear una nueva receta (POST /api/recetas)

app.post('/api/recetas', (req, res) => {

});

//Actualizar una receta existente (PUT /api/recetas/:id)

app.put('/api/recetas', (req, res) => {

});

//Eliminar una receta (DELETE /api/recetas/:id)

app.delete('/api/recetas', (req, res) => {

});
