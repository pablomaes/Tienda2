import ItemCount from './ItemCount';
import React from 'react';
import setState from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'

//function CardImage(props) {
//  
//    return (
//      <div>
//        <img
//          width = {300}
//          src={props.image}
//          alt=""
//        />
//      </div>
//    );
//
//}
//
//function CardContent(props) {
//  return (
//    <div className="styleCardContent">
//      <p className="styleCardTitle">{props.nombre}</p>
//      <p className="styleStock">Stock: {props.stock} unidades</p>
//      <p className="styleCost">Precio: ${props.cost}</p>
//      <button>Agregar al carrito</button>
//      </div>
//  );
//}
//
class ItemInfo extends React.Component {
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
//
//  const ItemDetail = ({width, nombre, stock, cost, image,info }) => {
//  return (  
//      <>
//      <div>
//        <div className="styleCard">
//          <CardImage
//            image={image}
//            width = {width}
//          />
//          <CardContent
//            nombre={nombre}
//            stock={stock}
//            cost={cost}
//            info= {info}
//          />
//        </div>
//      <div className="styleInfo">
//          <ItemInfo
//            info= {info}
//          />
//      </div>
//      </div>
//      </>
//    );
//  
//}
//export default ItemDetail;

const ItemDetail = ({ item }) => {

    return (
        <>
        { 
            item.image
            ? 
            <div className="styleCard">
            <img width = {300} src={item.image[0]} />
                   
            <div className="styleCardContent">
            <h5 className="styleCardCtitle"> {item.nombre}  </h5>
            <h6 className="styleStock"> Stock: {item.stock} </h6>
            <h6 className="styleCost"> Precio: ${item.cost} </h6>
            <ItemInfo
            info= {item.info}

            />
            </div>
            </div>
            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;










