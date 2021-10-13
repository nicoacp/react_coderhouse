import React ,{useState , useEffect} from 'react'
import ItemList from "../ItemList/ItemList";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"
import { useParams } from "react-router-dom";
import productos from '../data/productos';

const ItemListContainer = ({text, setLoading, setError }) => {
  
//se inician estados
  const [items, setItems] = useState([])
  const [selectedItem, setSelectedItem] = useState(null);

  const { id: idCategoria } = useParams();

  const getItems = new Promise ((resolve, reject) => {
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
      .then(response => {
        setItems(response)
      })
      .catch(err => {
        setError(err)
      })
    setLoading(false)
  }, [])
  //se crea un metodo que recibe como parametro un item y setea el estado de selected item con el contenido de dicho item >> para saber que item es el seleccionado
  const selectItem = (item) => setSelectedItem(item);

  return (
    <div className="container text-center">
      <h1 className="text-center py-2">{text}</h1>
      {/* En este renderizado condicional se mostrara >> En caso de que se selecione un item y selectedItem tenga contenido, se renderizara el ItemDetailContainer al cual se le va  apasar la informacion de dicho item para que lo renderize y en caso de que no se seleccione nada (selectedItem == null) se renderizara la lista de items */}
      {!selectedItem ? (
        <ItemList items={items} selectItem={selectItem} />
      ) : (
        <ItemDetailContainer
          selectedItem={selectedItem}
          selectItem={selectItem}
          setError={setError}
          setLoading={setLoading}
        />
      )}
    </div>
  );
};

export default ItemListContainer