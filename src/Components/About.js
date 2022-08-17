import React, { useState } from 'react'

export const About = (props) => {
    // const [count, setCount] = useState({
    //     background: "white",
    //     color: "black",
    // });

    // if(props.mode === "dark"){
    //     setCount( {
    //         background:"black",
    //         color:"white",
    //     })
    // }else{
    //     setCount({
    //         background: "white",
    //         color: "black",
    //     });
    // }
    let count = {
        color :props.mode =="dark"?"white":"black",
        background :props.mode =="light"?"white":"black",
    }

    
    return (
        <div className="container mt-5 alert alert-success" style={count} role="alert">
            <h4 className="alert-heading">This is About</h4>
            <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
            <hr/>
                <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
        </div>
    )
}
