import React from 'react'
import "../styles/Header.css";
import logo from "../assets/.LOGO-1.png";
import { Link, useLocation  } from 'react-router-dom';

function Header() {

    const location = useLocation();
    const currentUrl = location.pathname;
    let classCssHome="kasa-accueil";
    let classCssAbout="kasa-a-propos";

    if(currentUrl === "/") classCssHome="nav-active kasa-accueil";
    if(currentUrl === "/about") classCssAbout="nav-active kasa-a-propos";
    
    return (<header className="kasa-header">
        <div>
            <img src={logo} alt="Logo Kasa" />
        </div>
        <nav className='kasa-nav'>
            <ul className='kasa-nav-list'>
                <Link to="/"><li  className={classCssHome}>Accueil</li></Link>
                <Link to="/about"><li className={classCssAbout}>A Propos</li></Link>
            </ul>
        </nav>
    </header>)
}

export default Header
