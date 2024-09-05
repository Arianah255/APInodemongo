require('dotenv').config();//importa y carga las variables de entorno
const server = require('./modules/server');
//desde el archivo creado .env

const Server=require('./modules/server');//importa la clase server

const Server= new Server();//crea una nueva instacia
server.listen();