const mongoose = require('mongoose')
const { stringify } = require('querystring')
const Museos = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    //Formato con el que se recibira el Json y se tendra la BD 
    Nombre:{
        type: String,
        required: true
    },
    Ubicacion:{
        type: String,
        required: false
    },
    Descripcion:{
        type: String,
        required: false
    }
},{collection:'Museos'})
//Modulo para exportar la base
module.exports = mongoose.model('Museos',Museos)