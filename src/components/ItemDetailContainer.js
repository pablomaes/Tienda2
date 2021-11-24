import { useEffect, useState } from "react";
import customFetch from "./utils/CustomFetch";
import ItemDetail from "./ItemDetail";
const { products } = require('./utils/products');


const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});

    useEffect(() => {
        customFetch(2000, products[0])
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, []);
    
    return (
        <ItemDetail item = {dato} />
    );
}

export default ItemDetailContainer;