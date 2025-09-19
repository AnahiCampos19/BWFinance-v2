
import React from 'react';
import { Link } from 'react-router-dom';
import { FiBarChart2, FiCreditCard, FiCheckSquare } from 'react-icons/fi';
import '../HomeScreen.css';

import WeatherInfo from './WeatherInfo';

function HomeScreen({ user }) {
    // Si no se pasa el prop user, leer de localStorage
    const userName = user?.name || localStorage.getItem("userName") || "Usuario";

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
                    <h1>Bienvenido, {userName}, a ByteWise</h1>
                    <p>¿Qué te gustaría hacer hoy?</p>
                </div>
                <div style={{ minWidth: "220px", maxWidth: "320px" }}>
                    <WeatherInfo />
                </div>
            </div>
            <div className="home-options">
                <div className="home-option-card">
                    <FiBarChart2 className="option-icon" aria-label="Dashboard" color="#949191ff" size={36} />
                    <h3>Dashboard</h3>
                    <p>Visualiza un resumen de tu situación financiera.</p>
                    <Link to="/dashboard" className="btn-primary">Ir al Dashboard</Link>
                </div>

                <div className="home-option-card">
                    <FiCreditCard className="option-icon" aria-label="Gestión de Transacciones" color="#949191ff" size={36} />
                    <h3>Gestión de Transacciones</h3>
                    <p>Administra tus ingresos y gastos.</p>
                    <Link to="/transacciones" className="btn-primary">Gestionar Transacciones</Link>
                </div>

                <div className="home-option-card">
                    <FiCheckSquare className="option-icon" aria-label="Gestión de Tareas y Hábitos" color="#949191ff" size={36} />
                    <h3>Gestión de Tareas y Hábitos</h3>
                    <p>Organiza tus tareas y hábitos financieros.</p>
                    <Link to="/tareas-habitos" className="btn-primary">Gestionar Tareas y Hábitos</Link>
                </div>
            </div>
        </div>
    );
}

export default HomeScreen;
