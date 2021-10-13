import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemCount from "../ItemCount/ItemCount";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

 const ItemDetail = (props) => {
    const { id, title, description, price, pictureUrl, selectItem } = props;

    const history = useHistory();
  
    const closeDetail = () => history.goBack();

  //retorna una card con todos los datos del item seleccionado
    return (
        <div className="row">
        <div
          id={id}
          className="card border-dark text-center m-auto "
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
              <ItemCount stock="10" initial="1" />
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