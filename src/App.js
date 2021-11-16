import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from "./components/ItemListContainer";
import Production from './components/ItemEvent';
import { products } from './components/Item';

function App() {
  return (
        <>

        <div>
            <NavBar/>
        </div>

        <div className="App">
      <Production  data= {products} />
       </div>
        </>
         );}

export default App;
