import React from "react";
import Card from "./ItemList";
import { products } from './Item';


let is_stock = true;

let Production =( {timeout, task} ) => {
        return new Promise((resolve, reject) => {
        if (is_stock) {
            setTimeout(() => {
                resolve( task )
            }, timeout);
        } else {
            reject("Error")
        }
    })
}

function ItemEvent(props) {
    const eventsList = props.data.map(event => (
      <Card
        key={event.id}  
        image={event.image}
        nombre={event.nombre}
        stock={event.stock}
        cost={event.cost}
      />
    ));
  
    return <div>{eventsList}</div>;
    
  };


Production(0,console.log("Cargando datos..."))
    .then (()=>Production(8000, ItemEvent  ))
    .then (()=>Production(2000, console.log("Datos Cargados")))
    .catch((err)=>console.log(err))

    .finally(()=>console.log("Hasta la próxima!"));

export default Production;  




  
