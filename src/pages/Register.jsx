// src/pages/Register.jsx
import React, { useState } from "react";
import { auth, db } from "../firebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import "../styles/Register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState({ type: "", text: "" });
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage({ type: "", text: "" });

    if (password !== confirmPassword) {
      setMessage({ type: "error", text: "Las contraseñas no coinciden." });
      return;
    }

    if (!validatePassword(password)) {
      setMessage({ type: "error", text: "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial." });
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await updateProfile(user, { displayName: fullName });

      // Guardar datos en Firestore
      await setDoc(doc(db, "users", user.uid), {
        fullName,
        email,
        phone,
      });

      setMessage({ type: "success", text: "Registro exitoso. Redirigiendo..." });
      setTimeout(() => navigate("/login"), 2000);
    } catch (error) {
      setMessage({ type: "error", text: error.message });
    }
  };

  return (
    <div className="register-container">
      <h2>Crear Cuenta</h2>

      {message.text && <div className={`message ${message.type}`}>{message.text}</div>}

      <form className="register-form" onSubmit={handleRegister}>
        <label>Nombre Completo</label>
        <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required />

        <label>Correo Electrónico</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Teléfono</label>
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />

        <label>Contraseña</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <label>Confirmar Contraseña</label>
        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />

        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;
