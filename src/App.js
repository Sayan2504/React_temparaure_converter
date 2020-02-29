import React, { useState } from 'react';
import './App.css';
import Centigrade from './form/conversion'

const App = () =>{
  const[celcuis, setCelcius] = useState();
  const[farhenheit, setFarhenheit] = useState();

  const Fcalculation = (text) =>{
    setFarhenheit(
      (text * 9/5) + 32
    )
    return farhenheit;
  };

  const Ccalculation = () =>{

  };
  
  return(
    <div className="form">
      <h2>Centigrade to Farhenheit</h2>
      <Centigrade Fcalculation={Fcalculation} Ccalculation={Ccalculation} farhenheit={farhenheit}/>
    </div>
  );
}

export default App;
