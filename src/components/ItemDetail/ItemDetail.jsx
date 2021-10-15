import React, { useState }  from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemCount from "../ItemCount/ItemCount";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

 const ItemDetail = (props) => {
    const { id, title, description, price,stock, pictureUrl, selectItem } = props;

    const history = useHistory();

    const [cartItems, setCartItems] = useState(null);
  
    const closeDetail = () => history.goBack();

  //retorna una card con todos los datos del item seleccionado
    return (
        <div className="row">
        <div
          id={id}
          className="card border-dark text-center m-auto mt-3 mb-3"
          style={{ width: "22rem" }}
        >
          <img
            src={pictureUrl}
            className="card-img-top p-1 m-auto"
            style={{  width: "18rem" }}
            alt="..."
          />
  
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
          </div>
  
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>${price}</strong>
            </li>
            <li className="list-group-item">
            {cartItems ? (
              <Link exact to="/cart">
              <button className="btn btn-success">
                Terminar mi compra
              </button>
            </Link>
            ) : (
              <ItemCount 
              stock={stock}
               initial="1" 
               cartItems={cartItems}
               setCartItems={setCartItems}
               />
              )}
            </li>
          </ul>
  
          <div>
            <button onClick={closeDetail} className="btn btn-danger w-50 p-1 m-2">
              Cerrar Detalle
            </button>
          </div>
        </div>
      </div>
    )
}
export default ItemDetail;