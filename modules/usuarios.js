
const{schema,model}= required('mongoose');//importa
//las funciones schema y model de mongoose para definir esquemas y modelo

//se define el esquema del usuario
const UsuarioSchema=Schema({
    nombre:{
        type:String,
        required:[true, 'el nombre es obligatorio']
    },
    email:{
        type:String,
        required:[true, 'el email es obligatorio']
    },
    password:{
        type:String,
        required:[true, 'el password es obligatorio'],
        minlength:3,//define la longitud del campo
        minlength:[60,'el password debe tener una longitud de 40']
    },
    rol:{
        type:String,
        required:true,
        enum:['admin','usuario']
    },
    estado:{
        type:Boolean,
        default:true,
        required:[true ,'el estado es obligatorio']
    },
});

//Crea y exporta el modelo de usuario a partir de esquema UsuarioSchema
module.exports=model('Usuario','UsuarioSchema')