import React, {useState} from 'react'

const Conversion = ({Fcalculation, Farhenheit, Ccalculation, Celcius, resetF, resetC, resetAll}) =>{
    const[textC, setTextC] = useState("");
    const[textF, setTextF] = useState("");

    const changeTextC = (e) =>{
        setTextC(e.target.value);
    };

    const changeTextF = (e) =>{
        setTextF(e.target.value);
    };

    return(
        <div>
            <input type="text" value={textC} value={Ccalculation(textC)}  placeholder="Enter Centigrade temp" onChange={changeTextC}/>
            <button onClick={(e)=>{
                    e.preventDefault();
                    Farhenheit(textC);
                }}>Change to Farhenheit</button>
            <button onClick={(e)=>{
                    e.preventDefault();
                    resetC();
                    }}>Reset</button>


            <br/>
            <input type="text" value={textF} value={Fcalculation(textF)} placeholder="Enter Farhenheit temp" onChange={changeTextF}/>
            <button onClick={(e)=>{
                    e.preventDefault();
                    Celcius(textF);
                }}>Change to Celcius</button>
            <button onClick={(e)=>{
                    e.preventDefault();
                    resetF();
                    }}>Reset</button>


            <br/>
            <button onClick={(e)=>{
                    e.preventDefault();
                    resetAll();
                    }}>Reset all</button>
        </div>
    )
   
}

export default Conversion;