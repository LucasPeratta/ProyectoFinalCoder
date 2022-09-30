const ContenedorCarrito = require("../../Contenedores/mongoDB/ContenedorCarritos.js");

class CarritosDaoMongoDB extends ContenedorCarrito {
  constructor() {
    super("carritos", {
      nombre: { type: String, required: true },
      productos: { type: Array, required: true },
    });
  }
}

module.exports = CarritosDaoMongoDB;
