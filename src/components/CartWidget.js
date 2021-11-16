import logo from "../components/assets/img/logo.jpeg"

function CartWidget () {
    return (
        <>
            <nav className="navbar navbar-light bg-light">
               <a className="navbar-brand">
                <img src = {logo} alt ="logo" className= {"img-thumbnail"} width= {150} />
               </a>
            </nav>
          
        </>
    )
};

export default CartWidget;


