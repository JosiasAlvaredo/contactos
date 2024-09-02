import React from 'react';

const Tabla = ({ personas, handleEliminar }) => {
  console.log(personas);
  return (
    <table id="tabla-personas" className='tabla'>
      <thead>
      <tr>
        <th scope="col">Nombre</th>
        <th scope="col">Apellido</th>
        <th scope="col">Edad</th>
        <th scope="col">Telefono</th>
        <th scope="col">Acción</th>
      </tr>
      </thead>
      <tbody id="tbody-personas">
        {personas.map((persona, index) => (
          <tr key={index}>
            <td>{persona.nombre}</td>
            <td>{persona.apellido}</td>
            <td>{persona.edad}</td>
            <td>{persona.telefono}</td>
            <td>
              <button onClick={() => handleEliminar(index)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tabla;