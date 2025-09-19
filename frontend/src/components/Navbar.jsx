import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiLogOut, FiUser } from "react-icons/fi";
import logo from "../img/color-bw-03.svg";
import "../NavBar.css";

// Navbar: Barra de navegación que incluye un menú responsive con enlaces.
export const Navbar = () => {
  // Estado local para manejar si el menú está abierto o cerrado
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [usuarioMenuAbierto, setUsuarioMenuAbierto] = useState(false);
  const navigate = useNavigate();

  // Obtener nombre de usuario de localStorage
  const userName = localStorage.getItem("userName");

  // Función para alternar el estado del menú (abrir/cerrar)
  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  // Función para cerrar sesión
  const handleLogout = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    // Borra otros datos de sesión si los hubiera
    navigate("/login");
  };

  return (
    <header className="navbar">
      <img src={logo} alt="Logo ByteWise" className="logo" />

      <button
        className="btn-menu"
        onClick={toggleMenu}
        aria-expanded={menuAbierto}
        aria-label="Abrir menú de navegación"
      >
        {menuAbierto ? "✖" : "☰"}
      </button>

      <nav className={`menu ${menuAbierto ? "menu-abierto" : ""}`}>
        <div className="menu-left">
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            {!userName && (
              <>
                <li>
                  <Link to="/register">Registrarse</Link>
                </li>
                <li>
                  <Link to="/login">Iniciar sesión</Link>
                </li>
              </>
            )}
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/transacciones">Transacciones</Link>
            </li>
            <li>
              <Link to="/tareas-habitos">Hábitos</Link>
            </li>
          </ul>
        </div>
        {userName && (
          <div className="menu-right">
            <ul>
              <li className="navbar-user-dropdown">
                <button
                  className="navbar-username"
                  onClick={() => setMenuAbierto(menuAbierto === "user" ? false : "user")}
                  style={{ background: "none", border: "none", color: "inherit", cursor: "pointer", display: "flex", alignItems: "center", fontWeight: 500, fontSize: "1rem" }}
                >
                  <FiUser style={{ marginRight: "0.5rem", verticalAlign: "middle" }} />
                  {userName}
                </button>
                {menuAbierto === "user" && (
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/perfil" onClick={() => setMenuAbierto(false)}>
                        Configuración
                      </Link>
                    </li>
                    <li>
                      <button className="logout-btn" onClick={handleLogout}>
                        <FiLogOut style={{ marginRight: "0.5rem", verticalAlign: "middle" }} />
                      </button>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};
