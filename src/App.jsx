import React, { useState } from 'react';
import '@picocss/pico';
import Tabla from './Tabla';
import Formulario from './Formulario';
import Header from './Header';

function App() {
  const [personas, setPersonas] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const nuevaPersona = { nombre, apellido, edad, telefono };
    setPersonas([...personas, nuevaPersona]);
  };

  const handleEliminar = (index) => {
    const nuevasPersonas = [...personas];
    nuevasPersonas.splice(index, 1);
    setPersonas(nuevasPersonas);
  };

  return (
    <div className="App">
      <Header />
      <div>
        <Formulario handleSubmit={handleSubmit} />
      </div>
      <div>
        <Tabla personas={personas} handleEliminar={handleEliminar} />
      </div>
    </div>
  );
}

export default App;