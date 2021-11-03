import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { FiShoppingCart } from "react-icons/fi";
import { useCartContext } from "../CartContext/CartContext"
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { cartProducts } = useCartContext();
    return (
        <>
           <Link to="/cart">
            <button className="btn btn-light">
            <FiShoppingCart size={20} />
            &nbsp;
            {cartProducts > 0 ? (
                <span className="badge bg-secondary">{cartProducts}</span>
            ) : (
                ""
            )}
        </button>
        </Link>
            </> 
    );
};

export default CartWidget
