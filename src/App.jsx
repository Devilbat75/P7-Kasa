import './App.css';
import React from 'react'
//import ReactDOM from 'react-dom'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import Home from './pages/Home';
import About from './pages/About';
import Logement from './pages/Logement';
import Error from './pages/Error';
import Layout from './pages/Layout';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='/logement/:id' element={<Logement />} />
                    <Route path='about' element={<About />} />
                    <Route path='*' element={<Error />} />
                </Route>
            </Routes>
        </Router>)
}

export default App;
