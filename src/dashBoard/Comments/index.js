import React from 'react'
import ComentarioEstrellas from "../../conponents/ComentarioEstrellas/index"
import "./index.css"

export function Comments(props){
    const comentarios = []
    const comentario = props? props.users.map(user =>{
        comentarios.push(user.comentarios)
    }) : []

    return(
        <div className="adminComentariosContainer">
            {comentarios? comentarios.map(usuario =>{
                return(
                    usuario.map(c =>{
                        console.log(c)
                        const date = new Date(c.time);
                        return(
                                <div className="adminComentario">
                                    <div className="adminComentarioUser">
                                    <img src={c.picture} alt="Imagen de usuario"/>
                                    <p>{c.nickname}</p>
                                </div>
                                <div className="adminComentarioStars">
                                <ComentarioEstrellas rating={c.puntaje}></ComentarioEstrellas>
                                <p>-  Fecha: {date.toLocaleString('es')}</p>
                                </div>
                                <div className="adminComentarioTexto">
                                    <p>{c.texto}</p>
                                </div>
                                </div>
                        )})
                )
            }): console.log("No anda")}
        </div>
    )
}

export default Comments()