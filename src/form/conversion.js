import React, {useState} from 'react'

const Conversion = ({Fcalculation, Ccalculation}) =>{
    const[text, setText] = useState("");

    const changeText = (e) =>{
        setText(e.target.value);
    };

    return(
        <div>
            <input type="text" value={Ccalculation(text)} placeholder="Enter centigrade temp" onChange={changeText}/>
            <br/><input type="text" value={Fcalculation(text)}/>
        </div>
    )
   
}

export default Conversion;