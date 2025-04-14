// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li>Conversación 1</li>
                <li>Conversación 2</li>
                <li>Conversación 3</li>
                {/* Agregar dinámicamente más conversaciones */}
            </ul>
        </div>
    );
};

export default Sidebar;
