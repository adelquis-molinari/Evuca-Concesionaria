import styled from 'styled-components';

export const Nav = styled.nav`
    display: flex;
    position: fixed;
    flex-direction: row;
    justify-content: space-between;
    background-color: #fff;
    border-bottom: 1px solid #e5e5e5;
    box-shadow: 0 1px 0 rgba(9,30,66,.25);
    padding: 0.5rem 1rem;
    top: 0;
    width: 100%;
    height: auto;
    z-index: 1;
    align-items: center;
    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        height: auto;
        padding: 0.5rem 0;
    }
`;
export const LogoName = styled.a`
    color: #0366d6;
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
export const NavItem = styled.li`
    margin-right: 1rem;
    @media (max-width: 768px) {
        margin-bottom: 1rem;
    }
`;
export const NavLink = styled.a`
    color: #0366d6;
    text-decoration: none;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    &:hover {
        color: #81b644;
        text-decoration: none;
    }
`;
export const ButtonLogin = styled.button`
    background-color: #ffffff;
    border: 1px solid #ffffff;
    border-radius: 4px;
    color: #0366d6;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.5rem 1rem;
    text-decoration: none;
    margin-right: 50px;
    &:hover  {
        background-color: #16a4cf;
        border: 1px solid #e5e5e5;
        color: #ffffff;
        text-decoration: none;
        transition: 0.2s;
    }
    @media (max-width: 768px) {
        margin-right: 0px;
    }
`;
// Nav Dropdown
export const Dropdown = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 200px;
    text-align: left;
    left: 0;
    top: 100%;
    background-color: #afafaf;
    border-bottom: 1px solid #e5e5e5;
    box-shadow: 0 1px 0 rgba(9,30,66,.25);
    padding: 0.5rem 1rem;
    li {
        background: #afafaf;
        padding: 0.5rem;
    }
    @media (max-width: 768px) {
        margin-right: 0px;
    }
`;