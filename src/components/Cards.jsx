import React from "react";
import "./cards.css";
import star from "../images/star.png";
import eye from "../images/eye.png";
import pen from "../images/pen.png"

function Cards ({stargazers_count, watchers, name, autor, html_url, images}){
    const img = {
        borderRadius: '50%',
        height: '50px',
        width: '50px',
    };
    return(
        <div className="cards">
            
            <a className="cards-a" href={html_url} target='_blank'>
                {name} 
                <div className="cards-img" >
                    <img className="cards-stars__img" src={images} alt="Автор" style={img}/> {autor}
                </div>
                <div className="cards-stars cards-img">
                    <img className="cards-stars__img" src={star} alt="" /> {stargazers_count} 
                    <img className="cards-stars__img" src={eye} alt="" /> {watchers}
                </div>
            </a>

            <div className="cards-img__coments">
                <input className="cards-input" 
                    type="text" 
                    onChange={(event) => {localStorage.setItem('coments', `${event.target.value}`)}}
                    placeholder="Комментарий к проекту"/>
                <button className="btn">
                    <img src={pen} alt="" />
                </button>
            </div>
        </div>
    )
}
export default Cards