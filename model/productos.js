import ProductosModelMem from "./productos-mem.js"
import ProductosModelFile from "./productos-file.js"
import ProductosModelMongoDB from "./productos-mongodb.js"

class ProductosModel {
    static get(tipo) {
        switch(tipo) {
            case 'MEM':
                console.log('*****Persistencia en memoria*****')
                return new ProductosModelMem()
            case 'FILE':
                console.log('*****Persistencia en file system*****')
                return new ProductosModelFile()
            case 'MONGODB':
                console.log('*****Persistencia en MONGODB(productos)*****')
                return new ProductosModelMongoDB()

            default:
                console.log('*****Persistencia en memoria*****')
                return new ProductosModelMem()
        }
    }
}

export default ProductosModel