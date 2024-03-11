import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { useTranslation } from 'react-i18next';
import { useDatosContext } from '../Context/DatosContext';
import GastosHoy from './GastosHoy';
import '../styles/GraficaGastos.css';

const GraficaGastos = () => {
  const { gastosPorDia, currentWeekIndex } = useDatosContext(); 
   const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    if (chartInstance.current) {
        // Destruir el gráfico existente antes de crear uno nuevo
        chartInstance.current.destroy();
      }
    const ctx = chartRef.current.getContext('2d');

    const getColor = (index) => {
      return index === 6 ? 'rgb(100,149,237)' : 'salmon';
    };

    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: Object.keys(gastosPorDia), 
        datasets: [{
          data: Object.values(gastosPorDia),
          backgroundColor: Object.keys(gastosPorDia).map((key, index) => getColor(index)),
          borderColor: Object.keys(gastosPorDia).map((key, index) => getColor(index)),
          borderWidth: 1,
          borderRadius: 8,
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
        plugins: {
          legend: {
            display: false
          }
        },
        layout: {
          padding: {
            right: 20,
          }
        },
      }
    });
    return () => {
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
      };
  }, [gastosPorDia, currentWeekIndex]);

  return (
    <div className='container-grafico'>
      <h2>{currentWeekIndex === 0 ?  t('expenses_this_week') : currentWeekIndex === 1 ? t('expenses_last_week') : t('expenses_two_weeks_ago')}</h2>
      <br/>
      <canvas ref={chartRef} width="400" height="200"></canvas>
      <br/>
      {currentWeekIndex === 0 && <hr/>}
      {currentWeekIndex === 0 && <GastosHoy />}
    </div>
  );
};

export default GraficaGastos;