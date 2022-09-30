const admin = require("firebase-admin");
const config = require("../../../config.js");

admin.initializeApp({
  credential: admin.credential.cert(config.firebase),
});

const db = admin.firestore();

class ContenedorProductos {
  constructor(nombreColeccion) {
    this.coleccion = db.collection(nombreColeccion);
  }

  async getById(id) {
    const productoRef = this.baseDatos.doc(id);
    const response = await productoRef.get();
    const productoAenviar = response.data();

    return productoAenviar;
  }

  async getAll() {
    const response = await this.baseDatos.get();
    const responseArray = [];
    response.forEach((doc) => {
      responseArray.push(doc.data());
    });
    return responseArray;
  }

  async save(nuevoElem) {
    const nuevoProducto = await this.baseDatos.add(datos);
    return nuevoProducto;
  }

  async update(nuevoElem) {
    const nuevoProducto = await this.baseDatos.doc(id).update(nuevosDatos);
    return nuevoProducto;
  }

  async deleteById(id) {
    const productoAeliminar = await this.baseDatos.doc(id).delete();
    return productoAeliminar;
  }

  async desconectar() {}
}

module.exports = ContenedorProductos;
