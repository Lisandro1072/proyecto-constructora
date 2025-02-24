// src/pages/Register.jsx
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Register.css'

const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if(password !== confirmPassword) {
      alert('Las contraseñas no coinciden')
      return
    }
    console.log('Datos de registro:', { username, email, password })
    alert('Registro enviado. Revisa la consola para ver los datos.')
  }

  return (
    <div className="register-container">
      <h2>Registrarse</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Nombre de usuario</label>
        <input
          type="text"
          id="username"
          placeholder="Tu nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

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

        <label htmlFor="confirmPassword">Confirmar contraseña</label>
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
      <div className="login-redirect">
        <p>¿Ya tienes cuenta? <Link to="/login">Inicia sesión aquí</Link></p>
      </div>
    </div>
  )
}

export default Register
