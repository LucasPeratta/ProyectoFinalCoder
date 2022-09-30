const ContenedorProductos = require("../../Contenedores/Archivo/Producto.js");

class ProductosDaoArchivo extends ContenedorProductos {
  constructor(ruta) {
    super(`${ruta}/productos.json`);
  }
}

module.exports = ProductosDaoArchivo;
