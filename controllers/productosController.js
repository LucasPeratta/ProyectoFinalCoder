const productos = [
  {
    nombre: "Milanesas",
    precio: 700,
  },
  {
    nombre: "Mayonesa",
    precio: 400,
  },
  {
    nombre: "Talco",
    precio: 300,
  },
];

const productosGet = (req, res) => {
  res.json({ msg: "get API - productos", datos: productos, estado: 1 });
};

const productosPost = (req, res) => {
  res.json({ msg: "post API - productos", datos: productos, estado: 1 });
};

module.exports = { productosGet, productosPost };
