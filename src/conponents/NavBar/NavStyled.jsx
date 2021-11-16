import styled from 'styled-components';
import {colorPrimary, colorSecondary, colorFondo} from '../Normalisador/Normalizador';
import {Link} from 'react-router-dom';
// Nav Menu
export const Nav = styled.nav`
    display: flex;
    position: fixed;
    flex-direction: row;
    justify-content: space-between;
    background-color: #fff;
    border-bottom: 1px solid #e5e5e5;
    padding: 0.5rem 1rem;
    top: 0;
    width: 100%;
    height: 4rem;
    z-index: 10000;
    align-items: center;
    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        height: auto;
        padding: 0.5rem 0;
    }
`;

// Nav Dropdown
export const Dropdown = styled.div`
    display: flex;
    position: fixed;
    flex-direction: row;
    width: 100%;
    height: 140px;
    right: 0;
    top: 0;
    text-align: left;
    background-color: #d4d4cef7;
    border-bottom: 1px solid ${colorSecondary};
    padding: 0.5rem 1rem;
    transform: translateY(${props => props.transf}%);
    transition: transform 0.3s ease-in-out;
    z-index: 10;
    @media (max-width: 768px) {
        margin-right: 0px;
    }
`;

export const DivColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const LogoName = styled.a`
    color:  ${colorPrimary};
    text-decoration: none;
    font-size: 2rem;
    font-weight: bold;
    margin-right: 1rem;
`;
export const NavItems = styled.ul`
    display: flex;
    flex-direction: row;
    list-style: none;
    margin: 0;
    padding: 0;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        padding:12px;
    }
`;
export const NavItem = styled.div`
    padding: 0.5rem 1rem;
    margin-right: 1rem;
    @media (max-width: 768px) {
        margin-bottom: 1rem;
    }
`;
export const NavLink = styled(Link)`
    color: ${colorPrimary};
    text-decoration: none;
    font-size: 2.3rem;
    font-weight: bold;
    padding: 0.5rem 1rem;
    cursor: pointer;
    &:hover {
        color: #319dd3;
        text-decoration: none;
    }
`;
export const ButtonLink = styled.span`
    color: ${colorPrimary};
    font-size: 2.3rem;
    font-weight: bold;
    padding: 0.5rem 1rem;
    height: 100%;
    cursor: pointer;
    &:hover {
        color: #319dd3;
    }
`;
export const ButtonLog = styled.button`
    background: none;
    border: none;
    border-radius: 4px;
    color: ${colorPrimary};
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.5rem 1rem;
    text-decoration: none;
    margin-right: 50px;
    &:hover  {
        background-color: ${colorFondo};
        border: 1px solid ${colorPrimary};
        color: #ffffff;
        text-decoration: none;
        transition: 0.2s;
    }
    @media (max-width: 768px) {
        margin-right: 0px;
    }
`;
export const SvgGarage = styled.svg`
    width: 25px;
    fill: ${colorPrimary};
    margin-right: 0.5rem;
    cursor: pointer;
    &:hover {
        fill: #319dd3;
    }
`;