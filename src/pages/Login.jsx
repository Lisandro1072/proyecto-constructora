// src/pages/Login.jsx
import React, { useState } from "react";
import { auth, googleProvider } from "../firebaseConfig";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState({ type: "", text: "" });
  const navigate = useNavigate();

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setMessage({ type: "", text: "" }); // Limpiar mensaje anterior

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setMessage({ type: "success", text: "Inicio de sesión exitoso." });
      setTimeout(() => navigate("/"), 2000); // Redirigir después de 2 segundos
    } catch (error) {
      let errorMessage = "Error desconocido.";
      switch (error.code) {
        case "auth/user-not-found":
          errorMessage = "No existe una cuenta con este correo.";
          break;
        case "auth/wrong-password":
          errorMessage = "La contraseña es incorrecta.";
          break;
        case "auth/invalid-email":
          errorMessage = "El correo electrónico no es válido.";
          break;
        default:
          errorMessage = "Error en el login: " + error.message;
      }
      setMessage({ type: "error", text: errorMessage });
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      setMessage({ type: "success", text: "Inicio de sesión con Google exitoso." });
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      setMessage({ type: "error", text: "Error con Google: " + error.message });
    }
  };

  return (
    <div className="login-container">
      <h2>Iniciar sesión</h2>

      {/* Mostrar mensajes de éxito o error */}
      {message.text && (
        <div className={`message ${message.type}`}>
          {message.text}
        </div>
      )}

      <form className="login-form" onSubmit={handleEmailLogin}>
        <label htmlFor="email">Correo electrónico</label>
        <input
          type="email"
          id="email"
          placeholder="tu@correo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Iniciar sesión</button>
      </form>

      <button className="google-login" onClick={handleGoogleLogin}>
        Iniciar sesión con Google
      </button>

      <div className="register-section">
        <p>¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link></p>
      </div>
    </div>
  );
};

export default Login;
