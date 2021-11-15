/* eslint-disable jsx-a11y/alt-text */
import React, {useState} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {Link} from 'react-router-dom';
import {Nav, NavItems, NavItem, NavLink, ButtonLog, Dropdown, ButtonLink,DivColumn, SvgGarage } from './NavStyled';
import {marcasAutos, marcasMoto, marcasTractor } from './dataNav';
import logoName from '../../img/logoAzul.png';
import CardList from './CardList/CardList';
import Profile from './Profile/Profile';
import InputSearch from '../InputSearch/InputSearch';
import { useSelector } from 'react-redux';

const NavBar = () => {
    const dataGarage = useSelector(state => state);
    // console.log(dataGarage);
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

    const pathVacio = "M357.715,68.555l-159.434,-66.387c-6.918,-2.87 -14.702,-2.87 -21.621,-0l-159.375,66.387c-10.43,4.394 -17.285,14.59 -17.285,25.957l-0,200.801c-0,2.578 2.109,4.687 4.687,4.687l46.875,0c2.579,0 4.688,-2.109 4.688,-4.688l-0,-145.312c-0,-10.313 8.555,-18.75 19.102,-18.75l224.296,0c10.547,0 19.102,8.438 19.102,18.75l0,145.313c0,2.578 2.109,4.687 4.688,4.687l46.875,0c2.578,0 4.687,-2.109 4.687,-4.688l0,-200.8c0,-11.367 -6.855,-21.563 -17.285,-25.957Z";
    const pathAuto = "M277.787,186.845c-2.007,-2.083 -3.053,-5.129 -4.302,-7.754c-3.453,-7.273 -6.901,-14.545 -10.354,-21.817c-3.422,-7.206 -6.368,-13.568 -14.012,-16.78c-7.953,-3.343 -17.443,-3.364 -25.887,-4.099c-24.964,-2.181 -50.114,-2.4 -75.057,0c-17.523,1.688 -29.618,3.359 -37.181,21.312c-2.156,4.669 -4.318,9.333 -6.475,14.002c-1.441,3.118 -2.887,6.247 -4.328,9.365c-3.577,7.727 -6.912,7.76 -13.937,10.845c-3.111,1.365 -5.962,3.343 -8.358,5.804c-4.986,5.102 -7.825,17.613 -7.825,24.836l-0,32.88c-0,15.136 44.523,17.889 59.26,17.889l117.427,-0c14.737,-0 58.166,-2.753 58.166,-17.889l-0,-32.88c-0,-7.475 -3.048,-20.216 -8.343,-25.357c-4.27,-4.159 -11.011,-4.959 -16.045,-8.149c-0.992,-0.63 -1.921,-1.353 -2.749,-2.208Zm-118.371,-36.052c19.23,-0.647 38.485,-0.943 57.703,-0c13.431,0.657 27.324,-0 34.057,7.133l4.511,14.605c2.737,8.859 -2.5,16.04 -11.824,16.04l-112.715,0c-9.267,0 -14.596,-7.081 -11.849,-15.989c0,-0 4.474,-14.524 4.531,-14.656c8.381,-7.133 20.914,-6.646 35.586,-7.133Zm-50.198,93.483c-10.808,0 -19.571,-8.587 -19.571,-19.18c0,-10.593 8.763,-19.18 19.571,-19.18c10.809,-0 19.572,8.587 19.572,19.18c-0,10.593 -8.763,19.18 -19.572,19.18Zm103.185,0l-49.8,0c-8.253,0 -14.941,-7.02 -14.941,-16.248c-0,-9.223 6.688,-16.632 14.941,-16.632l49.8,-0c8.252,-0 14.941,7.414 14.941,16.632c-0,9.228 -6.689,16.248 -14.941,16.248Zm53.384,0c-10.809,0 -19.571,-8.587 -19.571,-19.18c-0,-10.593 8.762,-19.18 19.571,-19.18c10.809,-0 19.571,8.587 19.571,19.18c0,10.593 -8.762,19.18 -19.571,19.18Zm22.367,54.801c9.266,0 16.775,-7.168 16.775,-16.248l0,-11.658c-14.644,10.462 -39.522,12.325 -49.308,12.5c2.304,6.385 8.455,15.406 15.758,15.406l16.775,0Zm-201.302,0l16.775,0c7.303,0 14.909,-9.864 17.213,-16.248c-9.786,-0.176 -34.658,-2.039 -49.308,-12.5l-1.456,12.5c0,9.08 7.51,16.248 16.776,16.248Z"
    
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
                        {/* <SvgGarage viewBox="0 0 375 300" version="1.1" >
                            {
                                garage.length > 0 ?
                                <path d={pathAuto} />
                                :
                                <path d={pathVacio}/>
                            }
                        </SvgGarage> */}
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