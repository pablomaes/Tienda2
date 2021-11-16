import { useState } from "react"

const Itemcount = (props) => {
    const [cantidad, setCantidad] = useState(1); 
    const increment = () => { if ( cantidad < props.stock) setCantidad(cantidad+1)}
    const decrement = () => { if (cantidad > 1) setCantidad(cantidad-1)}
    const agregar = () => {cantidad === 1 ?
         console.log (`Se agregó al carrito ${cantidad} unidad`)
         :console.log (`Se agregaron al carrito ${cantidad} unidades`);  
        }
       
    return (
        
            <div>
                <button className="btn btn-dark" onClick = {decrement}>-</button>
                {cantidad}
                <button className="btn btn-dark" onClick ={increment}>+</button>
                <button className="btn btn-primary" onClick= {agregar}>Agregar</button>
             </div>
    
        
        );

}

export default Itemcount;
