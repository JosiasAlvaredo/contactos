import React, { useState } from 'react';
import '@picocss/pico';
import Tabla from './Tabla';
import Formulario from './Formulario';
import Header from './Header';

function App() {
  const [personas, setPersonas] = useState([]);
  const [formData, setFormData] = useState({ nombre: '', apellido: '', edad: '', telefono: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.nombre && formData.apellido && formData.edad && formData.telefono) {
      const nuevaPersona = { ...formData };
      setPersonas([...personas, nuevaPersona]);
      setFormData({ nombre: '', apellido: '', edad: '', telefono: '' });
      Toastify({
        text: "Persona agregada con éxito!",
        duration: 3000,
        gravity: "top",
        position: "center",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast();
    } else {
      Toastify({
        text: "Complete todos los campos",
        duration: 3000,
        gravity: "top",
        position: "center",
        style: {
          background: "linear-gradient(to left, #ff3737, #fe7676)",
        },
      }).showToast();
    }
  };

  const handleEliminar = (index) => {
    setPersonas(personas.filter((persona, i) => i !== index));
    Toastify({
      text: "Contacto eliminado",
      duration: 3000,
      gravity: "top",
      position: "center",
      style: {
        background: "linear-gradient(to left, #5dade2, #1b4f72)",
      },
    }).showToast();
  };

  const handleInputChange = (event) => {
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