// src/components/Header.js
import React from 'react';
import './Header.css'; // Estilos específicos para el Header

const Header = () => {
    return (
        <header className="header">
            <h1>Mercadona IT - Guacamole Mia</h1>
            <div className="header-right">
                <button>Login</button>
                <input type="text" placeholder="Buscar..." />
            </div>
        </header>
    );
};

export default Header;
