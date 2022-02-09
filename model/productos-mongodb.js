import mongoose from 'mongoose'
import DB_Mongo from '../model/DB_Mongo.js'

//------------------------------------
//Esquema del documento producto
const productoSchema = mongoose.Schema({
    nombre : String,
    precio: Number,
    stock: Number,
    referencia : String,
    foto: String,
    descripcion : String,
    descripcionCorta : String,
    envio : Boolean, 
})

//Model del documento almacenado en una coleccion
const ProductoModel = mongoose.model('productos', productoSchema)


class ProductosModelMongoDB {
    /* ----------------- CRUD Create --------------- */
    async createProducto(producto){
        if(!DB_Mongo.conexionOk) return {}

        try {
            const productoSave = new ProductoModel(producto)
            await productoSave.save()

            let productos = await ProductoModel.find({}).lean()
            let productosGuardado = productos[productos.length-1]

            return DB_Mongo.genIdKey(productosGuardado)
        }
        catch(error) {
            console.log(`Error en createProducto: ${error.message}`)
            return {}
        }
    }

    /* ----------------- CRUD Read One --------------- */
    async readProducto(id){
        if(!DB_Mongo.conexionOk) return {}

        try {
            let producto = await ProductoModel.findOne({_id:id}).lean()
            
            return DB_Mongo.genIdKey(producto)
        }
        catch(error) {
            console.log(`Error en readProducto: ${error.message}`)
            return {}
        }
    }

    /* ----------------- CRUD Read All --------------- */
    async readProductos() {
        if(!DB_Mongo.conexionOk) return []

        try {
            let productos = await ProductoModel.find({}).lean()

            return DB_Mongo.genIdKey(productos)
        }
        catch(error) {
            console.log(`Error en readProductos: ${error.message}`)
            return {}
        }
    }

    /* ----------------- CRUD Update One --------------- */
    async updateProducto(id, producto){
        if(!DB_Mongo.conexionOk) return {}

        try {
        await ProductoModel.updateOne({_id:id},{$set:producto})

            let productoActualizado = await ProductoModel.findOne({_id:id}).lean()

            return DB_Mongo.genIdKey(productoActualizado)
        }
        catch(error) {
            console.log(`Error en updateProducto: ${error.message}`)
            return {}
        }

    }

    /* ----------------- CRUD Delete One--------------- */
    async deleteProducto(id){
        if(!DB_Mongo.conexionOk) return {}

        try {
            let productoBorrado = await ProductoModel.findOne({_id:id}).lean()
            await ProductoModel.deleteOne({_id:id})
            return DB_Mongo.genIdKey(productoBorrado)
        }
        catch(error) {
            console.log(`Error en updateProducto: ${error.message}`)
            return {}
        }

    }
}

export default ProductosModelMongoDB