const config = require("../../../config.js");

let carritos;

switch (process.env.PERS) {
  case "json":
    const { default: CarritosDaoArchivo } = require("./CarritoDaosArchivos.js");
    carritos = new CarritosDaoArchivo(config.fileSystem.path);
    break;
  case "firebase":
    const {
      default: CarritosDaoFirebase,
    } = require("./CarritosDaosFireBase.js");
    carritos = new CarritosDaoFirebase();
    break;
  default:
    const CarritosDaoMongoDB = require("./CarritosDaosMongoDB.js");
    carritos = new CarritosDaoMongoDB();
    break;
}

module.exports = { carritos };
