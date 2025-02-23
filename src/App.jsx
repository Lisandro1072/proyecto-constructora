// src/App.jsx
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Páginas
import Home from './pages/Home'
import Servicios from './pages/Servicios'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
