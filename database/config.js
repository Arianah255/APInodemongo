//Importar la libreria mongoose para interactuar con mongoDB
const mongoose = require('mongoose');
//Funcion para establecer 
const dbConnection = ()=>{
    try{
        mongoose.connect(process.env.MONGODB_CNM);
        console.log('Base de datos conectada');
    }
    catch(error){
        console.error(error);
        //Lanza una expcion con el error 
        throw new Error('Error de conexion a la base de datos');
    }
}

module.exports = {dbConnection};