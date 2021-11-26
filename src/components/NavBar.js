import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { Right } from "./styledComponents";
function NavBar () {
    return (
          <>
            <CartWidget/>
            <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
              <Link to='/'  className="navbar-brand" >Tienda de té </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
                </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <Link to='/'  className="nav-link" >Productos</Link>
                  <Link to='/category/1' className="nav-link" >Utensillos</Link>
                  <Link to='/category/2' className="nav-link" >Combos</Link>
                </div>
              </div>
              </div>
            </nav>
            </div>
            <Right>
              <Badge badgeContent={1} color="secondary">
              <ShoppingCartOutlined />
            </Badge>
            </Right>
            </>
            );}
            


export default NavBar;