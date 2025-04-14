import React, { useState } from 'react';
import './ChatWindow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faCamera,faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const ChatWindow = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([
        { from: 'mia', text: '¡Hola! ¿En qué te puedo ayudar?' }
    ]);

    const handleSend = () => {
        if (message.trim() === '') return;

        const userMsg = message.toLowerCase();
        setMessages(prev => [...prev, { from: 'user', text: message }]);
        setMessage('');

        // Procesar respuesta de MIA basada en palabra clave
        setTimeout(() => {
            let miaResponse = 'Lo siento, no entendí tu mensaje.';
            let image = null;

            if (userMsg.includes('hola')) {
                miaResponse = '¡Hola! Soy MIA, el Asistente con IA de Mercadona 🧠🛒';
            } else if (userMsg.includes('leche')) {
                miaResponse = '¡Claro! ¿Me permites acceder a tu ubicación? 🥛';
            } else if (userMsg.includes('no')) {
                miaResponse = '¡No hay problema! ¿Me puedes indicar en que sede de Mercadona te encuentras?';
            } else if (userMsg.includes('paterna')) {
                setMessages(prev => [
                    ...prev,
                    {
                        from: 'mia',
                        type: 'buttons',
                        buttons: [
                            { text: 'Carretera de Manises' },
                            { text: 'Av. de les Corts Valencianes' },
                            { text: 'Carrer de Santa Cecilia' }
                        ]
                    }
                ]);
                return;
            }
            else if (userMsg.includes('leche')) {
                miaResponse = '¡Aquí puedes encontrar lo que buscas! 🥛';
                image = '/media/ejemplo.jpeg';
            }

            setMessages(prev => [...prev, { from: 'mia', text: miaResponse }]);

            if (image) {
                setMessages(prev => [...prev, { from: 'mia', image }]);
            }
        }, 800);
    };


    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };
    const handleButtonClick = (index) => {
        let responseText = '';
        let responseImage = '';

        // Definir la respuesta basada en el botón clickeado
        switch (index) {
            case 0:
                responseText = '¡Aquí puedes encontrar lo que buscas! 🥛';
                responseImage = '/media/ejemplo.jpeg';  // Aquí pondrías tu imagen si la necesitas
                break;
            case 1:
                responseText = 'Texto de opción B: Aquí puedes consultar los horarios.';
                break;
            case 2:
                responseText = 'Texto de opción C: Si necesitas más ayuda, no dudes en preguntar.';
                break;
            default:
                responseText = 'Opción no válida.';
                break;
        }

        // Añadir la respuesta al estado de los mensajes
        setMessages(prev => [
            ...prev,
            {
                from: 'mia',
                text: responseText,
                image: responseImage, // Solo se añade la imagen si la variable responseImage tiene una URL válida
            }
        ]);
    };

    return (
        <div className="chat-window">
            <div className="messages">
                {messages.map((msg, idx) => (
                    <div key={idx} className={`message ${msg.from}`}>
                        {msg.text && (
                            <p><strong>{msg.from === 'mia' ? 'MIA 😀' : 'Tú'}:</strong> {msg.text}</p>
                        )}

                        {msg.image && (
                            <img src={msg.image} alt="Respuesta visual" style={{ maxWidth: '200px', marginTop: '0.5rem', borderRadius: '8px' }} />
                        )}

                        {msg.type === 'buttons' && (
                            <div className="button-column">
                                <p><strong>Por favor, elige una opción:</strong></p>
                                {msg.buttons.map((btn, bidx) => (
                                    <button key={bidx} className="mia-button" onClick={() => handleButtonClick(bidx)}>
                                        {btn.text}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="input-area">
                <div className="text-area-container">
        <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Escribe tu mensaje..."
        />
                    <div className="msg-buttons">
                        <button>
                            <FontAwesomeIcon icon={faCamera}/>
                        </button>
                        <button>
                            <FontAwesomeIcon icon={faMicrophone}/>
                        </button>
                        <button onClick={handleSend}>
                            <FontAwesomeIcon icon={faPaperPlane}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatWindow;
