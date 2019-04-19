const mongoose = require('mongoose')
const URL = 'mongodb+srv://moshab97:123456abc@proyectocintaroja-16xy9.mongodb.net/datos?retryWrites=true'
mongoose.connect(URL, {useNewUrlParser:true}, (err)=>{
    if(!err) console.log('Conexión exitosa a base de datos');
});
module.exports = URL