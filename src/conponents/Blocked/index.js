import React from 'react';
import './blocked.css'

const Blocked = () => {
    return (  
        <div className='modal-background'>
        <div className='modal-container'>
            <div className="modal-header">
            <img src="https://thumbs.dreamstime.com/b/blocked-stamp-blocked-round-grunge-stamp-blocked-sign-blocked-136960206.jpg" alt="Trashcan icon"></img>
            </div>
            <div className='modal-title'>
            <h1>Tu cuenta ha sido bloqueada.</h1>
            </div>
            <div className="modal-body">
            <p>Si crees que esto haya sido un error envienos un email a:</p>
            <h4 className="blocked-email">evucar61@gmail.com</h4>
        </div>
        </div>
        </div>
    );
}

export default Blocked ;