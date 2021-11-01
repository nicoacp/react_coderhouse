import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
//import productos from "../data/productos";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../services/getFirebase";

const ItemDetailContainer = ({ setLoading,setError, }) => {
    const [item, setItem] = useState([]);
    const { id: itemId } = useParams();

/*   // //asi se llamaria a los items del .json con promesas
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
    }, [itemId]); */
  //se retorna el componente <ItemDetail/> habiendole pasado como props el item seleccionado

  //llamada a firestone
  useEffect(() => {
    const getItem = async () => {
      setLoading(true);
      const { docs } = await getFirestore().collection("productos").get();
      const nuevoArray = docs.map((item) => ({ id: item.id, ...item.data() }));
      const itemEncontrado = nuevoArray.find((item) => item.id === itemId);
      setItem(itemEncontrado);
      setLoading(false);
    };
    getItem();
  }, [itemId]);
  //se retorna el componente <ItemDetail/> habiendole pasado como props el item seleccionado
  return <ItemDetail item={item}/>
};
 export default ItemDetailContainer;