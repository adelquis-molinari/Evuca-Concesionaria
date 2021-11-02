import React, {useState} from 'react';
import {Nav, NavItems, NavItem, NavLink, ButtonLogin, Dropdown, ButtonLink } from './NavStyled';
import logoName from '../../img/logoAzul.png';
import {Link} from 'react-router-dom';
import CardList from './CardList/CardList';
import {marcasAutos, marcasMoto, marcasTractor } from './dataNav';
const NavBar = () => {
    // desplega Dropdown al hacer click en el boton
    const [dropdown, setDropdown] = useState(false)
    const [dropdown2, setDropdown2] = useState(false)
    const [dropAutos, setAutos] = useState(false)
    const [dropMoto, setMoto] = useState(false)
    const [dropTractor, setTractor] = useState(false)

    const autosDrop = () => {
        setAutos(!dropAutos)
        setMoto(false)
        setTractor(false)
    }
    const motoDrop = () => {
        setMoto(!dropMoto)
        setAutos(false)
        setTractor(false)
    }
    const tractorDrop = () => {
        setTractor(!dropTractor)
        setAutos(false)
        setMoto(false)
    }

    const handleClick = () => {
        setDropdown2(!dropdown2)
        setDropdown(false);
        setMoto(false)
        setAutos(false)
        setTractor(false)
    }

    const handleDisplay = () => {
        setDropdown(!dropdown)
        setDropdown2(false)
        setMoto(false)
        setAutos(false)
        setTractor(false)
    }

    return ( 
        
        <Nav>
            <Link to="/">
                <img src={logoName} alt="consecionario automotor" width={150} />
            </Link>
            <NavItems>
                <NavItem>
                    <ButtonLink onClick={handleDisplay}>Vehiculos <i className="fas fa-caret-down"></i>
                    {dropdown ? 
                        <React.Fragment>
                            <Dropdown>
                                <div>
                                    <ButtonLink onMouseEnter={autosDrop} >
                                        <NavLink to="/automoviles">Automoviles  </NavLink>
                                    </ButtonLink>
                                    <ButtonLink onMouseEnter={motoDrop} >
                                        <NavLink to="/motocicletas">Motocicletas </NavLink>
                                    </ButtonLink>
                                    <ButtonLink onMouseEnter={tractorDrop} >
                                        <NavLink to="/tractores">Tractores </NavLink>
                                    </ButtonLink>
                                </div>
                                <div>
                                    {dropAutos ? 
                                        <CardList marcas={marcasAutos} />
                                        : null
                                    }
                                    {dropMoto ? 
                                        <CardList marcas={marcasMoto} />
                                        : null
                                    }
                                    {dropTractor ? 
                                        <CardList marcas={marcasTractor} />
                                        : null
                                    }
                                </div>
                            </Dropdown>
                           
                        </React.Fragment>
                        : null}
                    </ButtonLink>
                </NavItem>
                <NavItem>
                    <ButtonLink onClick={handleClick}  >Postventa <i className="fas fa-caret-down"></i>
                    {dropdown2 ? 
                        <Dropdown>
                            <NavLink to="/Servicio-tecnico">Sevicio técnico</NavLink>
                            <NavLink to="/garantia" >Garantía</NavLink>
                            <NavLink to="/seguro" >Seguro</NavLink>
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