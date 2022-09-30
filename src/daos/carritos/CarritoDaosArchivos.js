const ContenedorCarrito = require("../../contenedores/Archivo/Carrito.js");

class CarritosDaoArchivo extends ContenedorCarrito {
  constructor(ruta) {
    super(`${ruta}/carrito.json`);
  }
}

module.exports = CarritosDaoArchivo;
