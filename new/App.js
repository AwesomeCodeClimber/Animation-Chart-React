import React from "react";
import "./App.css";
import CircleBoardGroup from "./CircleBoardGroup";


export default function App() {    

    var biRef = {};
    var percent;
    
    function Alow(){
        percent = [ Number(document.getElementById("hydro").value),
                    Number(document.getElementById("wind").value),
                    Number(document.getElementById("solar").value), 
                    Number(document.getElementById("nonr").value)
        ];
        biRef.set_State(percent);
    }

    return <>
        <p><button onClick={Alow}>Alow</button></p>
        <CircleBoardGroup biRef = {biRef} />
    </>
}