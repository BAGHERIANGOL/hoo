function Props() {
    const masaleh=[
     'SAND ','BRICK',"GEPS"
    ]
    return ( <div style={{ color:'yellow'}}>
        {masaleh.map((u,index)=>{ return <h1 key={index}>{u} </h1>})}
    </div> );
}

export default Props;