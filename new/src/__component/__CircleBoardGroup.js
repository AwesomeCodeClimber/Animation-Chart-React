import React from "react";
import CircleBoard from "./CircleBoard.js"

// Parent component.
export default function CircleBoardGroup(props) {

    // !! Asume the order of each data is fixed as .hydro-circle, .wind-circle, .solar-circle, .nonr-circle.!!
    var biRef0 = {};
    var biRef1 = {};

    var init_opacity_default = 0.2;
    var opacity_default = 0.67;

    var animation_step = 100;

    var flag = true;

    var prevPos = props.initPrevPos;
    var prevCircleStyle = props.initPrevCircleStyle;
    var prevPercentage = props.initPrevPercentage;
    var prevSize = props.initPrevSize;

    var initPos = props.initial_position;
    var pos = props.position; 
    var circleStyle = props.circleStyle;
    var percentage = props.percentage;
    var size = props.size;

    var cur_state0, new_state0, cur_state1, new_state1;
    var circleStyle0, circleStyle1;
    var percentage0, percentage1;
    var size0, size1;

    if (flag) {
        cur_state0 = {  left: initPos.left,
                        top: initPos.top,
                        opacity: init_opacity_default};
        
        new_state0 = {  left: pos.left,
                        top: pos.top,
                        opacity: opacity_default};

        cur_state1 = {  left: prevPos.left,
                        top: prevPos.top,
                        opacity: opacity_default};
        
        new_state1 = {  left: initPos.left,
                        top: initPos.top,
                        opacity: init_opacity_default};

        circleStyle0 = circleStyle;
        circleStyle1 = prevCircleStyle;

        percentage0 = percentage;
        percentage1 = prevPercentage;

        size0 = size;
        size1 = prevSize;        
    } else {
        cur_state0 = {  left: prevPos.left,
                        top: prevPos.top,
                        opacity: opacity_default};
        
        new_state0 = {  left: initPos.left,
                        top: initPos.top,
                        opacity: init_opacity_default};   

        cur_state1 = {  left: initPos.left,
                        top: initPos.top,
                        opacity: init_opacity_default};
        
        new_state1 = {  left: pos.left,
                        top: pos.top,
                        opacity: opacity_default};

        circleStyle0 = prevCircleStyle;
        circleStyle1 = circleStyle;

        percentage0 = prevPercentage;
        percentage1 = percentage;

        size0 = prevSize;        
        size1 = size;
    }


    function set_State() { 
        biRef0.set_State(); 
        biRef1.set_State();

        if(flag) flag = false;
        else flag = true;

        prevPos = pos;
        prevCircleStyle = circleStyle;
        prevPercentage = percentage;
        prevSize = size;
    };

    props.biRef.set_State = set_State;
 
    return <div className="component-app">
        <CircleBoard biRef={biRef0}
                     cur_state = {cur_state0}
                     new_state={new_state0} 
                     animation_step={animation_step}
                     circleStyle = {circleStyle0}
                     percentage = {percentage0}
                     size = {size0}/>

        <CircleBoard biRef={biRef1}
                     cur_state = {cur_state1}
                     new_state={new_state1} 
                     animation_step={animation_step}
                     circleStyle = {circleStyle1}
                     percentage = {percentage1}
                     size = {size1}/>
    </div>;
 }