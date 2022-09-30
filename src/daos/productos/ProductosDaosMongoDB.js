const ContenedorProductos = require("../../Contenedores/mongoDB/ContenedorProductos");

class ProductosMongoDB extends ContenedorProductos {
  constructor() {
    super("productos", {
      nombre: { type: String, required: true },
      precio: { type: String, required: true },
      garantia: { type: String, required: true },
    });
  }
}

module.exports = ProductosMongoDB;
