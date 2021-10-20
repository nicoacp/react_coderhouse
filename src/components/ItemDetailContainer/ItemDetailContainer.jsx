import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import productos from "../data/productos";
import { useParams } from "react-router-dom";

const ItemDetailContainer = ({ setLoading,setError, }) => {
    const [item, setItem] = useState([]);
    const { id: itemId } = useParams();
  
  const getItems = new Promise((resolve, reject) => {
    setTimeout(() => {
    const idProducto = productos.find((item) => item.id === parseInt(itemId));
      resolve(idProducto);
      reject("Hubo un error al seleccionar el item");
    }, 2000);
  });
 useEffect(async () => {
    setLoading(true);
    await getItems
      .then((response) => setItem(response))
     .catch((err) => setError(err));
     setLoading(false);
    }, [itemId]);
  //se retorna el componente <ItemDetail/> habiendole pasado como props el item seleccionado
  return <ItemDetail item={item}/>
};
 export default ItemDetailContainer;