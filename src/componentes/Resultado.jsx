import React from 'react';
import styled from 'styled-components';

const H2 = styled.h2`
    background-color: aqua;
    border-radius: 7px;
    text-align: center;
    border-color: #10100f 3px solid;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    
`;

const P = styled.p`
    font-size:20px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    border-radius: 7px;
    color:blue;
`;

export const Resultado = ({puntosJugador, puntosComputadora, nombre}) => {


    return(
        <>
        <H2>Resultado:</H2>
        <div>
          <P>{nombre}: {puntosJugador} puntos</P>
          <P>Computadora: {puntosComputadora} puntos</P>
        </div>
        </>
    );
}