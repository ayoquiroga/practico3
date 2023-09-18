import React from 'react';

export const Resultado = ({puntosJugador, puntosComputadora, nombre}) => {


    return(
        <>
        <h2>Resultado:</h2>
        <div>
          <p>{nombre}: {puntosJugador} puntos</p>
          <p>Computadora: {puntosComputadora} puntos</p>
        </div>
        </>
    );
}