import React, {useState, useEffect} from 'react'

const Conversion = ({resetC, resetF, resetAll}) =>{
    const[textC, setTextC] = useState("");
    const[textF, setTextF] = useState("");

    const cToF = (e1) =>{
        setTextC(e1.target.value)
    };

    useEffect(() =>{
        if(textC){
            setTextF((textC * (9/5)) + 32);
        }
        if(textF){
            setTextC((textF - 32) * (5/9));
        }
    }, [textC, textF] );


    const fToC = (e2) =>{
        setTextF(e2.target.value)  
    };

   

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