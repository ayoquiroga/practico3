import React from 'react';
import styled from 'styled-components';

const H1 =  styled.h1`
    color: #3606bb;
    height: 45px;
    padding-top: 25px;
    border-color: #10100f 3px solid;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
`;

const LABEL = styled.label`

    background-color: aquamarine;
    border: #10100f solid 2px;
    border-radius: 7px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: larger;   
`;

const INPUT = styled.input`
    text-align: center;
    height: 45px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 25px;
    color: rgb(179, 27, 88);
    border-radius: 7px;
`;


export const Nombre = ({nombre, setNombre}) => {

    const handleNombreChange = (e) => {
        setNombre(e.target.value);
      };
      
    return (<>
                <H1>Piedra, Papel y Tijera</H1>
                <LABEL>Ingresa tu nombre</LABEL>
                <INPUT value={nombre} onChange={handleNombreChange} />
        </>
    );

}