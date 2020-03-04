import React, { useState } from 'react';
import './App.css';
import Conversion from './form/conversion'

const App = () =>{
  const[textC, setTextC] = useState("");
  const[textF, setTextF] = useState("");
  


  const Cval =(e1) =>{
    setTextC(e1.target.value)
  };
  
  const Fval =(e2) =>{
    setTextF(e2.target.value)
  };

  const cToF = (text) =>{
    setTextF(Math.round((text * (9/5)) + 32));
  };


  const fToC = (text) =>{
    setTextC(Math.round((text - 32) * (5/9)));
  };


  const resetC = () =>{
    setTextC("");
  };

  const resetF = () =>{
    setTextF("");
  };


  const resetAll = () =>{
    setTextC("");
    setTextF("");
  };
  
  
  return(
    <div className="form">
      <h2>Temparature Conversion</h2>
      <Conversion Fval={Fval} Cval={Cval} textC={textC} textF={textF}resetC={resetC} resetF={resetF} cToF={cToF} fToC={fToC} resetAll={resetAll}/>
    </div>
  );
}

export default App;
