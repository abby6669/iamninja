const express = require('express')3
const bodyParser = require('body-parser');
const {Subida} = require('./conection');
const app = express();

app.get('/admin/prueba',(req,res)=>{
    res.send({message:"Servidor Funcionando"})
})

app.post('/admin/subida', (req,res)=>{
        const {titulo,fecha,sinopsis,caratula,directores} = req.body
        const newPelicula = Subida({
            titulo,
            fecha,
            sinopsis,
            caratula,
            directores
        });
        newPelicula.save((err,pelicula)=>{
            err
            ? res.status(409).send(err)
            : res.status(201).send(pelicula)
        })
    })
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

