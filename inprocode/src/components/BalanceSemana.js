import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDatosContext } from '../Context/DatosContext';
import '../styles/BalanceSemana.css';

const BalanceSemana = () => {
  const { balanceSemana } = useDatosContext();
  const { t } = useTranslation();

  return (
    <div className='container-total'>
      <h6>{t('balance_total')}</h6>
      <h3>{balanceSemana} €</h3>
    </div>
  );
};

export default BalanceSemana;