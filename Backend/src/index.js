const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const PORT = 8000;
const URL = 'mongodb+srv://moshab97:123456abc@proyectocintaroja-16xy9.mongodb.net/datos?retryWrites=true'
mongoose.connect(URL, {useNewUrlParser:true}, (err)=>{
    if(!err) console.log('Conexión exitosa a base de datos');
});
const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

const Schema = mongoose.Schema;

const peliSchema = new Schema({
    titulo:String,
    fecha: Date,
    sinopsis: String,
    caratula:String,
    directores: {
        type:[{name:String}]
    }
})
const Datos = mongoose.model('peliculas',peliSchema)

app.get('/admin/subida',(req,res)=>{
    res.sendFile(__dirname + "/partials/subida.html")
})
app.post('/admin/subida/aceptado',(req,res)=>{
    var data = new Datos(req.body)
    data.save()
    .then(res.sendFile(__dirname+'/partials/aceptado.html'))
    .catch(err => res.status(409).send(err))
})
app.get('/admin/peliculas',(req,res)=>{
    Datos.find().exec()
    .then(datos => res.send((datos)))
    .catch(err => res.status(409).send(err))
})
app.listen(PORT,()=>{
    console.log(`Servidor iniciado en puerto ${PORT}`);
})