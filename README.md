# Repositorio proyecto Shopping Cart con React

El proyecto fue creado mientras realizaba el curso de React 2023 de Midudev [Tienda y Carrito con React + Estado Global con useContext + Manejo de estado con useReducer](https://www.youtube.com/@midulive).

Este repositorio contiene el código de una aplicación de una tienda online, poder agregar o eliminar del carrito los productos listados. En el carrito poder aumentar o disminuir la cantidad de los productos y poder limpiar el carrito por completo.

- Desarrollada con React para manipulación del DOM y reactividad de la aplicación.
- Vite como empaquetador y SWC como transpilador.
- Uso de useContext para tener acceso al estado del carrito y los filtros en cualquier parte que se requiera en un conjunto de componentes que estén dentro del proveedor de dicho contexto evitando prop drilling.
- Uso de useReducer para manejar el estado del carrito.
- Uso de customHooks:
    - Para el manejo del contexto del carrito y los filtros.
    - Para manejar el reducer del carrito.
- Persistencia de datos del carrito con LocalStorage.

Puedes ver el demo aquí: (https://rolando22.github.io/shopping-cart/).

# Prueba técnica para Juniors con React. Enunciado

Ecommerce

- Muestra una lista de productos que vienen de un JSON
- Añade un filtro por categoría
- Añade un filtro por precio

Haz uso de useContext para evitar pasar props innecesarias.

Carrito:

- Haz que se puedan añadir los productos a un carrito.
- Haz que se puedan eliminar los productos del carrito.
- Haz que se puedan modificar la cantidad de productos del carrito.
- Sincroniza los cambios del carrito con la lista de productos.
- Guarda en un localStorage el carrito para que se recupere al recargar la página.
