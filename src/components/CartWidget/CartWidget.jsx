import React from 'react'
import { FiShoppingCart } from "react-icons/fi";

function CartWidget({cantidad}) {
    return (
            <>
            <FiShoppingCart size={20} />
            <span >{cantidad}</span>
            </> 
    )
}

export default CartWidget
