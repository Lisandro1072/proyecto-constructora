// src/pages/Servicios.jsx
import React from 'react'

function Servicios() {
  return (
    <div className="servicios-container">
      <h2>Nuestros Servicios</h2>
      <section className="contactanos">
      <h2>ASESORIA EN CONSTRUCCION</h2>
      <p>Si necesitas asesoria en construccion contactanos..</p>
      <button className="btn-descargar">☎️ CONTACTACTAR A UN OPERADOR</button>
      </section>


      <section className="ventas">
      <h2>VENTA DE MATERIALES Y HERRAMIENTAS</h2>
      <p>Que material estas buscando</p>
      <div className="search-container">
      <input type="text" className="search-box" placeholder="Buscar material..." />
      <button className="btn-buscar">Buscar</button>
      </div>
      <p>Que herramienta estas buscando</p>
      <div className="search-container">
      <input type="text" className="search-box" placeholder="Buscar herramienta..." />
      <button className="btn-buscar">Buscar</button>
      </div>
      </section>


      <section className="precio">
      <h2>PRECIOS DE MANO DE OBRA</h2>
      <p>Que tipo de inmueble necesitas construir</p>
      <select className="select-inmueble">
      <option value="casa">Casa</option>
      <option value="escuela">Escuela</option>
      <option value="edificio">Edificio</option>
      </select>
      <p>Numeros de pisos a construir</p>
      <select className="select-inmueble">
      <option value="primer">1</option>
      <option value="segundo">2</option>
      <option value="terceri">3</option>
      </select>
      </section>


      <section className="publicidad para constructoras asociadas">
      <h2>PUBLICIDAD PARA CONSTRUCTORAS ASOCIADAS</h2>
      <p>Estas son nuestras constructoras asosiadas</p>
      <div className="btn-container">
      <button className="btn-constructora">Constructora A</button>
      <button className="btn-constructora">Constructora B</button>
      <button className="btn-constructora">Constructora C</button>
      </div>   
      </section>
    </div>
  )
}

export default Servicios
