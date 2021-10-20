import React from "react";
import { useCartContext } from "../CartContext/CartContext"

const Cart = () => {
  const { cartList } = useCartContext();
  console.log(cartList);
  return (
    <>
      <h1>CARRITO</h1>
      {cartList.map((item) => (
        <h2 key={item.item.id}>{item.item.title}</h2>
      ))}
    </>
  );
};

export default Cart;