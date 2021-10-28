import React, {useState} from 'react'
import {Nav, LogoName, NavItems, NavItem, NavLink, ButtonLogin, Dropdown } from './NavStyled'


const NavBar = () => {


    // desplega Dropdown al hacer click en el boton
    const [dropdown, setDropdown] = useState(false)
    const handleDisplay = () => {
        setDropdown(!dropdown)
    }
    
    return ( 
        <Nav>
            <LogoName>EvuCar</LogoName>
            <NavItems>
                <NavItem>
                    <NavLink onClick={handleDisplay}>Categorias
                    {dropdown ? 
                        <Dropdown>
                            <NavLink>Automoviles</NavLink>
                            <NavLink>Motocicletas</NavLink>
                            <NavLink>Camionetas</NavLink>
                            <NavLink>Camiones</NavLink>
                            <NavLink>Otros</NavLink>
                        </Dropdown> : null}
                    </NavLink>
                </NavItem>
                <NavItem >
                    <NavLink>Agencias</NavLink>
                </NavItem>
                <NavItem >
                    <NavLink>Pricing</NavLink>
                </NavItem>
                <NavItem >
                    <NavLink>Disabled</NavLink>
                </NavItem>
            </NavItems>
            <NavItems>
                <NavItem>
                    <ButtonLogin>LogIn</ButtonLogin>
                </NavItem>
            </NavItems>
     </Nav>
     );
}
 
export default NavBar;