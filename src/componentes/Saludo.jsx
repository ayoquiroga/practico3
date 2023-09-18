import React from 'react';

export const Saludo = ({nombre, mensaje, setMensaje}) => {

    const handleVerificarNombre = () => {

        if ( nombre.trim() === '' ) {
          setMensaje('Por favor, ingresa un nombre válido.');
        } else {
          setMensaje(`¡Bienvenido, ${nombre}!`);
        }
      };

      return ( <>
        <button onClick={handleVerificarNombre}>Verificar Nombre</button>
        <p>{mensaje}</p>
        </>
      );
    
}