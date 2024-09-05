//Importar la libreria express para crear el servidor web 
const express = require('express');
// Importar la funcion para conectar a la base de datos 
const {dbconnection}=require('../database/config');
//importar la libreria cors de la base de datos
const cors=require('cors')
//importar la librerya bodyParser
const bodyParser = require('body-parser');

//Crear el servidor
class server{
    constructor(){
        this.app=express();//
        this.port=process.env.PORT;
        this.usuariosPath='api/usuarios';
        this.authPath='api/auth'
        this.middlewares();//Configuarar los middlewares de la aplicación
        this.connectionDb();
    }  
    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Servidor corriendo en el puerto ${this.port}`)

        })
    }
    middlewares(){
        this.app.use(cors());//Usar cors para permitir el acceso desde diferentes dominios
        this.app.use(bodyParser.json());//Usar body-parser para parsear los datos en formato json
        this.app.use(express.static(__dirname));//Usar body-parser para parsear los datos en formato json
    
    }
    routes(){
        this.app.use(this.usuariosPath,require('../routes/usuarios'))
        //define las rutas para las operaciones de autentificacion
        this.app.use(this.authPath,require('../routes/auth'))
    }
    async connectionDb(){
        //conecta con la base de datos mongodb
        await dbconnection();
    }
}
module.exports= server