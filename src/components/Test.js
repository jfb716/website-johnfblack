import React, { useState } from 'react';

const Test = () => {
    const [bc, setBc] = useState("blue");

    const changeToRed = () => {
        setBc("red");
        console.log("red")
    }

    const changeToBlue = () => {
        setBc("Blue");
        console.log("blue")
    }

    return (
        <div className="container-fluid p-2">
            <div className="row">
                <div style={{ backgroundColor: `${bc}` }}  className="col p-2 m-2 d-flex justify-content-center">
                    
                </div> 
            </div>
            <div className="row">
                <div style={{ backgroundColor: `${bc}` }}  className="col p-2 m-2 d-flex justify-content-center">
                    <button onClick={changeToRed}>New Love Pic</button>
                </div> 
                <div style={{ backgroundColor: `${bc}` }}  className="col p-2 m-2 d-flex justify-content-center">
                    <button onClick={changeToBlue}>New Cat Pic</button>
                </div> 
            </div>
        </div>
    )
};

export default Test