// src/pages/Login.jsx
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Login.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Por ahora solo se muestran los datos en la consola
    console.log('Datos de login:', { email, password })
    alert('Login enviado. Revisa la consola para ver los datos.')
  }

  return (
    <div className="login-container">
      <h2>Iniciar sesión</h2>
      <form className="login-form" onSubmit={handleSubmit}>
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
      <div className="register-section">
        <p>¿No tienes una cuenta? <Link to="/register">Regístrate aquí</Link></p>
      </div>
    </div>
  )
}

export default Login
