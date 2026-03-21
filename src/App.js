import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import ToDoList from './Components/ToDoList';
import TasksProvider from './Contexts/TasksContext';


function App() {
    return (
        <div className="App">
            <main className="App-main">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/todolist" element={
                        <TasksProvider>
                            <ToDoList/>
                        </TasksProvider>
                    } />
                </Routes>
            </main>
        </div>
    );
}

export default App;