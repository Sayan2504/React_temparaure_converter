import React, { useState } from 'react';
import './App.css';
import Conversion from './form/conversion'

const App = () =>{
  const[textC, setTextC] = useState("");
  const[textF, setTextF] = useState("");
  const[textK, setTextK] = useState("");


  const Cval =(e1) =>{
    setTextC(e1.target.value)
  };
  
  const Fval =(e2) =>{
    setTextF(e2.target.value)
  };

  const Kval =(e3) =>{
    setTextK(e3.target.value)
  };

  const cToF = (text) =>{
    setTextF(Math.round((text * (9/5)) + 32));
  };

  const cToK = (text) =>{
    setTextK(Math.round(text + 273 ));
  };

  const fToC = (text) =>{
    setTextC(Math.round((text - 32) * (5/9)));
  };

  const fToK = (text) =>{
    setTextK(Math.round(((text - 32) * (5/9)) + 273));
  };

  const kToC = (text) =>{
    setTextC(Math.round(text - 273));
  };

  const kToF = (text) =>{
    setTextF(Math.round(((text - 273) * (9/5)) + 32));
  };

  const resetC = () =>{
    setTextC("");
  };

  const resetF = () =>{
    setTextF("");
  };

  const resetK = () =>{
    setTextK("");
  };

  const resetAll = () =>{
    setTextC("");
    setTextF("");
    setTextK("");
  };
  
  
  return(
    <div className="form">
      <h2>Temparature Conversion</h2>
      <Conversion Fval={Fval} Cval={Cval} Kval={Kval} textC={textC} textF={textF} textK={textK} resetC={resetC} resetF={resetF} resetK={resetK} cToF={cToF} cToK={cToK} fToC={fToC} fToK={fToK} kToC={kToC} kToF={kToF} resetAll={resetAll}/>
    </div>
  );
}

export default App;
