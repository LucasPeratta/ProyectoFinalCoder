const express = require("express");
const router = express.Router();

const productosRoutes = require("./productos");
const carritoRoutes = require("./carritos");

router.use("/productos", productosRoutes);
router.use("/carrito", carritoRoutes);

module.exports = router;
