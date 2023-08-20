import {useState} from "react";
function Clic() {
    const [hoo,setHoo]=useState("SALLM")
    const [koo,setKoo]=useState("GOOD")

    const change =()=>{ setHoo  ("WELCOME TO BIRJAND" ,setKoo('MY GOD'))   }
    const dood =()=>{ setHoo  ("GOOD MORNINNIG" ,setKoo('GOOD BY'))   }
      

    const [inpoText,setInpoTxet]=useState('HI FREINDES')
    const help=(event)=>{console.log(event.target.value)
      setInpoTxet(event.target.value)}
    
  return (
    <div>
       <input  className='btn btn-outline-success  'onChange={help}   type="text" /><hr /> 
       <h1 className="bg-danger w-25 mx-auto rounded-3 p-3 overflow-auto">{inpoText}</h1><hr />
      
      
      
      
     <button className='btn btn-success  d-inline-block mx-3' onClick={change}  >CLIck1</button> 
    <button className='btn btn-warning  ' onClick={dood}  >CLICK2</button>
    
    <h1 style={{color:'green'}}>{hoo}</h1>
    <h2 style={{color:'red'}}>{koo}</h2>
 
    </div>
  );
}

export default Clic;
