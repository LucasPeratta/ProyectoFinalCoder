const Producto = require("../models/Producto");
const producto = new Producto("./models/productos.txt");

const productosGetAll = (req, res) => {
  producto
    .getAll()
    .then((objetos) => res.json(objetos))
    .catch((error) => res.json([]));
};

const productosGetById = ({ params }, res) => {
  const id = params.id;
  producto
    .getById(id)
    .then((obj) => {
      res.json(obj);
    })
    .catch((error) => {
      res.send({ error: -2, descripcion: error.message });
    });
};

const productosSave = (req, res) => {
  producto
    .save(req.body)
    .then((oj) => {
      res.send({ msg: "El producto ha sido creado" });
    })
    .catch((error) => {
      res.send({ error: -2, descripcion: error.message });
    });
};

const productoEdit = (req, res) => {
  producto
    .edit(req.params.id, req.body)
    .then(() => {
      res.send({ msg: "producto modificado con exito" });
    })
    .catch((error) => {
      res.send({ error: -2, descripcion: error.message });
    });
};

const productoDelete = ({ params }, res) => {
  const id = params.id;
  producto
    .deleteById(id)
    .then(() => {
      res.send({ msg: "Producto eliminado con exito" });
    })
    .catch((error) => {
      res.send({ error: -2, descripcion: error.message });
    });
};

module.exports = {
  productosGetAll,
  productosGetById,
  productosSave,
  productoEdit,
  productoDelete,
};
