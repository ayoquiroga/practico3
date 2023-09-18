import React , { useEffect} from 'react';

export const Reiniciar = ({nombre, setNombre, puntosJugador, puntosComputadora, setPuntosJugador, setPuntosComputadora, setMensaje}) => {

    useEffect(() => {

        // Reiniciar el juego
          setPuntosJugador(0);
          setPuntosComputadora(0);
          setMensaje('');
          setNombre('');

      }, [nombre, setNombre, puntosJugador, puntosComputadora, setPuntosJugador, setPuntosComputadora, setMensaje]);

    return(<>
        <button type='submit' > REINICIAR </button>
    </>
    );
  }
