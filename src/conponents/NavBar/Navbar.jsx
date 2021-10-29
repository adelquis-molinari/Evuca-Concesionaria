import React, {useState} from 'react';
import {Nav, NavItems, NavItem, NavLink, ButtonLogin, Dropdown, ButtonLink } from './NavStyled';
import logoName from '../../img/logoAzul.png';
import {Link} from 'react-router-dom';

const NavBar = () => {
    // desplega Dropdown al hacer click en el boton
    const [dropdown, setDropdown] = useState(false)
    const handleDisplay = () => {
        setDropdown(!dropdown)
    }
    
    return ( 
        <Nav>
            <Link to="/">
                <img src={logoName} alt="consecionario automotor" width={150} />
            </Link>
            <NavItems>
                <NavItem>
                    <ButtonLink onClick={handleDisplay}>Categorias
                    {dropdown ? 
                        <Dropdown>
                            <NavLink>Automoviles</NavLink>
                            <NavLink>Motocicletas</NavLink>
                            <NavLink>Camionetas</NavLink>
                            <NavLink>Camiones</NavLink>
                            <NavLink>Otros</NavLink>
                        </Dropdown> : null}
                    </ButtonLink>
                </NavItem>
                <NavItem >
                    <NavLink to="/agencias">Agencias</NavLink>
                </NavItem>
            </NavItems>
            <NavItems>
                <ButtonLogin to='/logins' >LogIn</ButtonLogin>
            </NavItems>
     </Nav>
     );
}
 
export default NavBar;