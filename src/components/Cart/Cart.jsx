import React from "react";
import { useCartContext } from "../CartContext/CartContext"
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Accordion} from "react-bootstrap";

const Cart = () => {
  const { cartList, clearCart, removeItem, totalPrice } = useCartContext();

  return (
    <div className="container text-center">
      <h1 className="display-1">Carrito de compras</h1>
      {cartList.length > 0 ? (
        <>
          <Accordion defaultActiveKey="0">
            {cartList.map((item) => {
              return (
                <Accordion.Item key={item.item.id} eventKey="0"> 
                  <Accordion.Header>{item.item.title}</Accordion.Header>
                  <Accordion.Body>
                      <button
                        className="btn bg-danger"
                        //cuando se clickea se ejecuta una funcion que llama a "removeItem" con parametro el id del item a remover
                        onClick={() => removeItem(item.item.id)}
                      >
                        Eliminar Producto
                      </button>
                      <h3>Precio: $ {item.item.price} </h3>
                      <h3>Descripción: {item.item.description} </h3>
                      <img
                        src={item.item.pictureUrl}
                        className="card-img-top p-1 m-auto"
                        style={{ width: "18rem" }}
                        alt="..."
                      />
                 </Accordion.Body>
                 </Accordion.Item>
                
              );
            })}
           </Accordion>
           <div className="row">
            <p className=" col-6 my-3 mx-auto" style={{ fontSize: "2rem" }}>
              Total del carrito: ${totalPrice}
            </p>
            <button
              className="btn bg-warning my-3 col-4 mx-auto"
              onClick={clearCart}
            >
              Vaciar Carrito
            </button>
          </div>
          <div>
            <Link to="/Checkout">
              <button
                className="btn bg-success my-3 col-6 mx-auto py-3"
              >
                Finalizar Compra
              </button>
            </Link>
          </div>
        </>
      ) : (
        <Link to="/">
          <button className="btn btn-success my-3">
            El carrito no contiene items
          </button>
        </Link>
      )}
    </div>
  );
};

export default Cart;