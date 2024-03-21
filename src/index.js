//IMPORTAR BIBLIOTECAS

const express = require ('express');
const cors = require ('cors');

const mysql2 = require ('mysql2/promise');

//CREAR VARIABLES

const app = express();
const port = 4000;

//CONFIGURAR EXPRESS

app.use(cors());
app.use (express.json({limit:'25Mb'}));

//CONFIGURAR MYSQL

const getConnection = async () => {
    
    const connection = await mysql.createConnection ({
        host: process.env.MYSQL_HOST, 
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASS,
        database: process.env.MYSQL_SCHEMA
    });

    await connection.connect();

    console.log(
        `Conexión establecida con la base de datos (identificador=${connection})`
    );

    return connection;
};

//ARRANCAR EL SERVIDOR

app.listen (port, () => {
    console.log(`Server has been started in <http://localhost:${port}`);
})

//ENDPOINTS
