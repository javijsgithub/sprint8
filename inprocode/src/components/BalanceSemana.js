import React from 'react';
import { useDatosContext } from '../Context/DatosContext';

const BalanceSemana = () => {
  const { balanceSemana } = useDatosContext();

  return (
    <div>
      <h2>Balance de gastos de la semana</h2>
      <p>Total: ${balanceSemana}</p>
    </div>
  );
};

export default BalanceSemana;