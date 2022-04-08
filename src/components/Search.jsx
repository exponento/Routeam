import React from "react";
import "./search.css";
import search from "../images/search.png"
import { useState } from "react";


function Search ({link, callBack}){
    const [value, setValue] = useState()
    const url = `https://api.github.com/search/repositories?q=${value}`
    const inputWidth = {
        width: '84%',
        fontSize: '30px',
    }

    return(
        <div className="search">
            <input type="search" 
                onChange={(event) => {setValue(event.target.value)}} 
                style={inputWidth} 
                placeholder="Начните вводить текст для поиска (не менее трех символов)"
            />
            <button className="btn" onClick={()=>link(url)}>
                <img src={search} alt="" />
            </button>
        </div>
        
    )
}
export default Search 