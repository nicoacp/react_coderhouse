import NavBar from "./components/NavBar/NavBar"
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from "./components/Cart/Cart"
import { CartContextProvider } from "./components/CartContext/CartContext";
import Checkout from "./components/checkout/Checkout";

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  return (
    <>
    <CartContextProvider>
    <Router>
     <NavBar />
       {/* Se muestra el mensaje de "cargando..." hasta que se recupere la informacion de la promesa y se vuelva a poner en false */}
       {loading && (
         <div className="d-flex justify-content-center m-3">
         <strong>CARGANDO...</strong>
         <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
        </div>
          )}
     <Switch>
       <Route exact path="/">
          <ItemListContainer text="Productos"
          loading={loading}
          setLoading={setLoading}
          error={error}
          setError={setError}/>
        </Route>
        <Route path="/categoria/:id">
            <ItemListContainer
              loading={loading}
              setLoading={setLoading}
              error={error}
              setError={setError}
            />
        </Route>
        <Route path="/item/:id">
            <ItemDetailContainer
              loading={loading}
              setLoading={setLoading}
              error={error}
              setError={setError}
            />
          </Route>
          
          {/* Ruta que lleva del boton 'terminar compra' al componente carrito */}
          <Route  path="/cart">
            <Cart />
          </Route>
          <Route path="/checkout">
              <Checkout />
            </Route>
     </Switch>
      {/* si error deja de ser null y pasa a contener algo se renderizara el mensaje de error que se encontrara dentro del estado error al haber sido seteado en el catch de la promesa por el fallo de la misma */}
      {error && <div>{error}</div>}
       
    </Router>
    </CartContextProvider>
    </>
  );
}

export default App;
