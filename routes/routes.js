const express = require("express");
const router = express.Router();

const productosRoutes = require("./productos");

router.use("/productos", productosRoutes);

module.exports = router;
