const { carritos } = require("../src/daos/carritos/index.js");

const carritoGetProductsById = ({ params }, res) => {
  const id = params.id;
  carritos
    .getById(id)
    .then((carrito) => {
      res.json(carrito.productos);
    })
    .catch((error) => {
      res.send({ error: -2, descripcion: error.message });
    });
};

const carritosSave = (req, res) => {
  carritos
    .save(req.body)
    .then(() => {
      res.send({ msg: "El carrito ha sido creado" });
    })
    .catch((error) => {
      res.send({ error: -2, descripcion: error.message });
    });
};

const carritoDeleteByid = ({ params }, res) => {
  const id = params.id;
  carritos
    .deleteById(id)
    .then(() => {
      res.send({ msg: "El carrito ha sido eliminado correctamente" });
    })
    .catch((error) => {
      res.send({ error: -2, descripcion: error.message });
    });
};

const carritoSaveByIdProduct = async (req, res) => {
  const idCarrito = req.params.id;
  const idProduct = req.body.id;
  carritos
    .addProduct(idCarrito, idProduct)
    .then(() => {
      res.send({ msg: "Carrito modificado con exito" });
    })
    .catch((error) => {
      res.send({ error: -2, descripcion: error.message });
    });
};

const carritoDeleteProduct = async (req, res) => {
  const idCarrito = req.params.id;
  const idProduct = req.params.id_prod;
  carritos
    .deleteIdProduct(idCarrito, idProduct)
    .then(() => {
      res.send({
        msg: `Producto con id ${idProduct} eliminado con exito del carrito ${idCarrito}`,
      });
    })
    .catch((error) => {
      res.send({ error: -2, descripcion: error.message });
    });
};

module.exports = {
  carritoGetProductsById,
  carritosSave,
  carritoDeleteByid,
  carritoSaveByIdProduct,
  carritoDeleteProduct,
};
