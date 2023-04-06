require("dotenv").config();
const express = require('express');
const cors = require('cors');
const morgan =require('morgan');
const indexRoute = require('./routes')

const app = express();


//Settings
app.use(morgan('dev')); // TODO: ver por consola las peticiones
app.use(cors()) // TODO: uso de cors entre servidores
app.use(express.json()); //TODO: Para recibir jsons



//ROUTES
app.use('/api', indexRoute)








// THE SERVER

const port = process.env.PORT || 3001; //TODO: usa el puerto definido o el por defecto

function starServer(){
    try{

        app.listen(port, () =>{
            console.log(`********  SERVIDOR ACTIVO EN EL http://localhost:${port}  ***********`);
        });

    }catch (error){
        console.log(`********ERROR DE SERVIDOR **********`);
    }
}

//TODO: inicializadores
starServer();
