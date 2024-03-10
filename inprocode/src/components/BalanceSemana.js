import React from 'react';
import { useDatosContext } from '../Context/DatosContext';
import '../styles/BalanceSemana.css';

const BalanceSemana = () => {
  const { balanceSemana } = useDatosContext();

  return (
    <div className='container-total'>
      <h6>Balance total</h6>
      <h3>{balanceSemana} €</h3>
    </div>
  );
};

export default BalanceSemana;