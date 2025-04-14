// src/components/Header.js
import React from 'react';
import './Header.css'; // Estilos específicos para el Header

const Header = () => {
    return (
        <header className="header">
            <img src="/media/logo_mia.png"
                alt="Logo Mercadona Guacamole Mia"
                style={{height: '50px', objectFit: 'contain'}}/>
            <div className="header-right">
                <button>Login</button>
                <input type="text" placeholder="Buscar..."/>
            </div>
        </header>
    );
};

export default Header;
