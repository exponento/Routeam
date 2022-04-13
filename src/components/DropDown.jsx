import React from "react";

function DropDown (props){
    return(
        <div className="dropDown">
            <label htmlFor=""> Вывод на странице:  
                <select className="select" onChange={(event) => {props.changeOut(`${event.target.value}`, props.len, props.data)}} name="" id="select">
                    <option value="10">На стрвнице</option>
                    <option >10</option>
                    <option >25</option>
                    <option >50</option>
                </select>
            </label>
        </div>
    )
}
export default DropDown