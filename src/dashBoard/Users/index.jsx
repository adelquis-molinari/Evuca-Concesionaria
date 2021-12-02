import React from 'react'   
import {deleteUser, blockUserFb, unblockUserFb, adminUserFb, noAdminUserFb} from '../../Firebase/AddUserDb/index'
import Swal from 'sweetalert2';

export function Users(props) {
    const users = props? props.users : []
    const handleDelete = (e) => {
        if(e.target.id === props.user.sub){
            Swal.fire({
                icon: 'error',
                title: 'Tu cuenta fue eliminada',
                text: `Por favor vuelve a iniciar sesión`,
            });
            props.logout({returnTo: window.location.origin})
        }
        deleteUser(e.target.id)
        props.getUsersAndSet()
    }

    const handleBlock = (e) => {
        let userClassList = e.target.classList
        blockUserFb(userClassList[3])
        props.getUsersAndSet()
    }

    const handleUnblock = (e) => {
        let userClassList = e.target.classList
        unblockUserFb(userClassList[2])
        props.getUsersAndSet()
    }

    const handleAdmin = (e) => {
        let userClassList = e.target.classList
        adminUserFb(userClassList[3])
        props.getUsersAndSet()
    }

    const handleNoAdmin = (e) => {
        let userClassList = e.target.classList
        noAdminUserFb(userClassList[3])
        props.getUsersAndSet()
    }
    return(
        <div className="dashboard-users-div">
            <p className="userTotal">Total de usuarios: {users? users.length : 0}</p>
        <div className="userContainer">{users ? users.sort((a,b)=> {
                        return b.nickname - a.nickname
                    }).map(users =>{
                        return(
                            <div className="userCards">
            <img className="userImg" src={users.picture} alt="Foto de perfil"></img>
            <div className="userText">
            <p>Nombre de usuario: {users.nickname}</p>
            <p>Email: {users.email ? users.email : 'No hay email disponible'}</p>
            <p>Comentarios realizados: {users.comentarios.length}</p>
            {users.blocked && <p className="blocked-text">Usuario bloqueado</p>}
            <i onClick={handleDelete} id={users.sub} className="far fa-trash-alt deleteUser"></i>
            {users.blocked ? <i onClick={handleUnblock} className={`fas fa-lock-open ${users.sub}`}></i> : <i onClick={handleBlock} className={`fas fa-ban blockUser ${users.sub}`}></i>}
            {users.admin ?<i onClick={handleNoAdmin} class={`fas fa-user noAdminUser ${users.sub}`}></i> :<i onClick={handleAdmin} class={`fas fa-user-shield adminUser ${users.sub}`}></i>}
            </div>
            </div>
            )
        }) : null}</div>
        </div>
    )
}

export default Users()