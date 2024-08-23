import React, { useState } from 'react';

function App() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [edad, setEdad] = useState('');
  const [telefono, setTelefono] = useState('');
  const [personas, setPersonas] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const nuevaPersona = { nombre, apellido, edad, telefono };
    setPersonas([...personas, nuevaPersona]);
    setNombre('');
    setApellido('');
    setEdad('');
    setTelefono('');
  };

  const handleEliminar = (index) => {
    const nuevasPersonas = [...personas];
    nuevasPersonas.splice(index, 1);
    setPersonas(nuevasPersonas);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" value={nombre} onChange={(event) => setNombre(event.target.value)} />
        </label>
        <br />
        <label>
          Apellido:
          <input type="text" value={apellido} onChange={(event) => setApellido(event.target.value)} />
        </label>
        <br />
        <label>
          Edad:
          <input type="number" value={edad} onChange={(event) => setEdad(event.target.value)} />
        </label>
        <br />
        <label>
          Teléfono:
          <input type="tel" value={telefono} onChange={(event) => setTelefono(event.target.value)} />
        </label>
        <br />
        <button type="submit">Agregar persona</button>
      </form>
      <table id="tabla-personas">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Edad</th>
            <th>Teléfono</th>
            <th>Acción</th>
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
    </div>
  );
}

export default App;