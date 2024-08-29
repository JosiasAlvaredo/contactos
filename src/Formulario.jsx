import React from 'react';

const Formulario = ({ handleSubmit, handleInputChange, formData }) => {
    
    return (
        <form onSubmit={handleSubmit}>
            <div className='input'>
                <label htmlFor="nombre">Nombre:</label>
                <input
                    type="text"
                    id="nombre"
                    name="nombre" 
                    value={formData.nombre} 
                    onChange={handleInputChange} 
                />
            </div>
            <div className='input'>
                <label htmlFor="apellido">Apellido:</label>
                <input
                    type="text"
                    id="apellido"
                    name="apellido" 
                    value={formData.apellido} 
                    onChange={handleInputChange} 
                />
            </div>
            <fieldset className="grid">
                <div className='input'>
                    <label htmlFor="edad">Edad:</label>
                    <input
                        type="number"
                        id="edad"
                        name="edad" 
                        value={formData.edad} 
                        onChange={handleInputChange} 
                    />
                </div>
                <div className='input'>
                    <label htmlFor="telefono">Telefono:</label>
                    <input
                        type="tel"
                        id="telefono"
                        name="telefono" 
                        value={formData.telefono} 
                        onChange={handleInputChange} 
                    />
                </div>
                <button type="submit">Agregar</button>
            </fieldset>
        </form>
    );
};

export default Formulario;