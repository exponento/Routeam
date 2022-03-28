import React from "react";
import "./outPut.css";
import Cards from "./Cards";
import { useState } from "react";
import DropDown from "./DropDown";


function OutPut ({data}){

    const [down, setDown] = useState({display: 'none',});
    const [number, setNumber] = useState(10);
    const [count, setCount] = useState(0);
    const [slyder, setSlyder] = useState(30)
    
    

    function callBackDown (down){
        setDown(down);
    };

    function callBackNumber (number){
        setNumber(number);
        setCount(0)
    };

    function click (){
        if (count < len - number && number !== 50){
            setCount(count + number)
        }
    };

    function anClick(){
        if (count !== 0){
            setCount(count - number)
        }
    };

    const parsCards = data.items.map(e => {return(<Cards 
        key = {e.id} 
        html_url = {e.html_url} 
        stargazers_count = {e.stargazers_count} 
        watchers = {e.watchers} 
        autor = {e.owner.login} 
        name = {e.name}
        images = {e.owner.avatar_url}
        />)})

    const len = parsCards.length;
    
    return(
        <div>
            <div className="pars">
                {parsCards.slice(`${count}`, `${count + number}`)}
            </div>
            <DropDown 
                callBackDown = {callBackDown}
                callBackNumber = {callBackNumber}
                down = {down}
                number = {number}
                click = {click}
                anClick = {anClick}
                slider = {slyder}/>
        </div>
    )
}
export default OutPut