import React ,{useState , useEffect} from 'react'
import ItemList from "../ItemList/ItemList";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"

const ItemListContainer = (props) => {
    const {greeting} = props;
//se inician estados
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [selectedItem, setSelectedItem] = useState(null);

  //array de objetos productos para realizar items
  const productos = [
      {id:1, title:"remera adidas",description:"remera1",price:4000,pictureUrl:"https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/faae2c37ab1d315e4b697a7f62b421b7/r/e/remera-adidas-entrenamiento-aeroready-3-tiras-verde-100020gk6129001-1.jpg"},
      {id:2,title:"remera nike",description:"remera2",price:4200,pictureUrl:"https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/faae2c37ab1d315e4b697a7f62b421b7/r/e/remera-nike-sportswear-club-negra-510020ar4997013-1.jpg"},
      {id:3,title:"zapatillas adidas",description:"zapatillas1",price:9000,pictureUrl:"https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/faae2c37ab1d315e4b697a7f62b421b7/z/a/zapatillas-running-adidas-duramo-sl-negra-19482438-100010fv8786001-1.jpg"},
      {id:4,title:"zapatillas nike",description:"zapatillas2",price:9500,pictureUrl:"https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/faae2c37ab1d315e4b697a7f62b421b7/z/a/zapatillas-running-nike-downshifter-11-negra-49455814-510010cw3411001-1.jpg"},
  ]
//asocio una promesa a productos que obtiene un objeto con los datos del array en forma diferida utilizando setTimeout
  const obtenerProductos = new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve(productos)
      reject("Hubo un error al obtener los datos del servidor")
    }, 2000)
  })
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
    <div>
      <h1>{greeting}</h1>
      {/*  Se muestra el mensaje de "cargando..." hasta que se recupere la informacion de la promesa y se vuelva a poner en false */}
      {loading && (
        <h1 style={{ color: "blue", fontSize: "3rem" }}>CARGANDO...</h1>)
      }
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

      {/* si error deja de ser null y pasa a contener algo se renderizara el mensaje de error que se encontrara dentro del estado error al haber sido seteado en el catch de la promesa por el fallo de la misma */}
      {error && <div>{error}</div>}
    </div>
  );
};

export default ItemListContainer