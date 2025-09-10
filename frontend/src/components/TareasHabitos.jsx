import React, { useState } from 'react';
import WeatherInfo from './WeatherInfo';

function TareasHabitos() {
    // Estado inicial con algunas tareas de ejemplo
    const [tareas, setTareas] = useState([
        { id: 1, descripcion: 'Hacer ejercicio', completada: false },
        { id: 2, descripcion: 'Leer un libro', completada: true },
        { id: 3, descripcion: 'Meditar', completada: false },
    ]);

    // Estado para los inputs de nueva tarea
    const [nuevaTarea, setNuevaTarea] = useState('');

    // Función para agregar una nueva tarea
    const agregarTarea = (e) => {
        e.preventDefault();
        const tarea = {
            id: tareas.length + 1,
            descripcion: nuevaTarea,
            completada: false
        };
        setTareas([...tareas, tarea]);
        setNuevaTarea('');
    };

    // Función para eliminar una tarea por ID
    const eliminarTarea = (id) => {
        setTareas(tareas.filter(tarea => tarea.id !== id));
    };

    // Función para marcar una tarea como completada
    const toggleCompletada = (id) => {
        setTareas(tareas.map(tarea => 
            tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
        ));
    };

    return (
        <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start" }}>
            {/* Columna izquierda simulada */}
            <aside style={{
                minWidth: "260px",
                maxWidth: "320px",
                background: "#f0f8ff",
                borderRadius: "8px",
                padding: "1rem",
                textAlign: "center",
                boxShadow: "0 2px 8px #0001"
            }}>
                <WeatherInfo />
            </aside>
            {/* Columna central */}
            <div style={{ flex: 1 }}>
                <h1>Gestión de Tareas y Hábitos</h1>

                <h3>Lista de Tareas</h3>
                <ul>
                    {tareas.map(tarea => (
                        <li key={tarea.id}>
                            <span style={{ textDecoration: tarea.completada ? 'line-through' : 'none' }}>
                                {tarea.descripcion}
                            </span>
                            <button className="btn-secondary" onClick={() => toggleCompletada(tarea.id)}>
                                {tarea.completada ? 'Desmarcar' : 'Completar'}
                            </button>
                            <button className="btn-secondary" onClick={() => eliminarTarea(tarea.id)}>Eliminar</button>
                        </li>
                    ))}
                </ul>

                <h3>Agregar Nueva Tarea</h3>
                <form onSubmit={agregarTarea}>
                    <input 
                        type="text" 
                        placeholder="Descripción de la tarea" 
                        value={nuevaTarea} 
                        onChange={(e) => setNuevaTarea(e.target.value)} 
                        required 
                    />
                    <button type="submit" className="btn-primary">Agregar</button>
                </form>
            </div>
        </div>
    );
}

export default TareasHabitos;
