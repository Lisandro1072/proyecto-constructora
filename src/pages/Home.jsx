// src/pages/Home.jsx
import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import Carousel from '../components/Carousel'
import Horizontal from '../components/Horizontal'

const Home = () => {
  return (
    <div className="main-content home-container">
      {/* Banner principal */}
      <div className="hero">
        <div className="hero-overlay">
          <h1>La herramienta que soluciona el manejo de sus presupuestos</h1>
          <p>Soluciones integrales para tus proyectos</p>
        </div>
      </div>

      {/* Sección de características */}
      <section className="features">
        <h2>Integración completa</h2>
        <p>Conoce cómo nuestra herramienta proporciona mayor eficiencia con las mejores tecnologías de construcción.</p>

        <div className="feature-grid">
          <div className="feature-card">
            <h3>Sistema BIM</h3>
            <p>Optimiza tus proyectos con modelado 3D y análisis avanzado.</p>
          </div>
          <div className="feature-card">
            <h3>Catálogo Exprés</h3>
            <p>Accede a una base de datos actualizada con los mejores materiales y costos.</p>
          </div>
          <div className="feature-card">
            <h3>Formatos y Plantillas</h3>
            <p>Automatiza y mejora la gestión de documentos en cada fase del proyecto.</p>
          </div>
        </div>
      </section>

      {/* Llamado a la acción */}
      <div className="cta">
        <h2>Optimiza tu empresa hoy</h2>
        <p>Únete y comienza a mejorar la gestión de tus presupuestos con nuestra plataforma.</p>
        <Link to="/register" className="cta-button">Regístrate Gratis</Link>
      </div>
      <Horizontal 
        titulos= {['Sistema BIM', 'Catalogo Expres', 'Formato y Plantillas']}
        imagenes={[
          '/images/bim.png',
          '/images/catalogo.webp',
          '/images/formato.webp',
        ]}
        />
<Carousel 
       images={[
        '/images/image1.jpg',
        '/images/image2.jpg',
        '/images/image3.webp',
      ]}
      />
    </div>
    
  );
};

export default Home;
