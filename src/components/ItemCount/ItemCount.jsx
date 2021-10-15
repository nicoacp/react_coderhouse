import React, { useState } from 'react'
import {Button} from 'react-bootstrap/'
import "./ItemCount.css"

const ItemCount = (props)=> {
const { stock, initial, cartItems, setCartItems  } = props;
const [cantidad, setCantidad] = useState (initial)

function sumar() {
    if(cantidad <  stock) setCantidad(cantidad+1)

    }
    function restar() {
        if (cantidad > 0) setCantidad(cantidad - 1)
    }
    function onAdd(){
        if ( cantidad > 0 && cantidad <= stock){
        alert("se agrego "+cantidad+" productos");
        setCartItems(cartItems + cantidad);
    }
    else{
        alert("NO SE AGREGARON ITEMS AL CARRITO");
    }
    }
    return (
        <>
        <div className="input-group mb-3">
                <Button variant="outline-secondary m-1" onClick={restar}>-</Button>
                <input  className="form-control text-center" placeholder={cantidad} aria-label="Example text with button addon" aria-describedby="button-addon1" />
                <Button variant="outline-secondary m-1" onClick={sumar}>+</Button>
        </div>        
        <Button variant="warning" onClick={onAdd}>agregar carrito</Button>
        
        </>
        
    )
}

export default ItemCount
