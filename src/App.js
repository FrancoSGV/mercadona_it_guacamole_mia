import './App.css';
import Header from './components/Header';
import Sidebar from './components/SideBar';
import ChatWindow from './components/ChatWindow';
import LoginPage from './components/LoginPage';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LoggedInChat from "./components/LoggedInChat";

const MainLayout = () => (
    <>
        <Header />
        <div className="main-content">
            <Sidebar />
            <ChatWindow />
        </div>
    </>
);

// Este componente decide qué mostrar según la ruta
const AppRoutes = () => {
    const location = useLocation();

    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/*" element={<MainLayout />} />
            <Route path="/chat" element={<LoggedInChat />} />
        </Routes>
    );
};

const App = () => {
    return (
        <Router>
            <AppRoutes />
        </Router>
    );
};

export default App;
