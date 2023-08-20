import {useState} from "react";
function Quu() {
    const [show,setShow]=useState(false)
    const toggleText=()=>{setShow(!show)}
    const [molor,setMolor]=useState("yellow")


    return (<div>

        <button  className="btn btn-success" onClick={toggleText}>SHOW ^ HIDE</button>
        { show && <h1>I am hide with click</h1>}
        <button  className="btn btn-dark" onClick={()=>{setMolor( molor==='yellow' ?'green': 'yellow')}}>SHOW ^ HIDE</button>
<h1 style={{color:molor}}> good </h1>
    </div>  );
}

export default Quu;