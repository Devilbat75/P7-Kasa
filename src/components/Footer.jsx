import React from 'react'
import logo from "../Assets/LOGO-noir-et-blanc.png"
import "../styles/Footer.css"

function Footer() {
    return (
        <footer className='footer'>
            <div className='img_footer'><img src={logo} alt='Logo de bas de page' /></div>
            <div className='copyright'><p>© 2020 Kasa. All rights reserved</p></div>
        </footer>
    )
}

export default Footer