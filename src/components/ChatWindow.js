import React, { useState, useEffect } from 'react';
import './ChatWindow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faCamera, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const ChatWindow = ({ username }) => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const saludo = username
            ? `¡Hola! ${username} ¿En qué te puedo ayudar?`
            : '¡Hola! ¿En qué te puedo ayudar?';

        setMessages([{ from: 'mia', text: saludo }]);
    }, [username]);

    const handleSend = () => {
        if (message.trim() === '') return;

        const userMsg = message.toLowerCase();
        setMessages(prev => [...prev, { from: 'user', text: message }]);
        setMessage('');

        setTimeout(() => {
            let miaResponse = 'Lo siento, no entendí tu mensaje.';
            let image = null;

            if (userMsg.includes('hola')) {
                miaResponse = '¡Hola! Soy MIA, el Asistente con IA de Mercadona 🧠🛒';
                setMessages(prev => [...prev, { from: 'mia', text: miaResponse }]);
                return;
            }

            if (userMsg.includes('receta')) {
                miaResponse = '¡Claro! ¿Qué receta quieres hacer? 🍽️';
                setMessages(prev => [...prev, { from: 'mia', text: miaResponse }]);
                return;
            }

            if (userMsg.includes('paella')) {
                fetch('http://localhost:8000/receta', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ receta: 'paella' })
                })
                    .then(res => res.json())
                    .then(data => {
                        const ingredientes = data.ingredientes?.join(', ') || 'ninguno';
                        const disponibles = data.disponibles?.join(', ') || '';

                        let respuesta = `Para la paella necesitas: ${ingredientes}.`;

                        if (disponibles.length > 0) {
                            respuesta += ` Puedes hacer la receta con: ${disponibles}. ✅`;
                        } else {
                            respuesta += ` Lo siento, no hay stock de los ingredientes necesarios. ❌`;
                        }

                        setMessages(prev => [...prev, { from: 'mia', text: respuesta }]);
                    })
                    .catch(error => {
                        console.error('Error al obtener ingredientes:', error);
                        setMessages(prev => [...prev, { from: 'mia', text: 'Hubo un error al consultar los ingredientes. 😢' }]);
                    });

                return;
            }

            if (userMsg.includes('leche')) {
                miaResponse = '¡Claro! ¿Me permites acceder a tu ubicación? 🥛';
                setMessages(prev => [...prev, { from: 'mia', text: miaResponse }]);
                return;
            }

            if (userMsg.includes('no')) {
                miaResponse = '¡No hay problema! ¿Me puedes indicar en qué sede de Mercadona te encuentras?';
                setMessages(prev => [...prev, { from: 'mia', text: miaResponse }]);
                return;
            }

            if (userMsg.includes('paterna')) {
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

        switch (index) {
            case 0:
                responseText = '¡Aquí puedes encontrar lo que buscas! 🥛';
                responseImage = '/media/ejemplo.jpeg';
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

        setMessages(prev => [
            ...prev,
            {
                from: 'mia',
                text: responseText,
                image: responseImage,
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
                        <button><FontAwesomeIcon icon={faCamera} /></button>
                        <button><FontAwesomeIcon icon={faMicrophone} /></button>
                        <button onClick={handleSend}><FontAwesomeIcon icon={faPaperPlane} /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatWindow;
