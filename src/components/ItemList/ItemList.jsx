import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Item from "../Item/Item"

const ItemList = ({items}) => (
    //en este componenete solo se retorna un div con clase row >> dentro de el se mapea dentro de llaves {JSX} que, por cada elemento que haya en cada posicion del objeto pasado por props (que sabemos que es un array de objetos), se cree un componente Item que obtenga como propiedad ese item utilizado en esa iteracion/ en esa posicion.
   <div className="row">
        { items.map((item) => (
                <Item {...item} key={item.id} />
            )) }
    </div>
);

export default ItemList;