import React from 'react';
import "./comentario.css"
import ComentarioEstrellas from "../ComentarioEstrellas/index"


export default function Comentario(props){  
    console.log(props)
    const date = new Date(props.time);
    return(
        <div className="comentario">
            <div className="comentarioUser">
                <img src={props.picture} alt="imagen de usuario"/>
                <p>{props.nickname}</p>
            </div>
            <div className="comentarioStars">
            <ComentarioEstrellas rating={props.puntaje}></ComentarioEstrellas>
                <p>-  Fecha: {date.toLocaleString('es')}</p>
            </div>
            <div className="comentarioTexto">
                    <p>{props.comentario}</p>
            </div>
        </div>
    )
}