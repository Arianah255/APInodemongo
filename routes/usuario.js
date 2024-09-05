const {Router} = require('express');//exporta la funcio de router
const router= Router();//crea una instacia de router

const{usuarioGet,usuarioPost,usuarioPut,usuarioDelete, PromGet} = 
require('../controllers/usuario');//importa los controladores

//definir las rutas y asignar controladores a cada ruta
router.get('/',usuarioGet);

//ruta para obtener el promedio de los usuarios
router.get('/promedio',PromGet);

//definir las rutas y asignar controladores a cada ruta
router.get('/',usuarioPost);

//definir las rutas y asignar controladores a cada ruta
router.get('/',usuarioPut);

//definir las rutas y asignar controladores a cada ruta
router.get('/',usuarioDelete);

module.exports=router;
