import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Viewproduct from './Components/Viewproduct';

function App() {
  return (
    <div>
    <Viewproduct/>
    </div>
  );
}

export default App;
