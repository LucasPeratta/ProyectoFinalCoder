const config = require("../../../config.js");

let productosDao;

console.log(process.env.PERS);

switch (process.env.PERS) {
  case "json":
    const {
      default: ProductosDaoArchivo,
    } = require("./ProductosDaosArchivos.js");
    productosDao = new ProductosDaoArchivo(config.fileSystem.path);
    break;
  case "firebase":
    const {
      default: productosDaoFirebase,
    } = require("./productosDaoFirebase.js");
    productosDao = new productosDaoFirebase();
    break;

  default:
    const ContenedorDaoMongoDb = require("./ProductosDaosMongoDB");
    productosDao = new ContenedorDaoMongoDb();
    break;
}

module.exports = { productosDao };
