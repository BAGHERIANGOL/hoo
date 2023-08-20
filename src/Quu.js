import {useState} from "react";
function Quu() {
    const [show,setShow]=useState(false)
    const toggleText=()=>{setShow(!show)}
    const [molor,setMolor]=useState("yellow")


    return (<div>

        <button  className="btn btn-success" onClick={toggleText}>SHOW ^ HIDE</button>
        { show && <h1 style={{color:"red" }}>I am hide with click</h1>}
        <h1>    <iconify-icon
        icon='<iconify-icon icon="carbon:chart-radar"></iconify-icon>'
        height='unset'
        style={{
          width: '40px',
          height: '40px',
           color: 'red',
        }}
      /> </h1>
        <button  className="btn btn-dark" onClick={()=>{setMolor( molor==='yellow' ?'green': 'yellow')}}>CHANGE COLOR</button>
<h1 style={{color:molor}}> good </h1>
    </div>  );
}

export default Quu;