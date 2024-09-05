//inportar la funcion response desde el modulo express
const {response}=require('express')
//importatr la librerias 
const bcrypt = require('bcrypts')

const Usuario = require('../models/usuario')

//controlador para la solicitud GET a la ruta de usuarios
const usuarioGet = async (req, res= response) => {
    const body=req.query;//Extrae los parametros de la consulta 
    const{q,nombre,page=1,limit}=req.query
    //consultar todos los documentos de la coleccion Usuarios
    const usuarios =await Usuario.find();

    res.json({
        //Devuelve un objeto json con los usuarios
        // optenidos de la base de datos 
        usuarios
    })  
}

//controlador para solicitar el GET 
const PromGet = async (req, res=response)=> {
    const body=req.query;//Extrae los parametros de la consulta 
    const{q,nombre,page=1,limit}=req.query
    //consultar todos los documentos de la coleccion Usuarios
    const usuarios =await Usuario.find();
    //muestra cada documento por consola 
    usuarios.array.forEach(numero => console.log(numero))
    res.json({
        //Devuelve un objeto json con los usuarios
        // optenidos de la base de datos 
       msg:'Prom API Controlador',
       q,
       nombre,
       page,
       limit,
       usuarios
       //devuelve los usuarios obtenidos de la base de datos 
    })  
}

//controlador para la solicitud POST a la ruta de usuarios
const usuarioPost = async (req, res= response) => {
    const body=req.query;//Extrae los parametros de la consulta
    let msg=''//inicializamos una variable para el mensaje de respuesta
    const usuario=new Usuario(body);//Creamos un uebo onjeto es decir un nuevo usuario o una instancia de clase 
    //con los datos de l cuerpo de la solicitud
    const{nombre,email,password,rol,estado}=req.body;
    //encriptar la contraseña antes de guardalar en la base de datos 
    try{
        const salt=bcrypt.genSaltSync(10);//Genera una cadena de cifrado
        usuario.password=bcrypt.hashSync(password,salt);//cifra la contraseña con la cadena (salt) generada
        await usuario.save();//Guarda el usuario en la base de datos 
        msg=': Usuario creado correctamente'//Asigna un mensaje de exito 
    }
    catch(error){
        console.log(error);
        //Muestra un mensaje de error
        if(error){
            if(error.name==='ValidationError'){
                console.error(Object.values(error.erros).map(val=>
                    msg=Object.values(error.erros).map(val=>
                        val.message)
                        //Asigna el error de los errores de respuesta 
                    )
                )
        
            }
        }
                
    }
    console.log(msg);//Muestra el mensaje de respuesta por consola

    res.json({
        //Devuelve un objeto json con los usuarios
        // optenidos de la base de datos 
       msg:msg
    })  
}

//controlador para la solicitud PUT a la ruta de usuarios
const usuarioPut = async (req, res= response) => {
    const body=req.query;//Extrae los parametros de la consulta
    console.log(body)//Extraer los parametros de consulta por consola
    //Extraer los datos del cuerpo de la solicitud 
    const{nombre,email,password,rol,estado}=req.body;
    //Buscar y actualizar un usuario en la base de datos 
    const usuario=await Usuario.findOneAndUpdate({email:email},{nombre:nombre},{rol:rol})
    res.json({
        //Devuelve un objeto json con los usuarios
        // optenidos de la base de datos 
       msg:'Usuario actualizado correctamente',
       //devuelve el Usuario modifcado
       usuario
    })

}
//controlador para la solicitud Delte a la ruta de usuarios
const usuarioDelete = async (req, res= response) => {
    const body=req.query;//Extrae los parametros de la consulta
    console.log(body)//Extraer los parametros de consulta por consola
    //Extraer los datos del cuerpo de la solicitud 
    const{nombre,email,password,rol,estado}=req.body;
    //Buscar y eliminar un usuario en la base de datos 
    const usuario=await Usuario.findOneAndDelete({email:email})
    res.json({
        //Devuelve un objeto json con los usuarios
        // optenidos de la base de datos 
       msg:'Usuario eliminado correctamente',
       usuario
    })
}

module.exports ={usuarioGet,PromGet,usuarioPost,usuarioPut,usuarioDelete}