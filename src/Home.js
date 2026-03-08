import logo from './logo.svg';
import Button from '@mui/material/Button';
import './App.css';
import { Link } from 'react-router-dom';
export default function Home() {
    return (
        <div>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
            <br />
            <Link to="/todolist">
                <Button variant="contained">To do list project</Button>
            </Link>
        </div>
    );
}