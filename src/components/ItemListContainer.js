import { render } from "@testing-library/react";
import Itemcount from "./ItemCount";
import "./styles.css";

const ItemListContainer = ({titulo}) => {
    return (<>
      <div>      
     <h1>{titulo}</h1>
     </div>
         <Itemcount stock = {10} initial = {1} />  


     
      </>  
    )
}; 

render(<ItemListContainer titulo="Encuentro Infusiones"/>,
document.getElementById('root'));




  


