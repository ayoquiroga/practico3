import React from 'react';
import styled from 'styled-components';

const H2 = styled.h2`
    background-color: pink;
    border-radius: 7px;
    text-align: center;
    color: #3606bb;
    height: 30px;
    padding-top: 25px;
    border-color: #10100f 3px solid;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 18px;   
`;

const P = styled.p`
    font-size:20px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    border-radius: 7px;
    color:brown;
`;

export const Parciales = ({nombre, jugador, computadora}) => {

    return(<>
            <H2>Elecciones de la ronda</H2>
            <div>
            <P>{nombre} eligió: {jugador}</P>
            <P>Computadora eligió: {computadora}</P>
            </div>
        </>
    )
}