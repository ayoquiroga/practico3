import React, { useState } from 'react';
import { Nombre } from './componentes/Nombre';
import { Saludo } from './componentes/Saludo';
import { Resultado } from './componentes/Resultado';
import { Parciales } from './componentes/Parciales';
import { Reiniciar } from './componentes/Reiniciar';
import { Juego } from './componentes/Juego'
import styled from 'styled-components';

function App() {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [jugador, setJugador] = useState('');
  const [computadora, setComputadora] = useState('');
  const [puntosJugador, setPuntosJugador] = useState(0);
  const [puntosComputadora, setPuntosComputadora] = useState(0);

  return (
    <div className="App">
        <Nombre nombre={nombre} setNombre={setNombre} />
        <Saludo nombre={nombre} mensaje={mensaje} setMensaje={setMensaje} />
        <Juego nombre={nombre} setNombre={setNombre} setMensaje={setMensaje} puntosJugador={puntosJugador} puntosComputadora={puntosComputadora} setPuntosJugador={setPuntosJugador} setPuntosComputadora={setPuntosComputadora} setJugador={setJugador} setComputadora={setComputadora} />
        <Parciales nombre={nombre} jugador={jugador} computadora={computadora} />
        <Resultado puntosJugador={puntosJugador} puntosComputadora={puntosComputadora} nombre={nombre} />
        {/* <Reiniciar nombre={nombre} setNombre={setNombre} puntosJugador={puntosJugador} puntosComputadora={puntosComputadora} setPuntosJugador={setPuntosJugador} setPuntosComputadora={setPuntosComputadora} setMensaje={setMensaje} /> */}
    </div>
  );
}

export default App;
