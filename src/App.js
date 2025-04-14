import './App.css';
import Header from './components/Header';
import Sidebar from './components/SideBar';
import ChatWindow from './components/ChatWindow';
import LoginPage from './components/LoginPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
      <Router>
          <Header />
          <div className="main-content">
              <Sidebar />
              <Routes>
                  <Route path="/" element={<ChatWindow />} />
                  <Route path="/login" element={<LoginPage />} />
              </Routes>
          </div>
      </Router>
  );
};

export default App;
