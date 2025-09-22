import React from "react";
import '../Configuraciones.css';

const Configuraciones = () => {
  return (
    <div className="configuraciones-container">
      <h1>Configuraciones</h1>
      <div className="config-section">
        <h2>Perfil</h2>
        <p>Opciones relacionadas con la información y ajustes del perfil de usuario.</p>
      </div>
      <div className="config-section">
        <h2>Notificaciones</h2>
        <p>Configuración de preferencias de notificación.</p>
      </div>
      <div className="config-section">
        <h2>Seguridad</h2>
        <p>Opciones de seguridad, como cambio de contraseña y autenticación.</p>
      </div>
      <div className="config-section">
        <h2>Otras configuraciones</h2>
        <p>Espacio reservado para futuras opciones.</p>
      </div>
    </div>
  );
};

export default Configuraciones;
