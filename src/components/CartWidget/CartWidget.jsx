import React from 'react'
import { Badge } from 'react-bootstrap';
import { FiShoppingCart } from "react-icons/fi";

function CartWidget({cantidad}) {
    return (
            <>
            <FiShoppingCart />
            <span bg="danger">{cantidad}</span>
            </> 
    )
}

export default CartWidget
