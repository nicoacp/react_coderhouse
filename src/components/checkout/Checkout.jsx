import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useCartContext } from "../CartContext/CartContext";
import { getFirestore } from "../../services/getFirebase";
import { Link } from "react-router-dom";
import swal from 'sweetalert';

const Checkout = () => {
  //se traen las variables que necesitamos utilizar del CartContext
  const { cartList, setCartList, totalPrice } = useCartContext();

  //se crean estados locales que se van a utilizar para almacenar datos que se van a almacenar luego en la base de datos
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  //se crea la funcion que guarda la info en la base de datos y setea los estados nuevamente a vacios
  const setOrders = async (e) => {
    //funcion que previene la actualizacion de la pagina
    e.preventDefault();

    //verificacion de que ningun campo quede vacio
    if (name === "" || phone === "" || email === "") {
      setError("Falta completar algun dato");
    } else {
      //se crea la variable que contendra el objeto "order" y como sera su composicion
      const order = {
        buyer: {
          name: name,
          phone: phone,
          email: email,
        },
        items: cartList.map((elemento) => {
          return {
            id: elemento.item.id,
            title: elemento.item.title,
            price: elemento.item.price,
            quantity: elemento.quantity,
          };
        }),
        total: totalPrice,
      };

      //se especifica en que coleccion de firestore guardar la orden
      try {
        await getFirestore()
          .collection("orders")
          .add(order)
          //en el caso de que funcione se especifica que devuelva el id del elemento para mostrarlo en una alerta
          .then((resultado) => {
            swal(`Su numero de orden es ${resultado.id}
                Gracias por su compra`);
          });
      } catch (e) {
        //en el caso de que no funcione marcara un error
        console.log(e);
      }

      //setea todos los estados a sus valores iniciales para poder realizar otra orden
      setPhone("");
      setName("");
      setEmail("");
      setCartList([]);

      //remueve el carrito del sessionStorage al finalizar la compra
      window.sessionStorage.removeItem("cart");
    }
  };

  return (
    <>
      {/* Si cartList contiene algun elemento te muestra el formulario para poder finalizar la compra y guardar en la base de datos, si no te muestra un boton que te redirecciona a la lista de productos */}
      {cartList.length > 0 ? (
        <div className="container">
          <div className="row">
            <div className="card col-6 mx-auto my-5">
              <form className="my-4" onSubmit={setOrders}>
                <div className="mb-3">
                  <label htmlFor="nameInput" className="form-label">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nameInput"
                    placeholder="Ingrese su nombre"
                    style={{ width: "25rem" }}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="numberInput" className="form-label">
                    Teléfono
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="numberInput"
                    placeholder="Ingrese su telefono"
                    style={{ width: "25rem" }}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="emailInput" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="emailInput"
                    placeholder="Ingrese su email"
                    style={{ width: "25rem" }}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-success mb-3">
                  Confirmar Compra
                </button>
                {/* muestra un mensaje de error en caso de que falta completar algun dato */}
                {error && (
                  <p
                    className="mt-2 text-center"
                    style={{ color: "red", fontSize: "1.5 rem" }}
                  >
                    {error}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <Link to="/">
            <button className="btn btn-success my-3">Volver al Inicio</button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Checkout;
