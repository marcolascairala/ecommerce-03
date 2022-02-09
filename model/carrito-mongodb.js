import mongoose from 'mongoose'
import DB_Mongo from '../model/DB_Mongo.js'

//------------------------------------
//Esquema del documento carrito
const carritoSchema = mongoose.Schema({
    carrito : Array
})

//Model del documento almacenado en una coleccion
const CarritoModel = mongoose.model('carritos', carritoSchema)


class CarritoModelMongoDB {
    /* ----------------- CRUD Create --------------- */
    async createCarrito(carrito){
        if(!DB_Mongo.conexionOk) return {}

        try {
            const carritoSave = new CarritoModel({carrito: carrito})
            await carritoSave.save()

            return carrito
        }
        catch(error) {
            console.log(`Error en createCarrito: ${error.message}`)
            return {}
        }
    }
}

export default CarritoModelMongoDB