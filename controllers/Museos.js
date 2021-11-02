const Museos = require('../models/Museos')
const mongoose = require("mongoose")

//insertar nuevos elementos a la BD
exports.postAgregarMuseos = async (req,res)=>{
    const museos = new Peliculas(req.body)
    museos._id = new mongoose.Types.ObjectId() //se le asigna un id al objeto 
        try{
            // Agregar documento a la coleccion y verifica que no se repitan los valores
            const userExists = await Museos.exists({Nombre: req.body.Nombre, Ubicacion: req.body.Ubicacion , Descripcion: req.body.Descripcion});
            if (!userExists){
                await museos.save()
                console.log(museos)
                console.log("Museo registrado")
                res.send({operacion:"correcta"})
            }else{
                res.send({operacion:"incorrecta repetido"})
            }
    
        }catch(err){
            console.log(err)
            res.send({operacion:"incorrecta"})
        }
    }

//consultar el status de la BD
exports.getObtenerMuseos = async (req,res)=>{
    const Mus = await Museos.find()
    console.log(Mus)
    res.json(Mus)
}
exports.postActualizarMuseos = async (req,res)=>{
    // Filtro y cambio
    try {
        await Museos.findOneAndUpdate(req.body.filtro,req.body.cambio)
        console.log("Cambio realizado")
        res.json({operacion:"correcta"})
    }catch(err){
        console.log(err)
    }
}

exports.postBorrarMuseos = async (req,res)=>{
    await Museos.findOneAndRemove(req.body)
    console.log("Pelicula eliminada")
    res.json({operacion:"correcta"})
}
