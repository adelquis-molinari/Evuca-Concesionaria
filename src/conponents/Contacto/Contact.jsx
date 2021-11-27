import React from 'react';
import banner from "./img/Banner.jpg";
import telefono from "./img/icono telefono.png";
import correo from "./img/icono correo.png";
import chat from "./img/icono chat.png";
import FormBase from '../Form'
import "./Contact.css";



const contact = () => {

    return(

            <div className = "containerContact">
                <img className= "contactanos" src={banner} alt="" />
                <br></br>
                <img className= "icono1" src={telefono} alt="" />
                <h3>POR TELÉFONO</h3>
                <p>Llamanos sin costo al 0800-888-3247</p>
                <p>Horario</p>
                <p>De lunes a viernes de 8:00 a 20:00 hs y sábados de 8:00 a 16:00 hs.</p>

                <img className= "icono2" src={correo} alt="" />
                <h3>POR E-MAIL</h3>
                <p>Enviá tu consulta a</p> 
                <p>atencion.evucar@gmail.com</p>

                <img className= "icono3" src={chat} alt="" />
                <h3>ONLINE CHAT</h3>
                <p>Completa el formulario para chatear con nosotros.</p>
                <br></br>
                <br></br>
                <br></br>
                <div className="content-form-contact">
                    <FormBase status='consulta' />
                </div>
            </div>
        
    )
}

export default contact ;