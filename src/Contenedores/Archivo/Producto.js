const { promises: fs } = require("fs");

class ContenedorProductos {
  id = 1;
  constructor(ruta) {
    this.ruta = ruta;
  }

  async getAll() {
    try {
      let productos = await fs.readFile(this.ruta, { encoding: "utf-8" });
      return JSON.parse(productos);
    } catch (error) {
      return [];
    }
  }

  async getById(id) {
    let productos = await this.getAll();
    let producto = productos.filter((o) => o.id == id);
    if (producto.length == 0) {
      throw new Error(`No se puede obtener el producto con el id: ${id}`);
    }
    return producto[0];
  }

  async save(producto) {
    let productos = await this.getAll();
    const id = this.id++;
    const newproducto = {
      timestamp: Date.now(),
      ...producto,
      id,
    };

    let datos = [...productos, newproducto];

    try {
      await fs.writeFile(this.ruta, JSON.stringify(datos, null, 2));
    } catch (error) {
      throw new Error(`Error al guardar los datos ${error}`);
    }
  }

  async edit(id, producto) {
    let productos = await this.getAll();
    let index = productos.findIndex((o) => o.id == id);

    if (index == -1) {
      console.log("No se encontro el id deseado");
      throw new Error(`Error al editar el producto `);
    }

    productos[index] = { ...productos[index], ...producto };

    try {
      await fs.writeFile(this.ruta, JSON.stringify(productos, null, 2));
    } catch (error) {
      console.error(error);
      throw new Error(`Error al editar el producto`);
    }
  }

  async deleteById(id) {
    let productos = await this.getAll();
    let producto = productos.filter((o) => o.id != id);
    try {
      if (productos.length != producto.length) {
        await fs.writeFile(this.ruta, JSON.stringify(producto, null, 2));
      } else {
        throw new Error(`No se encontro el producto con el id: ${id}`);
      }
    } catch (error) {
      throw new Error(`No se puede borrar ese producto con el id: ${id}`);
    }
  }
}

module.exports = ContenedorProductos;
