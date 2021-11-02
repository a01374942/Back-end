const Peliculas = require('../models/Peliculas')
const mongoose = require("mongoose")

//insertar nuevos elementos a la BD
exports.postAgregarPeliculas = async (req,res)=>{
    const peliculas = new Peliculas(req.body)
    peliculas._id = new mongoose.Types.ObjectId() //se le asigna un id al objeto 
        try{
            // Agregar documento a la coleccion y verifica que no se repitan los valores
            const userExists = await Peliculas.exists({Titulo: req.body.Titulo, Anio: req.body.Anio , Director: req.body.Director, Duracion: req.body.Duracion});
            if (!userExists){
                await peliculas.save()
                console.log(peliculas)
                console.log("Pelicula registrada")
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
exports.getObtenerPeliculas = async (req,res)=>{
    const Pel = await Peliculas.find()
    console.log(Pel)
    res.json(Pel)
}
exports.postActualizarPeliculas = async (req,res)=>{
    // Filtro y cambio
    try {
        await Peliculas.findOneAndUpdate(req.body.filtro,req.body.cambio)
        console.log("Cambio realizado")
        res.json({operacion:"correcta"})
    }catch(err){
        console.log(err)
    }
}

exports.postBorrarPeliculas = async (req,res)=>{
    await Peliculas.findOneAndRemove(req.body)
    console.log("Pelicula eliminada")
    res.json({operacion:"correcta"})
}
