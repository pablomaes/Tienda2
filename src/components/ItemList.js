import Item from "./Item";

const ItemList = ({items}) => {

     return ( <>
             {  
               items.length > 0             
               ? items.map(item => <Item key={item.id} id={item.id} nombre={item.nombre} cost={item.cost} image={item.image[0]} stock={item.stock} />)
               : <p>Cargando...</p>
                            
              }  
              </>
                   

            ); 
}               
  

  

export default ItemList;





  
