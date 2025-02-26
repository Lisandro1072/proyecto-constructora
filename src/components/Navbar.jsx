// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import "../styles/Navbar.css";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Escucha cambios en la autenticación
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe(); // Limpia el listener
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">MiApp</Link>

        {/* Botón de menú hamburguesa para móviles */}
        <button
          className="menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>

        {/* Menú de navegación */}
        <ul className={`navbar-links ${mobileMenuOpen ? "open" : ""}`}>
          <li><Link to="/" onClick={() => setMobileMenuOpen(false)}>Inicio</Link></li>
          <li><Link to="/servicios" onClick={() => setMobileMenuOpen(false)}>Servicios</Link></li>
          <li><Link to="/contacto" onClick={() => setMobileMenuOpen(false)}>Contacto</Link></li>
        </ul>

        {/* Menú de usuario */}
        {user ? (
          <div className="user-menu">
            <button className="user-button" onClick={() => setMenuOpen(!menuOpen)}>
              {user.displayName || user.email}
            </button>
            {menuOpen && (
              <div className="dropdown-menu">
                <Link to="/perfil" onClick={() => setMenuOpen(false)}>Ver Perfil</Link>
                <button onClick={handleLogout}>Cerrar Sesión</button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login" className="login-button">Iniciar sesión</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
