import React from "react";

function CardImage(props) {
  
    return (
      <div>
        <img
          style={{ width: props.width + "px" }}
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

export default class Card extends React.Component {

  render() {
    return (
      <div style={{ width: this.props.width + "px" }}>
        <div className="styleCard" id={this.props.id}>
          <CardImage
            image={this.props.image}
            width={this.props.width}
          />
          <CardContent
            title={this.props.title}
            nombre={this.props.nombre}
            stock={this.props.stock}
            cost={this.props.cost}
          />
        </div>
      </div>
    );
  }
}

Card.defaultProps = {
  width: 350,
  nombre: "",
  stock: "",
  cost: ""
};
