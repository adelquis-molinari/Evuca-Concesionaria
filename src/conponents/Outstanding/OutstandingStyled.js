import styled from "styled-components";
import * as nor from "../Normalisador/Normalizador";
import {apiDetalladaAutos} from "../../Data/apiAutos";


export const ContainerOutstanding = styled.section`
    background:linear-gradient(185deg, rgba(35, 149, 149, 0.399) 0%, rgba(85, 27, 35, 0.692) 100%), url(${apiDetalladaAutos[9].imgBanner}) center ;
    background-repeat: no-repeat;
    background-attachment: fixed;
    color: #ffffff;
    width: 100%;
    height: 350px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin: 30px 0 30px;
`;

export const Body = styled.div`
    max-width: 80%;
`;
export const ButtonOuts = styled.button`
    background: none;
    color: white;
    font-size: 20px;
    padding: 10px;
    border: 1px solid ${nor.colorAccions};
    border-radius: 8px;
    &:hover{
        background: ${nor.colorAccions};
        transform: scale(1.05);
        transition: all 0.3s;
    }
`;
