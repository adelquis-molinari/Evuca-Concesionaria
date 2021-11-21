import React from 'react';
import styled from 'styled-components';

const ErrorSpanStyled = styled.span`
    position: absolute;
    display: flex;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 5%;
    bottom: 5%;
    left: 0;
    padding: 5px;
    color: white;
    font-size: 0.875rem;
    font-weight: bold;
    background: #ff8888;
`;


const ErrorSpan = ({error}) =>( 
    <ErrorSpanStyled>
        {error}
    </ErrorSpanStyled>
 );
export default ErrorSpan;
