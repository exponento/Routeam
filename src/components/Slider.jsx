import React from "react";
import "../App.css";
import left from "../images/left.png";
import right from "../images/right.png";
import Button from "./Button";


function Slider (props){
    
    
    return(
            <div className={props.sliderNone}>
                <Button img = {<img src={left} alt="" />}/>
                {props.elements}
                <Button img = {<img src={right} alt="" />}/>                
            </div>
    )
}
export default Slider