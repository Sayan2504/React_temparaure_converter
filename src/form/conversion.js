import React, {useState} from 'react'

const Conversion = ({resetC, resetF, resetAll}) =>{
    const[textC, setTextC] = useState("");
    const[textF, setTextF] = useState("");

    const cToF = (e) =>{
        setTextC(e.target.value)
        setTextF((textF * 9/5) + 32)   
    }

    const fToC = (e) =>{
        setTextF(e.target.value)
        setTextC((textC - 32) * (5/9))
    }

    return(
        <div>
            <input type="text" value={textC} placeholder="Enter Centigrade temp" onChange={cToF}/>
            <button onClick={(e)=>{
                    e.preventDefault();
                    resetC();
                    }}>Reset</button>
            <br/>



            <br/><br/><br/>
            <input type="text" value={textF} placeholder="Enter Farhenheit temp" onChange={fToC}/>
            <button onClick={(e)=>{
                    e.preventDefault();
                    resetF();
                    }}>Reset</button>
            <br/>



            <br/><br/>
            <button onClick={(e)=>{
                    e.preventDefault();
                    resetAll();
                    }}>Reset all</button>
        </div>
    );
   
}

export default Conversion;