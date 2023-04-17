import React from 'react'
import "../styles/Header.css";
import logo from "../assets/.LOGO-1.png";
import { Link } from 'react-router-dom';

function Header() {
    return (<header className="kasa-header">
        <div>
            <img src={logo} alt="Logo Kasa" />
        </div>
        <nav className='kasa-nav'>
            <ul className='kasa-nav-list'>
                <Link to="/"><li className="kasa-accueil">Accueil</li></Link>
                <Link to="/about"><li className="kasa-a-propos">A Propos</li></Link>
            </ul>
        </nav>
    </header>)
}

export default Header