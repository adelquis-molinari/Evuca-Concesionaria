import React from 'react';
import "./typeCard.css"
import { Link } from 'react-router-dom';

function TypeCard (props){
    return(
        <Link to={`shop/${props.link ? props.link : props.text}`} style={{ textDecoration: 'none' }} >
        <div className="typeHover">
            <div className="containerType">
                <img className="typeImg" src={props.img} alt="typeimg"/>
                <p>{props.text}</p>
            </div>
        </div>
        </Link>
    )
}

export default TypeCard