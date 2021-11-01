import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "react-router-dom";

//En este componente se retorna una card con un item y sus propiedades que provienen desde el componente ItemList, que a su vez provienen desde ItemListContainer, donde se obtuvieron desde un array
//este Item recibe como prop un item con propiedades, el cual desestructura para luego ir integrandolas de a una en el componente donde deben estar.

const Item = (props) => {
    const {id, title, description, price, pictureUrl} = props;

    return (


        <div className="col col-md-4" > 
            <div id={id} className="card border-dark text-center m-2" style={{ width: "18rem" }}>
                <img src={pictureUrl} className="card-img-top p-1" style={{ height: "18rem" }} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    {/* <p className="card-text">{description}</p> */}
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>${price}</strong></li>
                   {/* <li className="list-group-item">
                        <ItemCount stock="10" initial="1" />
                       </li>*/}
                </ul>
                <div className="card-body">
                 <Link to={`/item/${id}`} className="btn btn-secondary">
                      detalle
                </Link>
              </div>
            </div>
        </div>
    )
}

export default Item;