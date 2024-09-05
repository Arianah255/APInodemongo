const{response}=require('express')
//controlador para la solicitud get a la ruta de usuario
usuarioGet=(req,res=response)=>{
    res.json({
        msg:"GET API"//devuelve el objeto json
    })
}
//controlador para la solicitud POST a la ruta
usuarioPOST=(req,res=response)=>{
    res.json({
        msg:"POST API"//devuelve el objeto json
    })
}
//controlador para la solicitud PUT a la ruta
usuarioPUT=(req,res=response)=>{
    res.json({
        msg:"PUT API"//devuelve el objeto json
    })
}
//controlador para la solicitud DELETE a la ruta
usuarioDELETE=(req,res=response)=>{
    res.json({
        msg:"DELETE API"//devuelve el objeto json
    })
}
module.exports={usuarioGet,usuarioPOST,usuarioPUT,usuarioDELETE}