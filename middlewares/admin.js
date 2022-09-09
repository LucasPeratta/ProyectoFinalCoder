const isAdmin = (req, res, next) => {
  const admin = req.body.admin;
  if (admin != null) {
    next();
  } else {
    const method = req.method;
    const url = req.originalUrl;
    res.status(401).send({
      error: "-1",
      descripcion: `ruta ${url} metodo ${method} no autorizado`,
    });
  }
};

module.exports = { isAdmin };
