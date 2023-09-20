import React, { useEffect } from 'react';
import piedra from '../piedra.png';
import papel from '../papel.png';
import tijera from '../tijera.png';
import styled from 'styled-components';

const IMG = styled.img`
    width: 25%;
    border: solid #10100f;
    border-radius: 12px;
`;

const BUTTON = styled.button`
    border: grey solid;
    border-radius: 25px;
    background-color: rgb(330, 343, 112);
`;

const DIV = styled.div`
  text-align: center;
`;

// Función para que la computadora elija una opción aleatoria
function computadoraElige() {
    const opciones = ['piedra', 'papel', 'tijera'];
    const eleccionAleatoria = Math.floor(Math.random() * 3);
    return opciones[eleccionAleatoria];
  }

export const Juego = ({nombre, setNombre, setMensaje, puntosJugador, puntosComputadora, setPuntosJugador, setPuntosComputadora, setJugador, setComputadora}) => {
    
  useEffect(() => {

    if (puntosJugador === 3 || puntosComputadora === 3) {

      // El juego termina cuando uno de los jugadores llega a 3 puntos.
      alert(`${puntosJugador === 3 ? nombre : 'Computadora'} gana el juego.`);
      // Reiniciar el juego
      setPuntosJugador(0);
      setPuntosComputadora(0);
      setMensaje('');
      setJugador('');
      setComputadora('');
      setNombre('');
      
    }
  }, [nombre, setNombre, setMensaje, puntosJugador, puntosComputadora, setPuntosJugador, setPuntosComputadora, setJugador, setComputadora]);

  const jugar = (eleccionJugador) => {

    const eleccionComputadora = computadoraElige();
    setJugador(eleccionJugador);
    setComputadora(eleccionComputadora);

    if (
      (eleccionJugador === 'piedra' && eleccionComputadora === 'tijera') ||
      (eleccionJugador === 'papel' && eleccionComputadora === 'piedra') ||
      (eleccionJugador === 'tijera' && eleccionComputadora === 'papel')
    ) {
      // Jugador gana la ronda
      setPuntosJugador(puntosJugador + 1);
    } else if (eleccionJugador !== eleccionComputadora) {
      // Computadora gana la ronda
      setPuntosComputadora(puntosComputadora + 1);
    }
  };

    return(<>
      <h2>Elige tu jugada:</h2>
      <DIV>
        <BUTTON onClick={() => jugar('piedra')}><IMG alt='piedra' src={piedra} /></BUTTON>
        <BUTTON onClick={() => jugar('papel')}><IMG alt='papel' src={papel} /></BUTTON>
        <BUTTON onClick={() => jugar('tijera')}><IMG alt='tijera' src={tijera} /></BUTTON>
      </DIV>
    </>
    );
}