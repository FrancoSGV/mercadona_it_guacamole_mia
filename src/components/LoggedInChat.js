// src/pages/LoggedInChat.js
import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/SideBar';
import ChatWindow from '../components/ChatWindow';

const LoggedInChat = () => {
    return (
        <div className="app">
            <Header />
            <div className="main-content">
                <Sidebar />
                <ChatWindow username="Franco" />
            </div>
        </div>
    );
};

export default LoggedInChat;
