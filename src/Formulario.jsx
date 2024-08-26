import React, { useState } from 'react';

const Formulario = ({ handleSubmit }) => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [edad, setEdad] = useState('');
    const [telefono, setTelefono] = useState('');

    return (
        <form onSubmit={handleSubmit}>
            <div className='input'>
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" value={nombre} onChange={(event) => setNombre(event.target.value)} />
            </div>
            <div className='input'>
                <label htmlFor="apellido">Apellido:</label>
                <input type="text" id="apellido" value={apellido} onChange={(event) => setApellido(event.target.value)} />
            </div>
            <fieldset class="grid">
            <div className='input'>
                <label htmlFor="edad">Edad:</label>
                <input type="number" id="edad" value={edad} onChange={(event) => setEdad(event.target.value)} />
            </div>
            <div className='input'>
                <label htmlFor="telefono">Telefono:</label>
                <input type="tel" id="telefono" value={telefono} onChange={(event) => setTelefono(event.target.value)} />
            </div>
            <button type="submit">Agregar</button>
            </fieldset>
        </form>
    );
};

export default Formulario;