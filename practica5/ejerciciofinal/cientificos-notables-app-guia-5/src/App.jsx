import React from 'react';
import './App.css';
import Tarjeta from './componente/tarjeta';
import { cientifico } from './objeto/cientifico';

function App() {
  return (
    <div className="App">
      <h1>Cientificos Notables</h1>
      {cientifico.map((s, index) => (
        <Tarjeta key={index} cientifico={s} />
      ))}
    </div>
  );
}

export default App;
