import CarritoModelMongoDB from "./carrito-mongodb.js"

class CarritoModel {
    static get(tipo) {
        switch(tipo) {
            case 'MONGODB':
                console.log('*****Persistencia en MONGODB(carrito)*****')
                return new CarritoModelMongoDB()

            default:
                console.log('*****Persistencia en MONGODB(carrito)*****')
                return new CarritoModelMongoDB()
        }
    }
}

export default CarritoModel