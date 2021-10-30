import styled from 'styled-components';
import {colorPrimary, colorSecondary, colorFondo} from '../Normalisador/Normalizador';
import { Link } from 'react-router-dom';


export const FooterDiv = styled.footer`
    background-color: ${colorFondo};
    color: ${colorPrimary};
    display: flex;
    position: fixed;
    bottom: 0;
    padding: 20px;
    text-align: center;
    font-size: 12px;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;

export const LinkEvukes = styled(Link)`
    color: ${colorPrimary};
    text-decoration: none;
    font-size: 14px;
    font-weight: bold;
    &:hover{
        color: ${colorSecondary};
    }
`;

// link de navegacion
export const LinkFooter = styled(Link)`
    color: ${colorPrimary};
    text-decoration: none;
    font-size: 14px;
    padding: 5px;
    font-weight: bold;
    &:hover{
        color: ${colorSecondary};
    }
`;
