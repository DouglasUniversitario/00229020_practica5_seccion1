import React from 'react';

export default function Tarjeta({ cientifico }) {
  return (
    <div className="card">
      <h2>{cientifico.nombre}</h2>
      <img src={cientifico.imageUrl} alt={cientifico.nombre} width={80} height={80} />
      <ul>
        <li><strong>Profesion:</strong> {cientifico.profesion}</li>
        <li><strong>Premios:</strong> {cientifico.premio.length} ({cientifico.premio.join(", ")})</li>
        <li><strong>Descubrio:</strong> {cientifico.descubrio}</li>
      </ul>
    </div>
  );
}
