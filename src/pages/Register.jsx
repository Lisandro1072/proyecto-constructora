// src/pages/Register.jsx
import React, { useState } from "react";
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "../styles/Register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState({ type: "", text: "" });
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage({ type: "", text: "" });

    if (password !== confirmPassword) {
      setMessage({ type: "error", text: "Las contraseñas no coinciden." });
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setMessage({ type: "success", text: "Registro exitoso. Redirigiendo..." });
      setTimeout(() => navigate("/login"), 2000);
    } catch (error) {
      let errorMessage = "Error al registrar.";
      switch (error.code) {
        case "auth/email-already-in-use":
          errorMessage = "El correo electrónico ya está en uso.";
          break;
        case "auth/invalid-email":
          errorMessage = "El correo electrónico no es válido.";
          break;
        case "auth/weak-password":
          errorMessage = "La contraseña debe tener al menos 6 caracteres.";
          break;
        default:
          errorMessage = "Error en el registro: " + error.message;
      }
      setMessage({ type: "error", text: errorMessage });
    }
  };

  return (
    <div className="register-container">
      <h2>Crear Cuenta</h2>

      {/* Mostrar mensajes de éxito o error */}
      {message.text && (
        <div className={`message ${message.type}`}>
          {message.text}
        </div>
      )}

      <form className="register-form" onSubmit={handleRegister}>
        <label htmlFor="email">Correo Electrónico</label>
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

        <label htmlFor="confirmPassword">Confirmar Contraseña</label>
        <input
          type="password"
          id="confirmPassword"
          placeholder="********"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;
