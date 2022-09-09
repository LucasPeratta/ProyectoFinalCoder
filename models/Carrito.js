const { log } = require("console");
const { promises: fs } = require("fs");
const Producto = require("./Producto");
const producto = new Producto("./models/productos.txt");

class Carrito {
  id = 1;
  constructor(ruta) {
    this.ruta = ruta;
  }

  async getAll() {
    try {
      const carritos = await fs.readFile(this.ruta, { encoding: "utf-8" });
      return JSON.parse(carritos);
    } catch (e) {
      return [];
    }
  }

  async getById(id) {
    let carritos = await this.getAll();
    let carrito = carritos.filter((o) => o.id == id);
    if (carrito.length == 0) {
      throw new Error(`No se puede obtener el carrito con el id: ${id}`);
    }
    return carrito[0];
  }

  async save(carrito) {
    let carritos = await this.getAll();
    const id = this.id++;
    const newCarrito = { timestamp: Date.now(), productos: [], ...carrito, id };

    let datos = [...carritos, newCarrito];

    try {
      await fs.writeFile(this.ruta, JSON.stringify(datos, null, 2));
    } catch (error) {
      throw new Error(`Error al guardar los datos ${error}`);
    }
  }

  async deleteById(id) {
    let carritos = await this.getAll();
    let carrito = carritos.filter((o) => o.id != id);
    try {
      if (carritos.length != carrito.length) {
        await fs.writeFile(this.ruta, JSON.stringify(carrito, null, 2));
      } else {
        console.error(`No se encontro el carrito con el id: ${id}`);
        throw new Error(`No se encontro el carrito con el id: ${id}`);
      }
    } catch (error) {
      console.error(`No se puede borrar ese carrito con el id: ${id}`);
      throw new Error(`No se puede borrar ese carrito con el id: ${id}`);
    }
  }

  async addProduct(idCarrito, idProduct) {
    let carritos = await this.getAll();

    let index = carritos.findIndex((o) => o.id == idCarrito);
    if (index == -1) {
      throw new Error(`No se puede encontrar el carrito `);
    }
    carritos[index].productos.push(idProduct);

    try {
      await fs.writeFile(this.ruta, JSON.stringify(carritos, null, 2));
    } catch (error) {
      console.error(error);
      throw new Error(
        `No se puede agregar el producto: ${idProduct} al carrito `
      );
    }
  }

  async deleteIdProduct(idCarrito, idProduct) {
    let carritos = await this.getAll();

    let i = carritos.findIndex((o) => o.id == idCarrito);
    if (i == -1) {
      throw new Error(`No se puede encontrar el carrito `);
    }

    let old = carritos[i].productos.length;

    carritos[i].productos = carritos[i].productos.filter(
      (id) => id != idProduct
    );

    if (old == carritos[i].productos.length) {
      throw new Error(
        `No se puede eliminar el producto: ${idProduct} del carrito `
      );
    }
    try {
      await fs.writeFile(this.ruta, JSON.stringify(carritos, null, 2));
    } catch (error) {
      console.error("Error al eliminar el producto");
      throw new Error(
        `No se puede eliminar el producto: ${idProduct} del carrito `
      );
    }
  }
}

module.exports = Carrito;
