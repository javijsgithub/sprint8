import React from 'react';
import { useDatosContext } from '../Context/DatosContext';
import '../styles/GastosHoy.css';

const GastosHoy = () => {
  const { gastoHoy, variacion } = useDatosContext();

  return (
    <div className='container-gastos-hoy'>
      <div className='container-h6-h2'>
        <h6><b>Gastos de Hoy</b></h6>
        <h2>{gastoHoy} €</h2>
      </div>
      <div className='container-h5-h6'>
        <h5><b>{variacion} %</b></h5>
        <h6><b>respecto a ayer</b></h6>
      </div>
    </div>
  );
};

export default GastosHoy;