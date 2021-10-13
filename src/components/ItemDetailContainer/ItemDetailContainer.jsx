import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import productos from "../data/productos";
import { useParams } from "react-router-dom";

const ItemDetailContainer = ({selectedItem,
    selectItem,
    setLoading,
    setError, }) => {
    //Se inicializ el estado local item en 'null'
    const [item, setItem] = useState(null);
    const { id: itemId } = useParams();
  
  const getItems = new Promise((resolve, reject) => {
    const idProducto = productos.find((item) => item.id === parseInt(itemId));
    setTimeout(() => {
      resolve(idProducto);
      reject("Hubo un error al seleccionar el item");
    }, 2000);
  });
 //se establece que al montar el componente, mediante una funcion asincrona se espere a que se obtenga la informacion que se guardara en la variable "getItem" para setear el estado de item con la info recibida y volver a loading al estado de "false"
 useEffect(async () => {
    setLoading(true);
    await getItems
      .then((response) => setItem(response))
     .catch((err) => setError(err));
     setLoading(false);
    }, [itemId]);
  //se retorna el componente <ItemDetail/> habiendole pasado como props el item seleccionado y el metodo selectItem para luego poder utilizarlo para setear el estado de "selectedItem" a "null" para que el estado de "Item" pase a null y no se renderize mas <ItemDetail/>
  return (
    <div className="row text-center">
      {item && <ItemDetail {...item} selectItem={selectItem} />}
    </div>
  );
 };
 export default ItemDetailContainer;