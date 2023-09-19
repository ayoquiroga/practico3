import React from 'react';
import styled from 'styled-components';

export const Saludo = ({nombre, mensaje, setMensaje}) => {

  const BUTTON = styled.button`
      text-align: center;
      background-color: bisque;
      height: 45px;
      width: 150px;
      font-size: large;
      border-radius: 7px;
      font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif
  `;

const P = styled.p`
    font-size:30px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    border-radius: 7px;
    color:green;
`;

  const handleVerificarNombre = () => {

    if ( nombre.trim() === '' ) {
        setMensaje('Por favor, ingresa un nombre válido.');
    } else {
        setMensaje(`¡Bienvenido, ${nombre}!`);
    }
  };
  return (<>
            <BUTTON onClick={handleVerificarNombre}>Verificar Nombre</BUTTON>
            <P>{mensaje}</P>
          </>
      );
    
}