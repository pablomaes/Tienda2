import ItemCount from './ItemCount';
import React from 'react';
import setState from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { useState } from 'react';

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


const ItemDetail = ({ item }) => {
  const [itemCount, setItemCount] = useState(0);

  const onAdd = (qty) => {
    alert("You have selected " + qty + " items.");
    setItemCount(qty);
}  

    return (
        <>
        { 
            item && item.image
            ? 
            <div className="styleCard">
            <img width = {300} src={item.image[0]} alt ="" />
                   
            <div className="styleCardContent">
            <h5 className="styleCardCtitle"> {item.nombre}  </h5>
            <h6 className="styleStock"> Stock: {item.stock} </h6>
            <h6 className="styleCost"> Precio: ${item.cost} </h6>
            <n></n>
            <ItemInfo
            info= {item.info}

            />
            <n></n>
            {
            itemCount === 0
            ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
            : <Link to='/cart' style={{textDecoration: "none"}}><Button variant="contained" color="secondary">Ir al carrito</Button></Link>
            }
            </div>
            </div>
            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;










