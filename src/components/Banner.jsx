// src/components/Banner.jsx
import React from 'react'
import '../styles/Banner.css'

function Banner({ title, subtitle, image }) {
  return (
    <div className="banner" style={{ backgroundImage: `url(${image})` }}>
      <div className="banner-content">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </div>
  )
}

export default Banner
