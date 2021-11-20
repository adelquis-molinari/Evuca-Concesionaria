import React from 'react';
import styled from 'styled-components';

const ErrorSpanStyled = styled.span`
    color: red;
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 1rem;
    width: 100%;
`;


const ErrorSpan = ({error}) =>( 
    <ErrorSpanStyled>
        {error}
    </ErrorSpanStyled>
 );
export default ErrorSpan;
