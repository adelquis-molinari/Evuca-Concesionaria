import React, {useState} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {Link} from 'react-router-dom';
import {Nav, NavItems, NavItem, NavLink, ButtonLog, Dropdown, ButtonLink,DivColumn } from './NavStyled';
import {marcasAutos, marcasMoto, marcasTractor } from './dataNav';
import logoName from '../../img/logoAzul.png';
import CardList from './CardList/CardList';
import Profile from './Profile/Profile';
import InputSearch from '../InputSearch/InputSearch';

const NavBar = () => {
    // desplega Dropdown al hacer click en el boton
    const [dropdown, setDropdown] = useState(false);
    const [dropdown2, setDropdown2] = useState(false);
    const [dropAutos, setAutos] = useState(false);
    const [dropMoto, setMoto] = useState(false);
    const [dropTractor, setTractor] = useState(false);
    const [seachMenu, setSeachMenu] = useState(false);
    const { isAuthenticated, loginWithRedirect} = useAuth0();
    
    //desplegar el menu Principal   
    const handleDisplay = () => {
        setDropdown(!dropdown)
        setDropdown2(false)
        setMoto(false)
        setAutos(false)
        setTractor(false)
        setSeachMenu(false)
    }
    //desplegar el menu de categorias Autos
    const autosDrop = () => {
        setAutos(!dropAutos)
        setMoto(false)
        setTractor(false)
    }
    //desplegar el menu de categorias Motos
    const motoDrop = () => {
        setMoto(!dropMoto)
        setAutos(false)
        setTractor(false)
        setSeachMenu(false)
    }
    //desplegar el menu de categorias Tractores
    const tractorDrop = () => {
        setTractor(!dropTractor)
        setAutos(false)
        setMoto(false)
        setSeachMenu(false)
    }
    //desplegar el menu Postventa
    const handleClick = () => {
        setDropdown2(!dropdown2)
        setDropdown(false);
        setMoto(false)
        setAutos(false)
        setTractor(false)
        setSeachMenu(false)
    }
    //desplegar el menu de busqueda
    const handleSeach = () => {
        setSeachMenu(!seachMenu)
        setDropdown(false)
        setDropdown2(false)
        setMoto(false)
        setAutos(false)
        setTractor(false)
    }
    //click fuera del menu se cierra
    return ( 
        <>
            <Nav>
                <Link to="/">
                    <img src={logoName} alt="consecionario automotor" width={150} />
                </Link>
                <NavItems>
                    <NavItem>
                        <ButtonLink onClick={handleDisplay}>Vehiculos <i className="fas fa-caret-down"></i>
                        </ButtonLink>
                    </NavItem>
                    <NavItem>
                        <ButtonLink onClick={handleClick}  >Postventa <i className="fas fa-caret-down"></i>
                        </ButtonLink>
                    </NavItem>
                    <NavItem >
                        <NavLink to="/agencias">Agencias</NavLink>
                    </NavItem>
                </NavItems>
                <NavItems>
                        <ButtonLog 
                            onClick={handleSeach}
                        ><i className="fas fa-search"></i> Buscar</ButtonLog> 
                    <>
                    {
                        isAuthenticated ?
                            <Profile />
                        : 
                            <ButtonLog 
                                onClick={() => loginWithRedirect() }
                            >iniciar Seción</ButtonLog>
                    }
                    </>
                </NavItems>
        </Nav>
        <Dropdown transf={ dropdown  ? 0 : -100 }  >
            <DivColumn>
                <ButtonLink onMouseEnter={autosDrop} >
                    <NavLink to="/automoviles">Automoviles  </NavLink>
                </ButtonLink>
                <ButtonLink onMouseEnter={motoDrop} >
                    <NavLink to="/motocicletas">Motocicletas </NavLink>
                </ButtonLink>
                <ButtonLink onMouseEnter={tractorDrop} >
                    <NavLink to="/tractores">Tractores </NavLink>
                </ButtonLink>
            </DivColumn>
            <>
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
            </>
        </Dropdown>
        <Dropdown transf={ dropdown2  ? 0 : -100 } >
            <NavLink to="/Servicio-tecnico">Sevicio técnico</NavLink>
            <NavLink to="/garantia" >Garantía</NavLink>
            <NavLink to="/seguro" >Seguro</NavLink>
        </Dropdown>
        <Dropdown transf={ seachMenu ? 0 : -100 }>
            <InputSearch />
        </Dropdown>
    </>
    );
}


export default NavBar;