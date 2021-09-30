import React from 'react'
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = (props) => {
    const {greeting} = props;
    return (
        <><h1>{greeting}</h1>
        <ItemCount />
        </>
    )
}

export default ItemListContainer