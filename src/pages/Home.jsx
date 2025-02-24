// src/pages/Home.jsx
import React from 'react'
import Banner from '../components/Banner'
import bannerImage from '../assets/construction.jpeg' // Ruta a tu imagen
import Carousel from '../components/Carousel'
import Horizontal from '../components/Horizontal'

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
        <Horizontal 
        titulos= {['Sistema BIM', 'Catalogo Expres', 'Formato y Plantillas']}
        imagenes={[
          '/images/image1.jpg',
          '/images/image2.jpg',
          '/images/image3.webp',
        ]}
        />
      </div>
      <Carousel 
       images={[
        '/images/image1.jpg',
        '/images/image2.jpg',
        '/images/image3.webp',
      ]}
      />
    </div>
  )
}

export default Home
