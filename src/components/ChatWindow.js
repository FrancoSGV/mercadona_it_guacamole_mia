// src/components/ChatWindow.js
import React, { useState } from 'react';
import './ChatWindow.css';

const ChatWindow = () => {
    const [message, setMessage] = useState('');

    const handleSend = () => {
        // Aquí iría la lógica de interacción con la IA
        console.log('Mensaje enviado:', message);
        setMessage(''); // Limpiar el input
    };

    return (
        <div className="chat-window">
            <div className="messages">
                {/* Aquí se mostrarán los mensajes de la conversación */}
                <p><strong>IA:</strong> ¡Hola! ¿En qué te puedo ayudar?</p>
            </div>
            <div className="input-area">
        <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Escribe tu mensaje..."
        />
                <button onClick={handleSend}>Enviar</button>
            </div>
        </div>
    );
};

export default ChatWindow;
