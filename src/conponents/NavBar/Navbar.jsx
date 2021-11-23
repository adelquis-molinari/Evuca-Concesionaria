/* eslint-disable jsx-a11y/alt-text */
import React, {useState} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {Link} from 'react-router-dom';
import logo from '../../img/logoAzul.png';
import './Navbar.css';
import {ButtonLog, NavLink, NavItem, ButtonLink, Dropdown} from './NavStyled';
import Profile from './Profile/Profile';
import InputSearch from '../InputSearch/InputSearch';
import { connect } from 'react-redux';
import NavCart from '../NavCart';

const NavBar = (props) => {
    // desplega Dropdown al hacer click en el boton
    const [dropdown, setDropdown] = useState(false);
    const [dropdown2, setDropdown2] = useState(false);
    const [dropdown3, setDropdown3] = useState(false);
    const [seachMenu, setSeachMenu] = useState(false);
    const { isAuthenticated, loginWithRedirect} = useAuth0();
    //desplegar el menu Principal   
    const handleMenu = () => {
        setDropdown (!dropdown);
        setDropdown2(false);
        setDropdown3(false);
        setSeachMenu(false);
    }
    //desplegar el menu de Vehículos
    const handleMenu2 = () => {
        setDropdown2(!dropdown2);
        setDropdown3(false);
    }
    //desplegar el menu de Postventa
    const handleMenu3 = () => {
        setDropdown3(!dropdown3);
        setDropdown2(false);
    }
    //desplegar el menu de busqueda
    const handleSeach = () => {
        setSeachMenu(!seachMenu);
        setDropdown(false);
    }
    // carrito de compras
    return ( 
        <>
            <nav className="nav-transp">
                <div
                onClick={handleMenu}
                className="hamburger">
                    <i className="fas fa-bars"></i>
                </div>
                <div className="logo-container" >
                    <span className="linea-1" ></span>
                    <Link  to="/">
                        <img className="logo" src={logo} alt="logo"/>
                    </Link>
                    <span className="linea-2" ></span>
                </div>
                    <NavCart />
                <ButtonLog 
                        onClick={handleSeach}
                    ><i className="fas fa-search"></i></ButtonLog> 
                <>
                    {
                        isAuthenticated ?
                            <Profile />
                        : 
                            <ButtonLog 
                                onClick={() => loginWithRedirect() }
                            >LogIn</ButtonLog>
                    }
                </>
                <Dropdown transf={ seachMenu ? 55 : -100 }>
                    <InputSearch />
                </Dropdown>
            </nav>
            <div className={ dropdown ? "menu-lateral menu-lateral-active" : "menu-lateral"  }>
                <div className="menu-container">
                    <div 
                    className="close-menu">
                        <i 
                        onClick={handleMenu}
                        className="fas fa-times"></i>
                    </div>
                    <div className="menu-lateral-content">
                        <div className="menu-items">
                            <NavItem >
                                <NavLink onClick={handleMenu} to="/">Inicio</NavLink>
                            </NavItem>
                            <NavItem>
                                <ButtonLink onClick={handleMenu2}>Vehiculos <i className="fas fa-chevron-right icon-arrow" ></i>  </ButtonLink>
                            </NavItem>
                            {/* <NavItem>
                                <ButtonLink onClick={handleMenu3}>Post Venta </ButtonLink>
                            </NavItem> */}
                            <NavItem >
                                <NavLink onClick={handleMenu} to="/agencias">Agencias</NavLink>
                            </NavItem>
                            <NavItem >
                                <NavLink onClick={handleMenu} to="/contact">Contactanos</NavLink>
                            </NavItem>
                        </div>
                        { dropdown2 ?
                        <div className="menu-items">
                            <NavLink onClick={handleMenu} to="/shop/Autos">Automoviles  </NavLink>
                            <NavLink onClick={handleMenu} to="/shop/Motos">Motocicletas </NavLink>
                            <NavLink onClick={handleMenu} to="/shop/Tractores">Tractores </NavLink>
                        </div>
                        : null
                        }
                        {
                            dropdown3 ?
                            <div className="menu-items">
                                <NavLink onClick={handleMenu} to="/Servicio-tecnico">Sevicio técnico</NavLink>
                                <NavLink onClick={handleMenu} to="/garantia" >Garantía</NavLink>
                                <NavLink onClick={handleMenu} to="/seguro" >Seguro</NavLink>
                            </div>
                            : null
                        }
                    </div>
                </div>
            </div>
    </>
    );
}


const mapStateToProps = state => {
    return {
        dataGarage: state?.dataGarage ? state.dataGarage : [],
    }
}

export default connect(mapStateToProps)(NavBar);