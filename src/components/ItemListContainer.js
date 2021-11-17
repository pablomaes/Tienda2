//import { render } from "@testing-library/react";
//import Itemcount from "./ItemCount";
import ItemEvent from "./ItemEvent";
import "./styles.css";
import {products} from "./Item";
import { pedirDatos } from "./Promises";
import React, { useEffect, useState } from "react"

const ItemListContainer = () => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect( ()=> {
      setLoading(true)

      pedirDatos()
      .then(res => setData(res))
      .catch(err => console.log(err))
      .finally(()=> {
          setLoading(true)
      })
  }, [])

  return (
      <>
      {loading ? <h2>Cargando...</h2>
      : <ItemEvent products={data}/>
      }
      </>
  )

}
export default ItemListContainer;






  


