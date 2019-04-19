// const express = require('express')
// const {Subida} = require('./conection');

// const path = require('path')
// const {} = require('./database')
// const app = express();

// app.get('/admin/prueba',(req,res)=>{
//     res.send({message:"Servidor Funcionando"})
// })

// app.post('/admin/subida', (req,res)=>{
//         const {titulo,fecha,sinopsis,caratula,directores} = req.body
//         const newPelicula = Subida({
//             titulo,
//             fecha,
//             sinopsis,
//             caratula,
//             directores
//         });
//         newPelicula.save((err,pelicula)=>{
//             err
//             ? res.status(409).send(err)
//             : res.status(201).send(pelicula)
//         })
//     })
// app.use(express.urlencoded({extended:true}))
// app.use(express.json());
// app.use(require('./routesCrud'))

// app.listen(3001)