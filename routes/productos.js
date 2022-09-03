const express = require("express");
const router = express.Router();

const {
  productosGet,
  productosPost,
} = require("../controllers/productosController");

router.get("/", productosGet);
router.post("/", productosPost);

module.exports = router;
