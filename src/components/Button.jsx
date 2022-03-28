import React from "react";
import "./button.css";
import search from "../images/search.png"


function Button ({link}){
    return(
        <button className="btn" onClick={link}>
            <img src={search} alt="" />
        </button>
    )
}
export default Button