// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li className="sideText">Busqueda Mercadona Alcoy</li>
                <li className="sideText">Productos sin Gluten</li>
                <li className="sideText">Primeros pasos con MIA</li>
                {/* Agregar dinámicamente más conversaciones */}
            </ul>
        </div>
    );
};

export default Sidebar;
