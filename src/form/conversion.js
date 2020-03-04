import React, {useEffect} from 'react'

const Conversion = ({resetC, Cval, textC, cToF, cToK, resetF, Fval, textF, fToC, fToK, resetK, Kval, textK, kToC, kToF, resetAll }) =>{
    
    
    const changeTextC = (e1) =>{
        Cval(e1);
    };

    const changeTextF = (e2) =>{
        Fval(e2);  
    };

    

    useEffect(() =>{
        if(textC){
            cToF(textC);
        }
        
    }, [textC] );

    useEffect(() =>{
        if(textF){
            fToC(textF);
        }
        
    }, [textF] );

    


    

    return(
        <div>
            <span>Centigrade : </span>
            <input type="text" value={textC} placeholder="Centigrade temparature" onChange={changeTextC}/>
            <button onClick={(e)=>{
                    e.preventDefault();
                    resetC();
                    }}>Reset</button>

            <br/><br/>
            
            <span>Farhenheit : </span>
            <input type="text" value={textF} placeholder="Farhenheit temparature" onChange={changeTextF}/>
            <button onClick={(e)=>{
                    e.preventDefault();
                    resetF();
                    }}>Reset</button>

            
            
            <br/><br/>
            <button onClick={(e)=>{
                    e.preventDefault();
                    resetAll();
                    }}>Reset all</button>
        </div>
    );
   
}

export default Conversion;