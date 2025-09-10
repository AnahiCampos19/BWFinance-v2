import React, { useState } from 'react';
import WeatherInfo from './WeatherInfo';

function Transacciones() {
    // Estado inicial con algunas transacciones de ejemplo
    const [transacciones, setTransacciones] = useState([
        { id: 1, descripcion: 'Pago de alquiler', monto: -500 },
        { id: 2, descripcion: 'Sueldo', monto: 1500 },
        { id: 3, descripcion: 'Compra supermercado', monto: -200 },
    ]);

    // Estado para los inputs de nueva transacción
    const [nuevaDescripcion, setNuevaDescripcion] = useState('');
    const [nuevoMonto, setNuevoMonto] = useState('');

    // Función para agregar una nueva transacción
    const agregarTransaccion = (e) => {
        e.preventDefault();
        const nuevaTransaccion = {
            id: transacciones.length + 1, 
            descripcion: nuevaDescripcion, 
            monto: parseFloat(nuevoMonto)
        };
        setTransacciones([...transacciones, nuevaTransaccion]);
        setNuevaDescripcion('');
        setNuevoMonto('');
    };

    // Función para eliminar una transacción por ID
    const eliminarTransaccion = (id) => {
        setTransacciones(transacciones.filter(transaccion => transaccion.id !== id));
    };

    return (
        <div className="transacciones-main-layout">
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: "1rem",
                flexWrap: "wrap"
            }}>
                <h1>Gestión de Transacciones</h1>
                <div style={{ minWidth: "220px", maxWidth: "320px" }}>
                    <WeatherInfo />
                </div>
            </div>
            <div className="transacciones-container">
                <h3>Listado de Transacciones</h3>
                <ul>
                    {transacciones.map(transaccion => (
                        <li key={transaccion.id}>
                            {transaccion.descripcion} - ${transaccion.monto}
                            <button className="btn-secondary" onClick={() => eliminarTransaccion(transaccion.id)}>Eliminar</button>
                        </li>
                    ))}
                </ul>

                <h3>Agregar Nueva Transacción</h3>
                <form onSubmit={agregarTransaccion}>
                    <input 
                        type="text" 
                        placeholder="Descripción" 
                        value={nuevaDescripcion} 
                        onChange={(e) => setNuevaDescripcion(e.target.value)} 
                        required 
                    />
                    <input 
                        type="number" 
                        placeholder="Monto" 
                        value={nuevoMonto} 
                        onChange={(e) => setNuevoMonto(e.target.value)} 
                        required 
                    />
                    <button type="submit" className="btn-primary">Agregar</button>
                </form>
            </div>
        </div>
    );
}

export default Transacciones;
