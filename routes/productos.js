const express = require("express");
const router = express.Router();
const { isAdmin } = require("../middlewares/admin");

const {
  productosGetAll,
  productosGetById,
  productosSave,
  productoEdit,
  productoDelete,
} = require("../controllers/productosController");

router.get("/", productosGetAll);
router.get("/:id", productosGetById);
router.post("/", isAdmin, productosSave);
router.put("/:id", isAdmin, productoEdit);
router.delete("/:id", isAdmin, productoDelete);

module.exports = router;
