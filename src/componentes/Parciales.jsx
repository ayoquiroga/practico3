import React from 'react';


export const Parciales = ({nombre, jugador, computadora}) => {

    return(<>
            <h2>Elecciones de la ronda</h2>
            <div>
            <p>{nombre} eligió: {jugador}</p>
            <p>Computadora eligió: {computadora}</p>
            </div>
        </>
    )
}