import React from "react";
import '../App.css'

function OutPut ({data, id}){

    return(
        <div id={id} className='outPut-card'>
            {data}
        </div>
    )
}
export default OutPut