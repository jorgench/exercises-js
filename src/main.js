import "./style.css";

import { Productos, generarElementoProducto } from "./productos";

const contenedorProductos = document.getElementById("contenedor-productos");
Productos.forEach((product) => {
  const elementoProducto = generarElementoProducto(product);
  contenedorProductos.appendChild(elementoProducto);
});

//setupCounter(document.querySelector('#counter'))
