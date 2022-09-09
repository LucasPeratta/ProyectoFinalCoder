const express = require("express");
const router = express.Router();

const {
  carritosGetALL,
  carritoGetProductsById,
  carritosSave,
  carritoDeleteByid,
  carritoSaveByIdProduct,
  carritoDeleteProduct,
} = require("../controllers/carritoControllers");

// router.get("/", carritosGetALL);
router.get("/:id/productos", carritoGetProductsById);
router.post("/", carritosSave);
router.post("/:id/productos", carritoSaveByIdProduct);
router.delete("/:id", carritoDeleteByid);
router.delete("/:id/productos/:id_prod", carritoDeleteProduct);

module.exports = router;
