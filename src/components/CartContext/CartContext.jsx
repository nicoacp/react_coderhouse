import { createContext, useContext, useState } from "react";

export const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  //Estado que se encarga de almacenar al carrito
  const [cartList, setCartList] = useState([]);

  console.log(cartList);

  //agregarItem agrega item al carrito
  const agregarItem = (item, quantity) => {
    if (isInCart(item.id)) {
      const updateQty = [...cartList]; //crea una copia de carrito para hacer un mapeo y sumarle la cantidad al producto en caso de ya estar agregado

      updateQty.map((element) => {
        if (element.item.id === item.id) {
          element.quantity += quantity;
        }
      });
      setCartList(updateQty); // actualiza el carrito con la cantidad
      window.sessionStorage.setItem("cart", JSON.stringify(updateQty));
    } else {
      const carro = [...cartList, { item, quantity }];
      setCartList(carro); // si el producto no esta en el carrito lo agrega
      window.sessionStorage.setItem("cart", JSON.stringify(carro));
    }
  };

  //isInCart chequea si el producto esta o no en el carrito
  const isInCart = (id) => cartList.find((element) => element.item.id === id);

  //funcion que borra todos los items del carro
  const clearCart = () => setCartList([]);

  //funcion que remueve un tipo de item del carrito
  const removeItem = (id) => {
    const cartFilter = cartList.filter((element) => element.item.id !== id);
    setCartList(cartFilter);
  };

  //cartProducts suma la cantidad total de productos que hay en el carrito
  const cartProducts = cartList.reduce(
    (acc, product) => (acc += product.quantity),
    0
  );

  //console.log("carrito", cartList);

  return (
    <CartContext.Provider
      value={{
        cartList,
        agregarItem,
        setCartList,
        clearCart,
        removeItem,
        cartProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
