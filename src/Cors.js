import { useState } from "react";

function Cors() {
const [onpot,setOnpot]=useState("")
const [sabt,setSabt]=useState("")

const tagh=(event)=>{ setOnpot(event.target.value)}
const hod=()=>{setSabt([...sabt,onpot])}

    return (<div>

<input className="btn btn-primary"   type="text" onChange={tagh} />
<button className="btn btn-success" onClick={hod}>submit</button>

<h1>{sabt}</h1>
    </div>  );
}

export default Cors;
