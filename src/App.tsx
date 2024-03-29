import './App.css';
import Chat from './components/Chat';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="md:flex">
      <Navbar />
      <Chat />
    </div>
  );
}

export default App;
