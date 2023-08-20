import { useState } from "react";
function Doctor() {
    const [rang,setRang]=useState("red")
    const [text,setText]=useState("xxx")
    const [web,setWeb]=useState("bg-dark")

const goter =()=>{setRang("green", setText('YYY'), setWeb("bg-info"))}
    return ( <div><h1  className={web}  style={{color:rang,width:"400px", margin: "0 auto" }}>{text}</h1>
    <button className="btn btn-dark my-2 " onClick={goter}>coler text</button>
    </div> );
}

export default Doctor;
