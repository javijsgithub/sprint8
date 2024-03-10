import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDatosContext } from '../Context/DatosContext';
import '../styles/GastosHoy.css';

const GastosHoy = () => {
  const { gastoHoy, variacion } = useDatosContext();
  const { t } = useTranslation();

  return (
    <div className='container-gastos-hoy'>
      <div className='container-h6-h2'>
      <h6><b>{t('today_expenses')}</b></h6>
        <h2>{gastoHoy} €</h2>
      </div>
      <div className='container-h5-h6'>
        <h5><b>{variacion} %</b></h5>
        <h6><b>{t('compared_to_yesterday')}</b></h6>
      </div>
    </div>
  );
};

export default GastosHoy;