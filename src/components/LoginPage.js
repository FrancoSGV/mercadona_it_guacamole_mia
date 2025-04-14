import React from 'react';
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/'); // Te lleva a la ruta del chat
    };
    return (
        <div style={{ padding: '2rem' }}>
            <h2>Iniciar Sesión</h2>
            <form>
                <label>Usuario:</label><br />
                <input type="text" /><br />
                <label>Contraseña:</label><br />
                <input type="password" /><br />
                <button type="submit" onClick={handleLoginClick} >Entrar</button>
            </form>
        </div>
    );
};

export default LoginPage;