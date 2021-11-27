import React from 'react';
import * as styled from "./OutstandingStyled";
import {apiSimpleAutos} from "../../Data/apiAutos";
import { Link } from 'react-router-dom';

const Outstanding = (props) => {
    return ( 
        <styled.ContainerOutstanding>
            <styled.Body>
                <h2>{apiSimpleAutos[9].Titulo}</h2>
                <div className="text-arear">
                    <p>{apiSimpleAutos[9].descripcion}</p>
                    <Link to={`article/${apiSimpleAutos[9].id}`} style={{ textDecoration: 'none' }} >
                    <styled.ButtonOuts>Conoce tu Próximo Auto</styled.ButtonOuts>
                    </Link>
                </div>
            </styled.Body>
        </styled.ContainerOutstanding>
    );
}

export default Outstanding;