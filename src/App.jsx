import './App.css';
import React from 'react'
//import ReactDOM from 'react-dom'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import Home from './pages/Home';
import About from './pages/About';
import Logement from './pages/Logement';
import Error from './pages/Error';

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path='/logement/:id' element={<Logement />} />
                <Route exact path='*' element={<Error />} />
            </Routes>
        </Router>)
}

export default App;
