import Item from "./Item";

const ItemList = ({items}) => {

     return ( <>
             {  
               items.length > 0             
               ? items.map(u => <Item key={u.id} id={u.id} image={u.image[0]} nombre={u.nombre} stock={u.stock} cost={u.cost} info = {u.info} />)
               : <p>Cargando...</p>
                            
              }  
              </>
                   

            ); 
}               
  

  

export default ItemList;





  
