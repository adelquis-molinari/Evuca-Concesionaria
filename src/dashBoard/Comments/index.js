import React, {useState} from 'react'
import ComentarioEstrellas from "../../conponents/ComentarioEstrellas/index"
import { Link } from 'react-router-dom'
import { deleteComment } from '../../Firebase/AddUserDb'
import "./index.css"

export function Comments(props){
    let comentarios = []
    const comentario = props? props.users.map(user =>{
        comentarios.push(user.comentarios)
    }) : []


    const handleCommentDelete = (e) => {
        const commentClassList = e.target.classList
        let newComments = comentarios.map(u => {
            return u.filter(c => c.texto.replace(/ /g,'-') !== commentClassList[3] && c.time !== commentClassList[4])
        })
        let newComments2 = newComments.filter(u => u[0]?.user === commentClassList[5])
        deleteComment(newComments2[0], commentClassList[5])
        props.getUsersAndSet()
    }


    return(
    <div className="dashboard-div">
        <div className="adminComentariosContainer">
            {comentarios? comentarios.map(usuario =>{
                return(
                    usuario.sort((a,b) => b.time - a.time).map(c =>{
                        const date = new Date(c.time);
                        return(
                                <div className="adminComentario">
                                    <div className="adminComentarioUser">
                                        <div>
                                            <img src={c.picture} alt="Imagen de usuario"/>
                                            <p>{c.nickname}</p>
                                        </div>
                                        <i onClick={handleCommentDelete}class={`far fa-trash-alt delete-comment ${c.texto.replace(/ /g,'-')} ${c.time} ${c.user}`}></i>
                                    </div>
                                <div className="adminComentarioStars">
                                <ComentarioEstrellas rating={c.puntaje}></ComentarioEstrellas>
                                <p>-  Fecha: {date.toLocaleString('es')}</p>
                                <Link to={`/article/${c.id}`}><i class="fas fa-external-link-alt go-to-comment"></i></Link>
                                </div>
                                <div className="adminComentarioTexto">
                                    <p>{c.texto}</p>
                                </div>
                                </div>
                        )})
                )
            }): console.log("No anda")}
        </div>
    </div>
    )
}

export default Comments()