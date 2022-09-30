const ContenedorCarrito = require("../../Contenedores/firebase/ContenedorCarritos.js");

class CarritosDaoFirebase extends ContenedorCarrito {
  constructor() {
    super("personas");
  }
}

module.exports = CarritosDaoFirebase;
