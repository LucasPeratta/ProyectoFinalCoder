const mongoose = require("mongoose");
const config = require("../../../config");

mongoose.connect(config.mongodb.cnxStr, config.mongodb.options);

class ContenedorCarrito {
  constructor(nombreColeccion, esquema) {
    this.coleccion = mongoose.model(nombreColeccion, esquema);
  }

  async getById(id) {
    return await this.coleccion.findById(id);
  }

  async save(carrito) {
    return await this.coleccion.create(carrito);
  }

  async deleteById(id) {
    return await this.coleccion.deleteOne({ _id: id });
  }

  async addProduct(idCarrito, idProduct) {
    console.log(idCarrito, idProduct);
    return await this.coleccion.updateOne(
      { _id: idCarrito },
      { $push: { productos: idProduct } }
    );
  }

  async deleteIdProduct(idCarrito, idProduct) {
    return await this.coleccion.updateOne(
      { _id: idCarrito },
      { $pull: { productos: idProduct } }
    );
  }
}

module.exports = ContenedorCarrito;
