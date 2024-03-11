import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDatosContext } from '../Context/DatosContext';
import { VscArrowSmallLeft } from "react-icons/vsc";
import { VscArrowSmallRight } from "react-icons/vsc";
import '../styles/BalanceSemana.css';

const BalanceSemana = () => {
  const { balanceSemana, currentWeekIndex } = useDatosContext();
  const { t } = useTranslation();
  const { goToPreviousWeek, goToNextWeek } = useDatosContext();

  

  return (
    <div className='container-total'>
      <div className='container-datos-total'>
        <h6>{t('balance_total')}</h6>
        <h3>{balanceSemana} €</h3>
      </div>
      <div className='container-week-navigation'>
        {currentWeekIndex === 0 && (
          <div onClick={goToPreviousWeek}><VscArrowSmallLeft className='boton-retroceder' /></div>
        )} 
      
        {currentWeekIndex === 1 &&(
        <>
          <div onClick={goToPreviousWeek}><VscArrowSmallLeft className='boton-retroceder' /></div>
          <div onClick={goToNextWeek}><VscArrowSmallRight className='boton-avanzar' /></div>
        </>
        )} 
        {currentWeekIndex === 2 &&(
          <div onClick={goToNextWeek}><VscArrowSmallRight className='boton-avanzar' /></div>
        )} 
      </div>
    </div>
  );
};

export default BalanceSemana;