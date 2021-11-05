# SPORTSHOP E-COMMERCE

### APLICACION PARA CURSO DE REACT JS DE CODERHOUSE

#### DEMO
[Sportshop App](https://elegant-hermann-8ea4a7.netlify.app/).

#### características

. Ecommerce de indumentaria deportiva
. 3 categorias: camisetas , zapatillas , pantalones
. Cada item tiene un boton que renderiza el detalle del mismo desde el cual a traves del contador podras agregar cierta cantidad de items al carrito de compras o volver a la lista de productos.
. Al presionar el boton "agregar al carrito" se renderiza otro boton que te dirige al detalle del carrito.
. En el detalle del carrito se encuentra una lista con los diferentes items icluidos en el _(nombre, imagen y precio)_ y el valor total de la compra.
. Desde el detalle del carrito se podria eliminar un tipo de item, vaciar el carrito completo o finalizar la compra _(boton que te dirigira al formulario para ingresar los datos e incluirlos en la orden de compra)_.
. Si el carrito esta vacio renderiza un boton que te dirige al inicio.
. Al agregar items al carrito se guardan en el sessionStorage y al finalizar la compra luego de haber completado los datos del formulario se borra el sessionStorage.
. Al finalizar la compra se genera la orden de compra asociada a un ID.
#### Lenguajes , tecnologias y Librerias utilizadas

- HTML
- CSS
- JavaScript
- React Js
  1- props
  2- hooks
  3- context
  4- states
  5- Conditional rendering
- React-Router
- Firestore Database _(se realizó guardado de documentos y llamada para obtención de información)_
- Firebase 8.9.1
- Bootstrap 5.1.1
- React-bootstrap 2.0.0-rc.0
- Sweetalert 2.1.2
- React-icons 4.2.0
