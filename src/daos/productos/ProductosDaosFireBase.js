const ContenedorProductos = require("../../Contenedores/firebase/ContenedorProductos");

class PersonasDaoFirebase extends ContenedorProductos {
  constructor() {
    super("personas");
  }
}

module.exports = PersonasDaoFirebase;
