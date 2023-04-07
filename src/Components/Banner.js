import "../styles/Banner.css";
import logo from "../Assets/.LOGO-1.png";

function Banner() {
    return( <div className="kasa-banner">
                <img src={logo} alt="Logo Kasa" className="kasa-logo"/>
                <h1 className="kasa-title">Kasa</h1>
            </div>)
}

export default Banner