const mongoose = require('mongoose')
const URL = 'mongodb+srv://moshab97:123456abc@proyectocintaroja-16xy9.mongodb.net/peliculas?retryWrites=true'
mongoose.connect(URL,{useNewUrlParser:true},(err)=>{
    if(!err) console.log('Conexion con base de datos exitosa')
})

const Schema = mongoose.Schema;

const peliSchema = new Schema({
    titulo:String,
    fecha: Date,
    sinopsis: String,
    caratula:String,
    directores: {
        type:[{name:String}]
    }
},{timestamps:true});

const Peliculas = mongoose.model('Peliculas',peliSchema)
mongoose.export = {Peliculas}