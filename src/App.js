
import React,{useEffect, useState} from "react";
import imagenes from './components/Imagenes';

function App() {
const [datos, setDatos] =useState([]);
  const ACCSESS_POINT="https://rickandmortypi.com/api/character";
  const getDatos = (url) => {
    fetch(url)
    .then (data => {
      return data.json ();
      })
      .then(data=>{
        setDatos(data.results);
      })
      .catch(error=>{
        console.log(error);
      });
    }

    useEffect(() => {
      getDatos(ACCSESS_POINT);
      //return () => {};
    }, []);

      return (
    <div>
      <h1>imagenes datos={datos}</h1>
    </div>
  );
}

export default App
