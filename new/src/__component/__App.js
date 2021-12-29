import React from "react";
import "./App.css";
import CircleBoardGroup from "./CircleBoardGroup";
import { useState, useEffect, useRef } from "react";

export default function App() {
    
    var biRef = {};

    var initPrevPos = { left: 200,
                        top: 300
    };
    var initPrevCircleStyle = "hydro-circle"
    var initPrevPercentage = "55.8%"
    var initPrevSize = 500; //import CalCircleSize from./logic/calCircleSize.js; CalCircleSize(initPrevPercentage);

    var initial_position = { left: 500,
                             top: 500
    };
    // var position = { left:300,
    //                  top:200
    // };
    var circleStyle = "wind-circle"
    var percentage = "30.2%"
    //var size = 300; //import CalCircleSize from./logic/calCircleSize.js; CalCircleSize(percentage);
    
    const [refLeft, setRefLeft] = useState(200);
    const [refTop, setRefTop] = useState(300);
    const [refSize, setRefSize] = useState(300);

    const [left, setLeft] = useState(200);
    const [top, setTop] = useState(300);
    const [size, setSize] = useState(300);

    function set_State () {
        setLeft(refLeft);
        setTop(refTop);
        setSize(refSize);
        biRef.set_State()
    }

    return <>
        <label>Left</label>
        <input type="number" value={refLeft} onChange={(e) => setRefLeft(e.target.value)}/>
        <label>Top</label>
        <input type="number" value={refTop} onChange={(e) => setRefTop(e.target.value)}/>
        <label>Size</label>
        <input type="number" value={refSize} onChange={(e) => setRefSize(e.target.value)}/>
        <p><button onClick={set_State}>Button</button></p>
        <CircleBoardGroup biRef={biRef}
                          initPrevPos = {initPrevPos}
                          initPrevCircleStyle = {initPrevCircleStyle}
                          initPrevPercentage = {initPrevPercentage}
                          initPrevSize = {initPrevSize}
                          initial_position = {initial_position}
                          position = {{left: left,
                                        top: top}}
                          circleStyle = {circleStyle}
                          percentage = {percentage}
                          size = {size}/>
    </>
}