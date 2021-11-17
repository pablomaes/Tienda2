import React from "react";
import Card from "./ItemList";



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

export default ItemEvent;





  
