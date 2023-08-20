function Cond() {
    const  age =20
   return (<div>

    { age > 40 ? <h1> hlllooo</h1>:<h1> miloo</h1> };
    { age < 40 && <h1> ALLAH</h1> };
    <button className={age >19 ?"btn btn-success" : "btn btn-dark "}> ya hossain</button>
<p style={{ color: age>10 ?"red":"yellow"}}>condishenal stylle</p>
   </div>);
}
export default Cond;