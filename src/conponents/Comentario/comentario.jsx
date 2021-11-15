import React from 'react';
import "./comentario.css"
import ComentarioEstrellas from "../ComentarioPuntaje/comentarioEstrellas.jsx"

export default function Comentario(props){
    return(
        <div className="comentario">
            <div className="comentarioUser">
                <img src="https://e7.pngegg.com/pngimages/15/364/png-clipart-computer-icons-person-user-group-icon-auto-part-rim-thumbnail.png" alt="imagen de usuario"/>
                <p>Nombre del usuario</p>
            </div>
            <div className="comentarioStars">
                <ComentarioEstrellas></ComentarioEstrellas>
                <p>Fecha</p>
            </div>
            <div className="comentarioTexto">
                <p>Muy buen vehiculo</p>
            </div>
        </div>
    )
}