import Card from "./ItemList";

const ItemEvent = ({items}) => {

     return ( <>
             {  
               items.length > 0             
               ? items.map(u => <Card key={u.id} image={u.image} nombre={u.nombre} stock={u.stock} cost={u.cost} info = {u.info} />)
               : <p>Cargando...</p>
                            
              }  
              </>
                   

            ); 
}               
  

  

export default ItemEvent;





  
