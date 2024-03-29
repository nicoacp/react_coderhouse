import React, { useState } from 'react'
import {Button} from 'react-bootstrap/'
import "bootstrap/dist/css/bootstrap.min.css";

const ItemCount = (props)=> {
const { stock, initial,onAdd  } = props;
const [cantidad, setCantidad] = useState(parseInt (initial));

  const sumar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1)
    }
  };
  const restar = () => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1)
    }
  };
    return (
        <>
         <div className="input-group mb-3">
                <Button variant="outline-secondary m-1" onClick={restar}>-</Button>
                <input  className="form-control text-center" placeholder={cantidad} aria-label="Example text with button addon" aria-describedby="button-addon1" />
                <Button variant="outline-secondary m-1" onClick={sumar}>+</Button>
        </div>        
        <Button variant="warning" onClick={() => onAdd(cantidad)}>agregar carrito</Button> 
        </>
        
    )
}

export default ItemCount
