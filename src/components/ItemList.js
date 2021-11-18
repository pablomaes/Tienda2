import React from "react";
import "./styles.css";

function CardImage(props) {
  
    return (
      <div>
        <img
          width = {300}
          src={props.image}
          alt=""
        />
      </div>
    );

}

function CardContent(props) {
  return (
    <div className="styleCardContent">
      <p className="styleCardTitle">{props.nombre}</p>
      <p className="styleStock">Stock: {props.stock} unidades</p>
      <p className="styleCost">Precio: ${props.cost}</p>
      <button>Agregar al carrito</button>
    </div>
  );
}

 const Card = ({width, nombre, stock, cost, image }) => {
  return (  
      <>
      <div>
        <div className="styleCard">
          <CardImage
            image={image}
            width = {width}
          />
          <CardContent
            nombre={nombre}
            stock={stock}
            cost={cost}
          />
        </div>
      </div>
      </>
    );
  
}
export default Card;
