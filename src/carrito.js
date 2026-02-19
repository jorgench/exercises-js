export class ItemDeCarrito {
  constructor(producto) {
    this.producto = producto;
    this.cantidad = 1;
  }

  obtenerTotal() {
    // TODO
  }
}

export class Carrito {
  constructor(elementoDeDetalle, elementoTotal) {
    this.items = [];
    this.elementoDeDetalle = elementoDeDetalle;
    this.elementoTotal = elementoTotal;
  }

  agregarProducto(ItemDeCarrito) {
    // TODO
    this.mostrarCarrito();
  }

  eliminarProducto(ItemDeCarritoId) {
    // TODO
    this.mostrarCarrito();
  }

  obtenerTotal() {
    // TODO
  }

  mostrarCarrito() {
    // TODO
    this.items.forEach((item) => {
      this.elementoDeDetalle.addChild(item);
    });
  }
}

function crearObjetoDeLista(contenido) {
  const li = document.createElement("li");
  li.classList.add("carrito-item", "text-lg");
  li.innerText = contenido;
  return li;
}

function crearElementoDeDetalle(ItemDeCarrito) {
  return crearObjetoDeLista("");
}
