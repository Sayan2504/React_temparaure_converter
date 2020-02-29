import React, {useState} from 'react'

const Conversion = ({Fcalculation, Farhenheit, Ccalculation, Celcius}) =>{
    const[text, setText] = useState("");

    const changeText = (e) =>{
        setText(e.target.value);
    };

    return(
        <div>
            <input type="text" value={changeText} value={Ccalculation(text)}  placeholder="Enter centigrade temp" onChange={changeText}/>
            <button onClick={(e)=>{
                    e.preventDefault();
                    Farhenheit(text);
                }}>Change to Farhenheit</button>
            <br/>
            <input type="text" value={changeText} value={Fcalculation(text)} placeholder="Enter Farhenheit temp" onChange={changeText}/>
            <button onClick={(e)=>{
                    e.preventDefault();
                    Celcius(text);
                }}>Change to Celcius</button>
            <br/>
        </div>
    )
   
}

export default Conversion;