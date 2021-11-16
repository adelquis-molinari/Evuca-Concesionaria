import React from 'react';
import "./shopcard.css"
import { Link } from 'react-router-dom';

export default function ShopCard(props){
    return(
        <div className="shopCardContainer">
        <div>
            <Link to={`/article/${props.props.id}`} style={{textDecoration: 'none', color:"#287094"}}>
            <img src={props.props.img} alt={props.props.descripcion}/>
            </Link>
            <div className="garajeContainer">
                <i className="fas fa-warehouse"></i>
            </div>
            <div className="shopCardText">
            <Link to={`/article/${props.props.id}`} style={{textDecoration: 'none', color:"#287094"}}>
            <h3>{props.props.descripcion}</h3>
            </Link>
            <p>{props.props.precio}</p>
            </div>
        </div>
    </div>
    )
}