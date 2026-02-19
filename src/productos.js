export const Productos = [
  { id: 1, nombre: "Camiseta", precio: 300, stock: 10 },
  { id: 2, nombre: "Pantalón", precio: 700, stock: 5 },
  { id: 3, nombre: "Gorra", precio: 200, stock: 20 },
];

// API DOM
// windows: Api del navegador, acceder a camara, localizacion, notificaciones, microfono etc
// document: Manipular el contenido de la pagina, crear elementos, eliminar, modificar, etc

export function generarElementoProducto(producto) {
  const contenedor = document.createElement("article");
  // classList: Manipula las clases css de un elemento, agregar, eliminar, toggle, etc
  contenedor.classList.add(
    "producto",
    "bg-white",
    "shadow-md",
    "rounded-lg",
    "p-4"
  );

  const nombre = document.createElement("h3");
  nombre.classList.add("producto-nombre", "text-xl", "font-semibold");
  nombre.innerText = producto.nombre;

  const precio = document.createElement("p");
  precio.classList.add("producto-precio", "text-lg", "text-gray-600");
  precio.innerText = `$${producto.precio}`;

  const botonAgregar = document.createElement("button");
  botonAgregar.classList.add(
    "btn-agregar",
    "bg-blue-500",
    "text-white",
    "py-2",
    "px-4",
    "rounded",
    "mt-4",
    "hover:bg-blue-600"
  );
  botonAgregar.innerText = "Agregar al carrito";

  contenedor.appendChild(nombre);
  contenedor.appendChild(precio);
  contenedor.appendChild(botonAgregar);

  /*
  Con las líneas anteriores esperamos que este sea el resultado:
  <article class="...">
    <h3 class="...">Camiseta</h3>
    <p class="...">$300</p>
    <button class="...">
      Agregar al carrito
  </article>
  */

  return contenedor;
}
