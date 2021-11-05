import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../services/getFirebase";

const ItemDetailContainer = ({ setLoading, }) => {
    const [item, setItem] = useState([]);
    const { id: itemId } = useParams();

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
    // eslint-disable-next-line
  }, [itemId]);
  //se retorna el componente <ItemDetail/> habiendole pasado como props el item seleccionado
  return <ItemDetail item={item}/>
};
 export default ItemDetailContainer;