import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
const LoginPage = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/chat'); // Te lleva a la ruta del chat
    };
    return (
        <div className="login-container">
            <div className="login-box">
                <img className="logo-login" src="/media/logo_mia.png"/>
                <h2>Inicia sesión</h2>
                <input className="login-input" type="text" placeholder="Usuario" />
                <input className="login-input" type="password" placeholder="Contraseña" />
                <button className="login-button" onClick={handleLoginClick}>Entrar</button>
                <div className="login-footer">
                    ¿No tienes cuenta? <a href="#">Regístrate</a>
                </div>
            </div>
        </div>
    );
}
export default LoginPage;