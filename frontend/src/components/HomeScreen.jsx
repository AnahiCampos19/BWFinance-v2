
import React from 'react';
import { Link } from 'react-router-dom';
import '../HomeScreen.css';

import WeatherInfo from './WeatherInfo';

function HomeScreen({ user }) {
    return (
        <div className="home-container">
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: "1rem",
                flexWrap: "wrap"
            }}>
                <div>
                    <h1>Bienvenido, {user.name}, a ByteWise</h1>
                    <p>¿Qué te gustaría hacer hoy?</p>
                </div>
                <div style={{ minWidth: "220px", maxWidth: "320px" }}>
                    <WeatherInfo />
                </div>
            </div>
            <div className="home-options">
                <div className="home-option-card">
                    <span className="option-icon" role="img" aria-label="Dashboard">📊</span>
                    <h3>Dashboard</h3>
                    <p>Visualiza un resumen de tu situación financiera.</p>
                    <Link to="/dashboard" className="btn-primary">Ir al Dashboard</Link>
                </div>

                <div className="home-option-card">
                    <span className="option-icon" role="img" aria-label="Gestión de Transacciones">💰</span>
                    <h3>Gestión de Transacciones</h3>
                    <p>Administra tus ingresos y gastos.</p>
                    <Link to="/transacciones" className="btn-primary">Gestionar Transacciones</Link>
                </div>

                <div className="home-option-card">
                    <span className="option-icon" role="img" aria-label="Gestión de Tareas y Hábitos">✅</span>
                    <h3>Gestión de Tareas y Hábitos</h3>
                    <p>Organiza tus tareas y hábitos financieros.</p>
                    <Link to="/tareas-habitos" className="btn-primary">Gestionar Tareas y Hábitos</Link>
                </div>
            </div>
        </div>
    );
}

export default HomeScreen;
