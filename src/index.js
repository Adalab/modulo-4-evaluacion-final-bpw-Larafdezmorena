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


//ARRANCAR EL SERVIDOR

app.listen (port, () => {
    console.log(`Server has been started in <http://localhost:${port}`);
})

//ENDPOINTS