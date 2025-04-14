// src/components/Header.js
import React from 'react';
import './Header.css'; // Estilos específicos para el Header
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCog } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <header className="header">
            <img src="/media/logo_mia.png"
                alt="Logo Mercadona Guacamole Mia"
                style={{height: '50px', objectFit: 'contain'}}/>
            <div className="header-right">
                <button className="header-button" title="Login">
                    <FontAwesomeIcon icon={faUser}/>
                </button>
                <button className="header-button" title="Settings">
                    <FontAwesomeIcon icon={faCog}/>
                </button>
            </div>
        </header>
    );
};

export default Header;
