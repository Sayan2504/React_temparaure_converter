import React, { useState } from 'react';
import './App.css';
import Centigrade from './form/conversion'

const App = () =>{
  const[celcius, setCelcius] = useState();
  const[farhenheit, setFarhenheit] = useState();

  const Farhenheit = (text) =>{
    text = parseInt(text)
    setFarhenheit(
      (text * 9/5) + 32
    );
  };

  const Fcalculation = () =>{
    return farhenheit;
  };

  const Celcius = (text) =>{
    text = parseInt(text)
    setCelcius(
      (text -32) * (5/9)
    );
  };

  const Ccalculation = (text) =>{
    return celcius;
  };
  
  return(
    <div className="form">
      <h2>Centigrade to Farhenheit</h2>
      <Centigrade Fcalculation={Fcalculation} Farhenheit={Farhenheit} Ccalculation={Ccalculation} Celcius={Celcius}/>
    </div>
  );
}

export default App;
