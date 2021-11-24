import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';

//import Production from './components/ItemEvent';
//import { products } from './components/Item';

function App() {
  return (
        <>

        <div>
            <NavBar/>
        </div>

        <div>      
       <ItemDetailContainer  />
     </div> 

        </>
         );}

export default App;


