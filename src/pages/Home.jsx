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
        title="La herramienta que soluciona el manejo de sus presupuestos ne su Empresa Constructora"
        subtitle="Soluciones integrales para tus proyectos"
        image={bannerImage}
      />
      <div className="home-container">
        <div className="sub-container"  style={{ textAlign: 'center', padding: '20px' }}>
          <h2>Integracion completa</h2>
          <p>
            Conoce como nuestra herramienta puede proporcionarte mayor eficiencia a traves de las tecnologias de construcción,
            Cada ves mas completo y en desarrollo con nuestra metodologia y más.
          </p>
        </div>
        <Horizontal 
        titulos= {['Sistema BIM', 'Catalogo Expres', 'Formato y Plantillas']}
        imagenes={[
          '/images/bim.png',
          '/images/catalogo.webp',
          '/images/formato.webp',
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
