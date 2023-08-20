function Cond() {
    const  age =20
   return (<div>

    { age > 40 ? <h1>HELLO</h1>:<h1> HI</h1> };
    { age < 40 && <h1> ALLAH</h1> };
    <button className={age >19 ?"btn btn-success" : "btn btn-dark "}> YA ALI</button>
<p style={{ color: age>10 ?"red":"yellow"}}>YA HOOO</p>
   </div>);
}
export default Cond;