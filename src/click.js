import {useState} from "react";
function Clic() {
    const [hoo,setHoo]=useState("ya ali")
    const [koo,setKoo]=useState("ey vay")

    const change =()=>{ setHoo  ("hoo+ya khoda" ,setKoo('dastan'))   }
    const dood =()=>{ setHoo  ("ef goooo" ,setKoo('kooopopu'))   }
      

    const [inpoText,setInpoTxet]=useState('ای دوست')
    const help=(event)=>{console.log(event.target.value)
      setInpoTxet(event.target.value)}
    
  return (
    <div>
       <input  className='btn btn-outline-success'onChange={help}   type="text" /><hr /> 
       <h1 className="bg-danger w-25 mx-auto rounded-3 p-3">{inpoText}</h1><hr />
      
      
      
      
     <button className='btn btn-info ' onClick={change}  >CLIck</button>
    <button className='btn btn-info ' onClick={dood}  >fooh</button>
    
    <h1>{hoo}</h1>
    <h2>{koo}</h2>
 
    </div>
  );
}

export default Clic;
