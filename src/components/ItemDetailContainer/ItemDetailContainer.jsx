import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = ({selectedItem,
    selectItem,
    setLoading,
    setError, }) => {
    //Se inicializ el estado local item en 'null'
    const [item, setItem] = useState(null);
     //se asigna una variable en respuesta a una promesa que al resolverse traera la informacion del item seleccionado de ItemListContainer que viene por props despues de 2 segundos de retraso
  const getItem = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(selectedItem);
      reject("Hubo un error al seleccionar el item");
    }, 2000);
  });
 //se establece que al montar el componente, mediante una funcion asincrona se espere a que se obtenga la informacion que se guardara en la variable "getItem" para setear el estado de item con la info recibida y volver a loading al estado de "false"
 useEffect(async () => {
    setLoading(true);
    await getItem
      .then((item) => {
        setItem(item);
      })
      .catch((err) => {
        setError(err);
      });
    setLoading(false);
  }, []);
  //se retorna el componente <ItemDetail/> habiendole pasado como props el item seleccionado y el metodo selectItem para luego poder utilizarlo para setear el estado de "selectedItem" a "null" para que el estado de "Item" pase a null y no se renderize mas <ItemDetail/>
  return (
    <div className="row text-center">
      {item && <ItemDetail {...item} selectItem={selectItem} />}
    </div>
  );
 };
 export default ItemDetailContainer;