const mongoose = require("mongoose");
const config = require("../../../config");

mongoose.connect(config.mongodb.cnxStr, config.mongodb.options);

class ContenedorProductos {
  constructor(nombreColeccion, esquema) {
    this.coleccion = mongoose.model(nombreColeccion, esquema);
  }

  async getById(id) {
    return await this.coleccion.findById(id);
  }

  async getAll() {
    return await this.coleccion.find();
  }

  async save(nuevoElem) {
    return await this.coleccion.create(nuevoElem);
  }

  async edit(id, nuevoElem) {
    console.log(nuevoElem);
    return await this.coleccion.updateOne({ _id: id }, nuevoElem);
  }

  async deleteById(id) {
    return await this.coleccion.deleteOne({ _id: id });
  }
}

module.exports = ContenedorProductos;
