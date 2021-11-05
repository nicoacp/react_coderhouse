import React ,{useState , useEffect} from 'react'
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getFirestore } from '../../services/getFirebase';

const ItemListContainer = ({text,loading, setLoading, }) => {
  
//se inician estados
  const [items, setItems] = useState([])

  const { id: idCategoria } = useParams();

//llamado a firestore asincrono y onMount/cambio de categoria
useEffect(() => {
  const getItems = async () => {
    setLoading(true);
    const { docs } = await getFirestore().collection("productos").get();
    const arrayCompleto = docs.map((item) => ({
      id: item.id,
      ...item.data(),
    }));

    if (idCategoria) {
      const filtrarCategoria = arrayCompleto.filter(
        (item) => item.categoria === idCategoria
      );
      setItems(filtrarCategoria);
      setLoading(false);
    } else {
      setItems(arrayCompleto);
      setLoading(false);
    }
  };
  getItems();
  // eslint-disable-next-line
}, [idCategoria]);

return (
  <div className="container text-center">
    <h1 className="text-center py-2">{text}</h1>

    {loading ? loading : <ItemList items={items} />}
  </div>
);
};

export default ItemListContainer