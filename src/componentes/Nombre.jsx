import React from 'react';


export const Nombre = ({nombre, setNombre}) => {

    const handleNombreChange = (e) => {
        setNombre(e.target.value);
      };

      
    return (<>
        <h1>Piedra, Papel y Tijera</h1>
        <label>
            Ingresa tu nombre:
            <input type="text" value={nombre} onChange={handleNombreChange} />
        </label>
        </>
    )

}