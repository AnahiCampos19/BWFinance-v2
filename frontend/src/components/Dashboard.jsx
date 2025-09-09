import React, { useEffect, useState } from 'react';
import ResumenGeneral from '../components/ResumenGeneral';
import MetasPresupuestos from '../components/MetasPresupuestos';
import AlertasRecomendaciones from '../components/AlertasRecomendaciones';
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
        <div className="dashboard-main-layout" style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
            {/* Columna izquierda: Cotizaciones */}
            <aside className="dashboard-cotizaciones" style={{ minWidth: '260px', maxWidth: '320px', background: '#f0f8ff', borderRadius: '8px', padding: '1rem', textAlign: 'center', boxShadow: '0 2px 8px #0001' }}>
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

            {/* Columna central: Dashboard */}
            <div className="dashboard-container" style={{ flex: 1 }}>
                {/* Título principal del Dashboard */}
                <h1>Dashboard Financiero</h1>

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

/* Cambios realizados:
1. Agregé una clase "dashboard-section" a cada sección del Dashboard para aplicar estilos responsivos y separar visualmente cada bloque.
2. Añadí comentarios a cada bloque para mejorar la legibilidad del código.
3. Mantengo "dashboard-container" como clase principal para el contenedor del Dashboard.
4. Las secciones ahora son más flexibles y se pueden estilizar individualmente. */
