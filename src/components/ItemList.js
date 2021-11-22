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

class ItemDetail extends React.Component {
  constructor(props) {
      super(props);
      this.state = { showInfo: false };
  }

  render() {
      return (
        <div>
          <button onClick={() => this.setState({ showInfo: true })}>Información del producto</button>
          {this.state.showInfo && (
            <p> {this.props.info} </p>
          )}
        </div>
      );
    }
  }

  const Card = ({width, nombre, stock, cost, image,info }) => {
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
            info= {info}
          />
        </div>
      <div className="styleInfo">
          <ItemDetail
            info= {info}
          />
      </div>
      </div>
      </>
    );
  
}
export default Card;
