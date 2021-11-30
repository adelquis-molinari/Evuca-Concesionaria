import React from 'react'   
import {deleteUser} from '../../Firebase/AddUserDb/index'
import Swal from 'sweetalert2';

export function Users(props) {
    const users = props? props.users : []
    const handleDelete = (e) => {
        if(e.target.id === props.user.sub){
            console.log(props)
            Swal.fire({
                icon: 'error',
                title: 'Tu cuenta fue eliminada',
                text: `Por favor vuelve a iniciar sesión`,
            });
            props.logout({returnTo: window.location.origin})
        }
        deleteUser(e.target.id)
    }
    return(
        <div>
            <p className="userTotal">Total de usuarios: {users? users.length : 0}</p>
        <div className="userContainer">{users ? users.sort((a,b)=> {
                        return b.nickname - a.nickname
                    }).map(users =>{
            return(
            <div className="userCards">
            <img className="userImg" src={users.picture} alt="Foto de perfil"></img>
            <div className="userText">
            <p>Nombre de usuario: {users.nickname}</p>
            <p>Email: {users.email}</p>
            <p>Comentarios realizados: {users.comentarios.length}</p>
            <i onClick={handleDelete} id={users.sub} class="far fa-trash-alt deleteUser"></i>
            <i class="fas fa-ban blockUser"></i>
            </div>
            </div>
            )
        }) : console.log("no anda")}</div>
        </div>
    )
}

export default Users()