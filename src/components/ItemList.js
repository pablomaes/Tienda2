import ItemDetail from "./ItemDetail";

const ItemList = ({items}) => {

     return ( <>
             {  
               items.length > 0             
               ? items.map(u => <ItemDetail key={u.id} image={u.image} nombre={u.nombre} stock={u.stock} cost={u.cost} info = {u.info} />)
               : <p>Cargando...</p>
                            
              }  
              </>
                   

            ); 
}               
  

  

export default ItemList;





  
