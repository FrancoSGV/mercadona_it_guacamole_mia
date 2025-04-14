import './App.css';
import Header from './components/Header';
import Sidebar from './components/SideBar';
import ChatWindow from './components/ChatWindow';


const App = () => {
  return (
      <div className="app">
        <Header />
        <div className="main-content">
          <Sidebar />
          <ChatWindow />
        </div>
      </div>
  );
};

export default App;
