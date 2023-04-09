import React from 'react'
import "../styles/Header.css";
import logo from "../Assets/.LOGO-1.png";

function Header() {
    return (<header className="kasa-header">
        <div>
            <img src={logo} alt="Logo Kasa" />
        </div>
        <nav className='kasa-nav'>
            <ul className='kasa-nav-list'>
            <li className="kasa-accueil">Accueil</li>
            <li className="kasa-a-propos">A Propos</li>
            </ul>
        </nav>
    </header>)
}

export default Header