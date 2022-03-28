import React from "react";
import dropDown from "../images/dropDown.png"
import "../App.css";
import left from "../images/left.png";
import right from "../images/right.png";


function DropDown ({callBackDown, callBackNumber, number, down, click, anClick, slyder}){

    const arr = []

    for (let i = 1; i <= Math.ceil(`${slyder / number}`); i++){
        arr.push(<button className="dropDown-slyder-btn">{i}</button>)
    };
    
    return(
        <div className="dropDown">
            <div>
                <div>
                    <button className="dropDownBtn" onClick={() => callBackDown({display: 'inline-grid'})} >{number} <img src={dropDown} alt="" /></button>
                </div>
                <div style={down}>
                    <button className="dropDownBtn" onClick={() => {callBackNumber(10); callBackDown({display: 'none'})}} > 10 </button>
                    <button className="dropDownBtn" onClick={() => {callBackNumber(25); callBackDown({display: 'none'})}} > 25 </button>
                    <button className="dropDownBtn" onClick={() => {callBackNumber(50); callBackDown({display: 'none'})}} > 50 </button>
                </div>
            </div>
            <div className="dropDown-slyder">
                <button className="dropDown-slyder-btn" onClick={anClick}><img src={left} alt="" /></button>
                {arr}
                <button className="dropDown-slyder-btn" onClick={click}><img src={right} alt="" /></button>
            </div>
        </div>
    )
}
export default DropDown