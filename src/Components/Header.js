import "../styles/Header.css";
import logo from "../Assets/.LOGO-1.png";

function Banner() {
    return( <div className="kasa-banner">
                <img src={logo} alt="Logo Kasa" className="kasa-logo"/>
                <ul className="kasa-nav">
                    <li className="kasa-accueil">Accueil</li>
                    <li className="kasa-a_propos">A Propos</li>
                </ul>
            </div>)
}

export default Banner