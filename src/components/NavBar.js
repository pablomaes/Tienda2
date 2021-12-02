import { AppBar } from "@material-ui/core";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { Wrapper, Logo, MenuItem, Left, Center, Right } from './styledComponents';

const NavBar = () => {
    return (
        <AppBar position="relative">
            <Wrapper>
                <Left>
                    <Link to='/' style={{textDecoration: "none", color: "white"}}><Logo>Encuentro Infusiones</Logo></Link>
                </Left>
                <Center>
                    <Link to='/' style={{textDecoration: "none", color: "white"}}><MenuItem>Productos</MenuItem></Link>
                    <Link to='/category/1' style={{textDecoration: "none", color: "white"}}><MenuItem>Utensillos</MenuItem></Link>
                    <Link to='/category/2' style={{textDecoration: "none", color: "white"}}><MenuItem>Combos</MenuItem></Link>                    
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem><Link to='/cart' style={{textDecoration: "none", color: "white"}}><CartWidget /></Link></MenuItem>
                </Right>
            </Wrapper>
        </AppBar>
    );
}

export default NavBar;