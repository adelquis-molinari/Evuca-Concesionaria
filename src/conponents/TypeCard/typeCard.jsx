import React from 'react';
import "./typeCard.css"
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {buscarVehiculo} from "../../actions/index"

function TypeCard (props){
    function clickLink(){
        console.log(props.cards(props.text))
    }
    return(
        <Link to={`shop/${props.link ? props.link : props.text}`} style={{ textDecoration: 'none' }} onClick={clickLink}>
        <div className="typeHover">
            <div className="containerType">
                <img className="typeImg" src={props.img} alt="typeimg"/>
                <p>{props.text}</p>
            </div>
        </div>
        </Link>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        cards: card => dispatch(buscarVehiculo(card))
    }
}

export default connect(null, mapDispatchToProps)(TypeCard)