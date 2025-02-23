// src/pages/Home.jsx
import React from 'react'
import Banner from '../components/Banner'
import bannerImage from '../assets/construction.jpeg' // Ruta a tu imagen

function Home() {
  return (
    <div>
      <Banner
        title="Bienvenido a Mi Empresa Constructora"
        subtitle="Soluciones integrales para tus proyectos"
        image={bannerImage}
      />
      <div className="home-container">
        <h2>Precios Actualizados</h2>
        <p>
          Conoce los precios actuales de materiales de construcción,
          mano de obra, herramientas y más.
        </p>
        {/* Aquí podrías agregar tarjetas, secciones con publicidad, etc. */}
      </div>
    </div>
  )
}

export default Home
