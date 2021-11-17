import React from 'react';
import "./shopcard.css";
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {addGarage} from '../../actions';

export default function ShopCard(props){
    const dispatch = useDispatch();
    return(
        <div className="shopCardContainer">
        <div>
            <Link to={`/article/${props.props.id}`} style={{textDecoration: 'none', color:"#287094"}}>
            <img src={props.props.img} alt={props.props.descripcion}/>
            </Link>
            <div className="garajeContainer">
                {props.props.cantidad > 0 ?
                <i 
                    onClick={() => dispatch(addGarage(props.props))}
                    className="fas fa-warehouse garajeTitulo">
                </i>
                :
                null
                }
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