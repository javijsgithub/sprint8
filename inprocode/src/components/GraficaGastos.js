import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { useDatosContext } from '../Context/DatosContext';

const GraficaGastos = () => {
  const { gastosPorDia } = useDatosContext();
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
        // Destruir el gráfico existente antes de crear uno nuevo
        chartInstance.current.destroy();
      }
    const ctx = chartRef.current.getContext('2d');
    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: Object.keys(gastosPorDia), 
        datasets: [{
          label: 'Gastos',
          data: Object.values(gastosPorDia),
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
    return () => {
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
      };
  }, [gastosPorDia]);

  return (
    <div>
      <h2>Gastos Semanales</h2>
      <canvas ref={chartRef} width="400" height="200"></canvas>
    </div>
  );
};

export default GraficaGastos;