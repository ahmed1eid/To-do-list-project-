import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import ToDoList from './ToDoList';

function App() {
  return (
    <div className="App">
      <main className="App-main">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todolist" element={<ToDoList />} />
        </Routes>
        
      </main>
    </div>
  );
}

export default App;