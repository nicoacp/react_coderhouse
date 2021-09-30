import React, { useState } from 'react'
import {Button} from 'react-bootstrap/'
import "./ItemCount.css"

function ItemCount({stock=10 , initial=1 }) {
const [cantidad, setCantidad] = useState (initial)

function sumar() {
    if(cantidad <  stock) setCantidad(cantidad+1)

    }
    function restar() {
        if (cantidad > 0) setCantidad(cantidad - 1)
    }
    function onAdd(){
        alert("se agrego "+cantidad+" productos")
    }
    return (
        <>
        <div className="row">
            <div className="col-5"></div>
            <div className="col-2 borde"><h2>{cantidad}</h2></div>
        </div>
        <div className="m-2">
                <Button variant="outline-secondary m-1" onClick={restar}>-</Button>
                <Button variant="outline-secondary m-1" onClick={sumar}>+</Button>
                </div>        
                <Button variant="outline-secondary" onClick={onAdd}>agregar carrito</Button>
        
        </>
        
    )
}

export default ItemCount
