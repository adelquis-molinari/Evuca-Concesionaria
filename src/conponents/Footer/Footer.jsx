import React from 'react'
import {FooterDiv, LinkEvukes, LinkFooter} from './FooterStyled'

const Footer = () => {
    
    //Obtener fecha
    const fecha = new Date().getFullYear();
    return ( 
        <FooterDiv>
            <div>
                <LinkFooter to="/">Inicio</LinkFooter>
                <LinkFooter to="/agencias">Agencias</LinkFooter>
                <LinkFooter to="/contact">Contacto</LinkFooter>
            </div>
            <div>
                <p>Todos los derechos reservados por Evukers &copy; Copyright {fecha}</p>
            </div>
            <div>
                
            </div>
        </FooterDiv>
    );
}

export default Footer;