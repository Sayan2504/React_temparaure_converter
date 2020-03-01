import React, { useState } from 'react';
import './App.css';
import Conversion from './form/conversion'

const App = () =>{
  const[celcius, setCelcius] = useState("");
  const[farhenheit, setFarhenheit] = useState("");
  

  const resetC =() =>{
    setCelcius("");
  };


  const resetF =() =>{
    setFarhenheit("");
  };


  const resetAll =() =>{
    setFarhenheit("");
    setCelcius("");
  };
  
  return(
    <div className="form">
      <h2>Centigrade to Farhenheit</h2>
      <Conversion resetC={resetC} resetF={resetF} resetAll={resetAll} />
    </div>
  );
}

export default App;
