import React from 'react';
import { useDatosContext } from '../Context/DatosContext';

const GastosHoy = () => {
  const { gastoHoy, variacion } = useDatosContext();

  return (
    <div>
      <h2>Gastos de Hoy</h2>
      <p>Total: ${gastoHoy}</p>
      <p>Variación respecto a ayer: {variacion}%</p>
    </div>
  );
};

export default GastosHoy;