import React, { useState } from 'react';
import './App.css';
import CentigradeToFarenheit from './form/centiToFarh'
import FarenheitToCentigrade from './form/farhToCenti'

const App = () =>{
  const[textC, setTextC] = useState("");
  const[textF, setTextF] = useState("");


  const Cval =(e1) =>{
    setTextC(e1.target.value)
  }
  
  const Fval =(e2) =>{
    setTextF(e2.target.value)
  }

  const cToF = (text) =>{
    setTextF((text * (9/5)) + 32);
  }

  const fToC = (text) =>{
    setTextC((text - 32) * (5/9));
  }

  const resetC = () =>{
    setTextC("");
  }

  const resetF = () =>{
    setTextF("");
  }
  
  
  return(
    <div className="form">
      <h2>Temparature Conversion</h2>
      <CentigradeToFarenheit resetC={resetC} Cval={Cval} textC={textC} cToF={cToF}/>
      <br/><br/>
      <FarenheitToCentigrade resetF={resetF} Fval={Fval} textF={textF} fToC={fToC}/>
    </div>
  );
}

export default App;
