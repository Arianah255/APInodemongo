const {Router} = require('express');//exporta la funcio de router
const router= Router();//crea una instacia de router
const {login}= require('../controllers/auth');//importa el controlador login desde el archivo../controllers/auth

//define una ruta POST que utilizará el controlador logins
router,post('/login',login)
module.exports= router;//exporta el router para que este disponible, para otros modulos 