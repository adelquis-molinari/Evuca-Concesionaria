import React from 'react';
import * as styled from "./OutstandingStyled";
import {apiDetalladaAutos} from "../../Data/apiAutos";
import { Link } from 'react-router-dom';

const Outstanding = (props) => {
    return ( 
        <styled.ContainerOutstanding>
            <styled.Body>
                <h2>{apiDetalladaAutos[9].Titulo}</h2>
                <div className="text-arear">
                    <p>{apiDetalladaAutos[9].descripcion}</p>
                    <Link to={`article/${apiDetalladaAutos[9].id}`} style={{ textDecoration: 'none' }} >
                    <styled.ButtonOuts>Conoce tu Próximo Auto</styled.ButtonOuts>
                    </Link>
                </div>
            </styled.Body>
        </styled.ContainerOutstanding>
    );
}

export default Outstanding;