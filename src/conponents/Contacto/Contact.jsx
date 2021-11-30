import React from 'react';
import banner from "./img/Banner.jpg";
import FormBase from '../Form'
import "./Contact.css";



const contact = () => {

    return(

            <section className = "containerContact">
                <header>
                    <img className= "contactanos" src={banner} alt="" />
                </header>
                <div className="conteiner-contact-card">
                    <div className="card-contact">
                        <i class="fas fa-phone-alt"></i>
                        <h3>POR TELÉFONO</h3>
                        <p>Llamanos sin costo al 0800-888-3247</p>
                        <p>Horario</p>
                        <p>De lunes a viernes de 8:00 a 20:00 hs y sábados de 8:00 a 16:00 hs.</p>
                    </div>
                    <div className="card-contact">
                        <i class="far fa-envelope"></i>
                        <h3>POR E-MAIL</h3>
                        <p>Enviá tu consulta a</p> 
                        <p>atencion.evucar@gmail.com</p>
                    </div>
                    <div className="card-contact">
                        <i class="far fa-comments"></i>
                        <h3>ONLINE CHAT</h3>
                        <p>Completa el formulario para chatear con nosotros.</p>
                        <p>Esperamos por tu consulta!.</p>
                    </div>
                </div>
                <div className="content-form-contact">
                    <FormBase status='consulta' />
                </div>
            </section>
        
    )
}

export default contact ;