const express = require('express')
const router = express.Router();
const peliculas = require('./conection')

router.get('/s',async (req,res)=>{
    const pelicula = await peliculas.find()
        res.send(pelicula)
})
router.post('/subir', async (req,res)=>{
    
})
module.exports = router