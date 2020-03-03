import React, {useEffect} from 'react'

const Conversion = ({resetC, Cval, textC, cToF, cToK, resetF, Fval, textF, fToC, fToK, resetK, Kval, textK, kToC, kToF, resetAll }) =>{
    
    
    const changeTextC = (e1) =>{
        Cval(e1);
    };

    const changeTextF = (e2) =>{
        Fval(e2);  
    };

    const changeTextK = (e3) =>{
        Kval(e3);
    };

    useEffect(() =>{
        if(textC){
            cToF(textC);
            cToK(textC);
        }
        
    }, [textC] );

    useEffect(() =>{
        if(textF){
            fToC(textF);
            fToK(textF);
        }
        
    }, [textF] );

    useEffect(() =>{
        if(textK){
            kToC(textK);
            kToF(textK);
        }
        
    }, [textK] );


    

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
            
            <span>Kelvin : </span>
            <input type="text" value={textK} placeholder="Kelvin temparature" onChange={changeTextK}/>
            <button onClick={(e)=>{
                    e.preventDefault();
                    resetK();
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