import React from 'react'
import {FooterDiv, LinkEvukes, LinkFooter} from './FooterStyled'
import { Link } from 'react-router-dom'

const Footer = () => {
    
    //Obtener fecha
    const fecha = new Date().getFullYear();
    return ( 
        <FooterDiv>
            <div>
                <LinkFooter to="/">Inicio</LinkFooter>
                <LinkFooter to="/about">Nosotros</LinkFooter>
                <LinkFooter to="/contact">Contacto</LinkFooter>
            </div>
            <div>
                <p>Todos los derechos reservados por <LinkEvukes to="/evukes"> Evukers </LinkEvukes> &copy; Copyright {fecha}</p>
            </div>
            <div>
                
            </div>
        </FooterDiv>
     );
}
 
export default Footer;