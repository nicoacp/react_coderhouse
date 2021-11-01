import React ,{useState , useEffect} from 'react'
import ItemList from "../ItemList/ItemList";
//import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"
import { useParams } from "react-router-dom";
//import productos from '../data/productos';
import { getFirestore } from '../../services/getFirebase';

const ItemListContainer = ({text,loading, setLoading, setError }) => {
  
//se inician estados
  const [items, setItems] = useState([])

  const { id: idCategoria } = useParams();
// //asi se obtendrian los datos del .json, filtrados por categoria, con una promesa
/*   const getItems = new Promise ((resolve, reject) => {
    setTimeout(() => {
      if (idCategoria) {
        const filtroCategoria = productos.filter(
          (item) => item.categoria === idCategoria
        );
        resolve(filtroCategoria);
      } else {
        resolve(productos);
      }
      reject("Hubo un error al traer los items");
    }, 2000);
  });

  useEffect(async () => {
    setItems([]);
    setLoading(true);
    await getItems
      .then((response) => setItems(response))
      .catch((err) => setError(err));
    setLoading(false);
  }, [idCategoria]);

   //Se asocia a la variable "obtenerproductos" una promesa que obtiene un objeto con los datos de del array de objetos en forma diferida utilizando setTimeout
   const obtenerProductos = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos);
      reject("Hubo un error al obtener los datos del servidor");
    }, 2000);
  });

 //Se utiliza useEffect para realizar un efecto de montaje que emita un llamado asincronico a un objeto que devuelve una promesa con un conjunto de items >> si la promesa retorna fullfilled se seteara el estado "items" con lo que haya en "productos", si retorna rejected se seteara "error" con el mensaje "Hubo un error al obtener los datos del servidor"
//Ademas se le agrega el estado "loading" que se mostrara al hacerse true hasta que se obtengan los datos del array y vuelva a ponerse en false
useEffect( async () => {
    setLoading(true)
    await obtenerProductos
      .then(data => {
        setItems(data)
      })
      .catch(err => {
        setError(err)
      })
    setLoading(false)
  }, []) */
  
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
}, [idCategoria]);

return (
  <div className="container text-center">
    <h1 className="text-center py-2">{text}</h1>

    {loading ? loading : <ItemList items={items} />}
  </div>
);
};

export default ItemListContainer