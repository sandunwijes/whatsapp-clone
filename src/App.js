
import './App.css';
import Chat from './components/Chat';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <div className="App">
      
      <div className="app__body">

        <h1>body</h1>
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  );
}

export default App;
