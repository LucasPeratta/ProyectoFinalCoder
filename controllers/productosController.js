const { productosDao } = require("../src/daos/productos/index.js");

const productosGetAll = (req, res) => {
  productosDao
    .getAll()
    .then((objetos) => res.json(objetos))
    .catch((error) => res.json([]));
};

const productosGetById = ({ params }, res) => {
  const id = params.id;
  productosDao
    .getById(id)
    .then((obj) => {
      res.json(obj);
    })
    .catch((error) => {
      res.send({ error: -2, descripcion: error.message });
    });
};

const productosSave = (req, res) => {
  productosDao
    .save(req.body)
    .then((oj) => {
      res.send({ msg: "El producto ha sido creado" });
    })
    .catch((error) => {
      res.send({ error: -2, descripcion: error.message });
    });
};

const productoEdit = (req, res) => {
  productosDao
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
  productosDao
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
