import React, {useState, useEffect} from 'react'

const FarenheitToCentigrade = ({resetF, Fval, textF, fToC, resetC}) =>{
    

    const changeText = (e2) =>{
        Fval(e2);  
    };

    useEffect(() =>{
        if(textF){
            fToC(textF);
        }
        else if(!textF){
            resetC();
        }
    }, [textF] );


    return (
        <div>
            <span>Farhenheit : </span>
            <input type="text" value={textF} placeholder="Farhenheit temparature" onChange={changeText}/>
            <button onClick={(e)=>{
            e.preventDefault();
            resetF();
            }}>Reset</button>
        </div>
        
    );   
}

export default FarenheitToCentigrade;

