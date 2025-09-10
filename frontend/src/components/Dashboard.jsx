import React, { useEffect, useState } from 'react';
import ResumenGeneral from '../components/ResumenGeneral';
import MetasPresupuestos from '../components/MetasPresupuestos';
import AlertasRecomendaciones from '../components/AlertasRecomendaciones';
import WeatherInfo from '../components/WeatherInfo';
import '../Dashboard.css';

// Componente Dashboard que organiza las secciones principales del panel financiero.
function Dashboard() {
    const [rates, setRates] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/api/dolar')
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setRates({
                        ars_usd: data.ars_usd,
                        ars_eur: data.ars_eur,
                        ars_brl: data.ars_brl,
                        ars_gbp: data.ars_gbp,
                        ars_cny: data.ars_cny,
                    });
                } else {
                    setError(data.message || 'Error al obtener la cotización');
                }
                setLoading(false);
            })
            .catch(err => {
                setError('Error de conexión');
                setLoading(false);
            });
    }, []);

    return (
        <div className="dashboard-main-layout">
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: "1rem",
                flexWrap: "wrap"
            }}>
                <h1>Dashboard Financiero</h1>
                <div style={{ minWidth: "220px", maxWidth: "320px" }}>
                    <WeatherInfo />
                </div>
            </div>
            <div className="dashboard-container">
                {/* Sección de Cotizaciones */}
                <aside className="dashboard-cotizaciones" style={{ minWidth: '260px', maxWidth: '320px', background: '#f0f8ff', borderRadius: '8px', padding: '1rem', textAlign: 'center', boxShadow: '0 2px 8px #0001', marginBottom: '2rem' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Cotizaciones</h2>
                    {loading && <p>Cargando cotizaciones...</p>}
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    {rates && (
                        <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.1rem' }}>
                            <li><strong>USD:</strong> {rates.ars_usd ? (1 / rates.ars_usd).toFixed(2) : '-'} ARS</li>
                            <li><strong>EUR:</strong> {rates.ars_eur ? (1 / rates.ars_eur).toFixed(2) : '-'} ARS</li>
                            <li><strong>BRL:</strong> {rates.ars_brl ? (1 / rates.ars_brl).toFixed(2) : '-'} ARS</li>
                            <li><strong>GBP:</strong> {rates.ars_gbp ? (1 / rates.ars_gbp).toFixed(2) : '-'} ARS</li>
                            <li><strong>CNY:</strong> {rates.ars_cny ? (1 / rates.ars_cny).toFixed(2) : '-'} ARS</li>
                        </ul>
                    )}
                </aside>

                {/* Sección de Resumen General */}
                <section className="dashboard-section">
                    <h2>Resumen General</h2>
                    <ResumenGeneral />
                </section>

                {/* Sección de Metas y Presupuestos */}
                <section className="dashboard-section">
                    <h2>Metas y Presupuestos</h2>
                    <MetasPresupuestos />
                </section>

                {/* Sección de Alertas y Recomendaciones */}
                <section className="dashboard-section">
                    <h2>Alertas y Recomendaciones</h2>
                    <AlertasRecomendaciones />
                </section>
            </div>
        </div>
    );
}

export default Dashboard;
