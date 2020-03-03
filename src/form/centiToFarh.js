import React, {useState, useEffect} from 'react'

const CentigradeToFarenheit = ({resetC, Cval, textC, cToF, resetF}) =>{
    
    
    const changeText = (e1) =>{
        Cval(e1);
    };

    useEffect(() =>{
        if(textC){
            cToF(textC);
        }
        else if(!textC){
            resetF();
        }
    }, [textC] );

    

    return(
        <div>
            <span>Centigrade : </span>
            <input type="text" value={textC} placeholder="Centigrade temparature" onChange={changeText}/>
            <button onClick={(e)=>{
                    e.preventDefault();
                    resetC();
                    }}>Reset</button>

        </div>
    );
   
}

export default CentigradeToFarenheit;