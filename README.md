# Ejercicio de Programación: Caso Tienda Online

### 1. Primer reto: Mostrar los productos de la tienda

**Descripción:**

Actualmente, no contamos con un servicio web para obtener los productos, pero pronto lo implementaremos. Mientras tanto, necesitamos mostrar los productos que tenemos en memoria y permitir que los usuarios los vean para iniciar sus compras.

Este ejercicio nos ayudará a familiarizarnos con el DOM y las APIs del navegador.

### 2. Agregar productos al carrito

**Historia de usuario (HU):**

Como usuario de la tienda, necesito poder agregar productos al carrito y verlos reflejados en el detalle. Además, debo poder ver el total actualizado de mi compra.

**Criterios de aceptación:**

Al hacer clic en el botón "Agregar al carrito" de cada producto, este debe añadirse a la lista de detalles en la sección del carrito.

El total a pagar debe actualizarse cada vez que se agrega un producto al carrito.

### 3. Eliminar productos del carrito

**Historia de usuario (HU):**
Como usuario de la tienda, necesito poder quitar productos que he agregado al carrito.

**Criterios de aceptación:**

Agregar un botón para eliminar el producto, ubicado al lado de cada ítem del carrito.

Al hacer clic en el botón de eliminación, el producto debe ser removido del carrito.

El total debe actualizarse automáticamente después de la eliminación de un producto.

### 4. Validación de productos al ingresar al carrito

**Historia de usuario (HU):**
Como usuario de la tienda, quiero que, si agrego el mismo producto más de una vez al carrito, solo se muestre una entrada en el detalle del carrito para evitar confusiones.

**Criterios de aceptación:**

Si un producto ya existe en el carrito y se intenta agregar de nuevo, no debe añadirse otro ítem, sino que debe aumentar la cantidad del producto existente en el carrito.

La eliminación del producto se realizará en su totalidad. Por ejemplo, si tengo 6 unidades de un producto (como las gorras) y decido eliminarlo, se eliminarán todas las unidades a la vez.

La lógica para calcular el total debe seguir funcionando correctamente, tomando en cuenta las cantidades de productos.

## Consideraciones adicionales:

Todos los cambios deben reflejarse de manera instantánea en la interfaz, sin necesidad de recargar la página.

Se debe garantizar que el total refleje correctamente el valor de los productos y cualquier cambio realizado.
