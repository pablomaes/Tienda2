import { useEffect, useState } from "react";
import customFetch from "./utils/CustomFetch";
import ItemEvent from "./ItemEvent";
const { products } = require('./utils/Item');


const ItemListContainer = () => {
    const [dato, setDato] = useState({});

    useEffect(() => {
        customFetch(2000, products)
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, []);
    
    return (
        <ItemEvent items={dato} />
    );
}

export default ItemListContainer;