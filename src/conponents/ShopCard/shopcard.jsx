import React from 'react';
import "./shopcard.css";
import { Link } from 'react-router-dom';


export default function ShopCard(props){
    return(
        <div className="shopCardContainer" key={props.props.id} >
        <div>
            <Link to={`/article/${props.props.id}`} style={{textDecoration: 'none', color:"#287094"}}>
            <img src={props.props.img} alt={props.props.descripcion}/>
            </Link>
            {/* <div className="garajeContainer">
                {props.props.stock > 0 ?
                <i 
                    onClick={() => dispatch(addGarage(props.props))}
                    className="fas fa-warehouse">
                </i>
                :
                <i className="fas fa-times"/>
                }
            </div> */}
            <div className="shopCardText">
            <Link to={`/article/${props.props.id}`} style={{textDecoration: 'none', color:"#287094"}}>
            <h3>{props.props.descripcion}</h3>
            </Link>
            <p>{`$${props.props.precio.toLocaleString('de-DE')}`}</p>
            </div>
        </div>
    </div>
    )
}