import React from 'react'
import {NavLink} from '../NavStyled';
import {CardListStyled, CardListContainer} from './CardLisStyled';

const CardList = ({marcas}) => {
    return ( 
        <CardListContainer>
            {marcas.map(marca => (
                <CardListStyled key={marca.id}>
                    <NavLink key={marca.id} to={`/${marca.name}`}>{marca.name}</NavLink>
                </CardListStyled>
            ))}
        </CardListContainer>
    );
}

export default CardList;