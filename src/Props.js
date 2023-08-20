function Props() {
    const masaleh=[
     'سنگ ','آجر',"گچ"
    ]
    return ( <div>
        {masaleh.map((u,index)=>{ return <h1 key={index}>{u} </h1>})}
    </div> );
}

export default Props;