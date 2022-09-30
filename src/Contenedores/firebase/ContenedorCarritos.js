const admin = require("firebase-admin");
const config = require("../../../config.js");

admin.initializeApp({
  credential: admin.credential.cert(config.firebase),
});

const db = admin.firestore();

class ContenedorCarrito {
  constructor(nombreColeccion) {
    this.coleccion = db.collection(nombreColeccion);
  }

  async crearCarrito(nuevoCarrito) {
    let datosCarritoNuevo = {
      nombre: nuevoCarrito.nombre,
      codigo: Math.floor(Math.random() * 999999999),
      productos: [],
    };
    const carritoNuevo = await this.baseDatos.add(datosCarritoNuevo);
    return carritoNuevo;
  }

  async eliminarCarrito(idCarrito) {
    const carritoEliminar = await this.baseDatos.doc(idCarrito).delete();
    return carritoEliminar;
  }

  async obtenerCarritoPorId(idCarrito) {
    const carritoBuscar = this.baseDatos.doc(idCarrito);
    const carritoEncontrado = await carritoBuscar.get();
    const obtenerDataCarrito = carritoEncontrado.data();

    return obtenerDataCarrito;
  }

  async guardarProductosCarrito(idCarrito, productoAgregar) {
    let doc = this.baseDatos.doc(idCarrito);
    doc.update({
      productos: firestore.FieldValue.arrayUnion(productoAgregar),
    });
  }

  async eliminarProductosCarritos(idCarrito, productoEliminar) {
    let doc = this.baseDatos.doc(idCarrito);

    doc.update({
      productos: firestore.FieldValue.arrayRemove(productoEliminar),
    });
  }
}

module.exports = ContenedorCarrito;
