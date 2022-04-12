import React from "react";

function Button (props){

    return(
        <>
            <button onClick={() => props.changeIndex(props.position, props.current)} className='dropDown-slyder-btn' >{props.img}</button>
        </>
    )

}
export default Button