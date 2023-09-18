import React, { useEffect } from 'react';

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
      <div>
        <button onClick={() => jugar('piedra')}>Piedra</button>
        <button onClick={() => jugar('papel')}>Papel</button>
        <button onClick={() => jugar('tijera')}>Tijera</button>
      </div>
    </>
    );
}