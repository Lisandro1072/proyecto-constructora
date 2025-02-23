// src/components/Navbar.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Logo Constructora</h1>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/servicios">Servicios</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
