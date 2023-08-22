import React, { useEffect, useState } from 'react';

const Test = () => {
    const [bc, setBc] = useState("blue");
    const [message, setMessage] = useState("")

    useEffect(() => {
        fetch("https://jfb716.github.io/website-johnfblack/message")
            .then((res) => res.json())
        .then((data) => setMessage(data.message))
    })

    const changeToRed = () => {
        setBc("red");
        console.log("red")
    }

    return (
        <div className="container-fluid p-2">
            <div className="row">
                <div style={{ backgroundColor: `${bc}` }}  className="col p-2 m-2 d-flex justify-content-center">
                    
                </div> 
            </div>
            <div className="row">
                <div style={{ backgroundColor: `${bc}` }}  className="col p-2 m-2 d-flex justify-content-center">
                    <button onClick={changeToRed}>{message}</button>
                </div> 
            </div>
        </div>
    )
};

export default Test