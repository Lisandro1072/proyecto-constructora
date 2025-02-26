// src/pages/Perfil.jsx
import React, { useEffect, useState } from "react";
import { auth } from "../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import "../styles/Perfil.css";

const Perfil = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="perfil-container">
      <h2>Perfil del Usuario</h2>
      {user ? (
        <div className="perfil-info">
          <p><strong>Nombre:</strong> {user.displayName || "No especificado"}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      ) : (
        <p>No hay usuario autenticado.</p>
      )}
    </div>
  );
};

export default Perfil;
