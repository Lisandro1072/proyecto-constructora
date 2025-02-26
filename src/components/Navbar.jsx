// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import "../styles/Navbar.css";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
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
      <Link to="/" className="logo">MiApp</Link>
      <ul className="navbar-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/servicios">Servicios</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>

      {/* Si hay usuario, mostrar menú, sino mostrar botón de login */}
      {user ? (
        <div className="user-menu">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {user.displayName || user.email}
          </button>
          {menuOpen && (
            <div className="dropdown-menu">
              <Link to="/perfil">Ver Perfil</Link>
              <button onClick={handleLogout}>Cerrar Sesión</button>
            </div>
          )}
        </div>
      ) : (
        <Link to="/login" className="login-button">Iniciar sesión</Link>
      )}
    </nav>
  );
};

export default Navbar;
