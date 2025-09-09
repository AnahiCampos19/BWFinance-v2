import React from "react";
import { GoogleLogin } from "@react-oauth/google";

const GoogleLoginButton = ({ onSuccess, onFailure }) => {
    const handleGoogleLogin = async (credentialResponse) => {
        try {
            // Enviar el token al backend para validación y login/registro
            const response = await fetch("http://localhost:5001/api/auth/google", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ credential: credentialResponse.credential }),
            });
            const data = await response.json();
            if (data.success) {
                alert("Inicio de sesión con Google exitoso: " + data.user.email);
                if (onSuccess) onSuccess(data);
            } else {
                alert("Error en login Google: " + (data.message || "Desconocido"));
                if (onFailure) onFailure();
            }
        } catch (error) {
            alert("Error de conexión con backend Google");
            if (onFailure) onFailure();
        }
    };

    return (
        <GoogleLogin
            onSuccess={handleGoogleLogin}
            onError={() => {
                console.error("Google Login Failed");
                if (onFailure) onFailure();
            }}
            className="social-btn google-btn"
        />
    );
};

export default GoogleLoginButton;
