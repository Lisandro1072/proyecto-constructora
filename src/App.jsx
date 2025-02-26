// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Páginas
import Home from "./pages/Home";
import Servicios from "./pages/Servicios";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register"; // Importar el registro
import Perfil from "./pages/Perfil";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> {/* Nueva ruta */}
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
