import React from "react";
import "./App.css";
import CircleBoard from "./CircleBoard.js"

// Parent component.
export default function App(props) {

    // CircleBoard1's property
    var biRef1 = {};
    var cur_state1 = { left: 300,
                        top: 300,
                        opacity: 0.7};
    var new_state1 = { left: 500,
                      top: 500,
                      opacity: 0};
    var animation_step1 = 50;
    var circleStyle1 = "solar-circle";
    var percentage1 = "50.8%";
    var size1 = "500";

    // CircleBoard2's property
    var biRef2 = {};
    var cur_state2 = { left: 500,
                        top: 500,
                        opacity: 0};
    var new_state2 = { left: 300,
                      top: 300,
                      opacity: 0.7};
    var animation_step2 = 100;
    var circleStyle2 = "wind-circle";
    var percentage2 = "25%";
    var size2 = "500";

    // CircleBoard3's property
    var biRef3 = {};
    var cur_state3 = { left: 1200,
                        top: 300,
                        opacity: 0.7};
    var new_state3 = { left: 1000,
                        top: 500,
                        opacity: 0};
    var animation_step3 = 100;
    var circleStyle3 = "wind-circle";
    var percentage3 = "41.5%";
    var size3 = "400";
    
    // CircleBoard4's property
    var biRef4 = {};
    var cur_state4 = { left: 1000,
                        top: 500,
                        opacity: 0};
    var new_state4 = { left: 1200,
                        top: 300,
                        opacity: 0.7};
    var animation_step4 = 100;
    var circleStyle4 = "nonr-circle";
    var percentage4 = "21.3%";
    var size4 = "400";

    // CircleBoard5's property
    var biRef5 = {};
    var cur_state5 = { left: 800,
                        top: 700,
                        opacity: 0.7};
    var new_state5 = { left: 900,
                        top: 500,
                        opacity: 0};
    var animation_step5 = 100;
    var circleStyle5 = "nonr-circle";
    var percentage5 = "21.3%";
    var size5 = "300";

    // CircleBoard6's property
    var biRef6 = {};
    var cur_state6 = { left: 900,
                        top: 500,
                        opacity: 0};
    var new_state6 = { left: 800,
                        top: 700,
                        opacity: 0.7};
    var animation_step6 = 100;
    var circleStyle6 = "solar-circle";
    var percentage6 = "21.3%";
    var size6 = "300";

    // CircleBoard7's property
    var biRef7 = {};
    var cur_state7 = { left: 1500,
                        top: 700,
                        opacity: 0.7};
    var new_state7 = { left: 1200,
                        top: 900,
                        opacity: 0.0};
    var animation_step7 = 100;
    var circleStyle7 = "hydro-circle";
    var percentage7 = "21.3%";
    var size7 = "200";

    // CircleBoard8's property
    var biRef8 = {};
    var cur_state8 = { left: 1200,
                        top: 900,
                        opacity: 0};
    var new_state8 = { left: 1500,
                        top: 700,
                        opacity: 0.7};
    var animation_step8 = 100;
    var circleStyle8 = "hydro-circle";
    var percentage8 = "21.3%";
    var size8 = "200";

    function onButtonClick() { 
        biRef1.set_State(); 
        biRef2.set_State();
        biRef3.set_State();
        biRef4.set_State();
        biRef5.set_State(); 
        biRef6.set_State();
        biRef7.set_State();
        biRef8.set_State();       
    };
 
    return <div className="component-app">
        <CircleBoard biRef={biRef1}
                     cur_state = {cur_state1}
                     new_state={new_state1} 
                     animation_step={animation_step1}
                     circleStyle = {circleStyle1}
                     percentage = {percentage1}
                     size = {size1}/>

        <CircleBoard biRef={biRef2}
                     cur_state = {cur_state2}
                     new_state={new_state2} 
                     animation_step={animation_step2}
                     circleStyle = {circleStyle2}
                     percentage = {percentage2}
                     size = {size2}/>

        <CircleBoard biRef={biRef3}
                     cur_state = {cur_state3}
                     new_state={new_state3} 
                     animation_step={animation_step3}
                     circleStyle = {circleStyle3}
                     percentage = {percentage3}
                     size = {size3}/>

        <CircleBoard biRef={biRef4}
                     cur_state = {cur_state4}
                     new_state={new_state4} 
                     animation_step={animation_step4}
                     circleStyle = {circleStyle4}
                     percentage = {percentage4}
                     size = {size4}/>
        
        <CircleBoard biRef={biRef5}
                     cur_state = {cur_state5}
                     new_state={new_state5} 
                     animation_step={animation_step5}
                     circleStyle = {circleStyle5}
                     percentage = {percentage5}
                     size = {size5}/>

        <CircleBoard biRef={biRef6}
                     cur_state = {cur_state6}
                     new_state={new_state6} 
                     animation_step={animation_step6}
                     circleStyle = {circleStyle6}
                     percentage = {percentage6}
                     size = {size6}/>

        <CircleBoard biRef={biRef7}
                     cur_state = {cur_state7}
                     new_state={new_state7} 
                     animation_step={animation_step7}
                     circleStyle = {circleStyle7}
                     percentage = {percentage7}
                     size = {size7}/>

        <CircleBoard biRef={biRef8}
                     cur_state = {cur_state8}
                     new_state={new_state8} 
                     animation_step={animation_step8}
                     circleStyle = {circleStyle8}
                     percentage = {percentage8}
                     size = {size8}/>

        <p><button onClick={onButtonClick}>Button</button></p>
    </div>;
 }
 
 

