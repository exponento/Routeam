import React from "react";

function Input ({callBack}){

    const inputWidth = {
        width: '84%',
        fontSize: '30px',
    }

    return(
        <input type="search" 
            onChange={(event) => {callBack(event.target.value)}} 
            style={inputWidth} 
            placeholder="Начните вводить текст для поиска (не менее трех символов)"
        />
    )
}
export default Input