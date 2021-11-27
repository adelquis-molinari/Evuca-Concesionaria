import React from 'react';
import "./comentario.css"
import ComentarioEstrellas from "../ComentarioPuntaje/comentarioEstrellas.jsx"



export default function Comentario(props){
    const date = new Date(props.time);
    return(
        <div className="comentario">
            <div className="comentarioUser">
                <img src={props.picture} alt="imagen de usuario"/>
                <p>{props.nickname}</p>
            </div>
            <div className="comentarioStars">
                <ComentarioEstrellas></ComentarioEstrellas>
                <p>Fecha: {date.toLocaleString('es')}</p>
            </div>
            <div className="comentarioTexto">
                    <p>{props.comentario}</p>
            </div>
        </div>
    )
}