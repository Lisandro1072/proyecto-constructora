// src/components/Horizontal.jsx
import React from 'react';
import '../styles/Horizontal.css';

const Horizontal = ({ titulos, imagenes }) => {
  return (
    <div className="horizontal-container">
      {titulos.map((titulo, index) => (
        <div className="horizontal-item" key={index}>
          <div className="horizontal-marca">{titulo}</div>
          <div className="horizontal-img">
            {imagenes[index] && (
              <img src={imagenes[index]} alt={`Imagen ${index + 1}`} />
            )}
          </div>
        </div>
      ))}
      
    </div>
  );
};

export default Horizontal;
