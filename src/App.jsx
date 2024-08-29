import React, { useState } from 'react';
import '@picocss/pico';
import Tabla from './Tabla';
import Formulario from './Formulario';
import Header from './Header';

function App() {
  const [personas, setPersonas] = useState([]);
  const [formData, setFormData] = useState({ nombre: '', apellido: '', edad: '', telefono: '' });

  const handleSubmit = (event) => {
    console.log('handleSubmit se está ejecutando');
    event.preventDefault();
    const nuevaPersona = { ...formData };
    setPersonas([...personas, nuevaPersona]);
    setFormData({ nombre: '', apellido: '', edad: '', telefono: '' });
  };

  const handleEliminar = (index) => {
    console.log('handleEliminar se está ejecutando');
    setPersonas(personas.filter((persona, i) => i !== index));
  };

  const handleInputChange = (event) => {
    console.log('handleInputChange se está ejecutando');
    const { name, value } = event.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };


  return (
    <div className="App">
      <Header />
      <div>
        <Formulario
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
          formData={formData}
        />
      </div>
      <div>
        <Tabla personas={personas} handleEliminar={handleEliminar} />
      </div>
    </div>
  );
}

export default App;