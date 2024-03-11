import React from 'react';
import { render, screen } from '@testing-library/react';
import GraficaGastos from './GraficaGastos';

jest.mock('../Context/DatosContext', () => ({
  useDatosContext: () => ({
    gastosPorDia: {
      lunes: 100,
      martes: 200,
      miercoles: 150,
      jueves: 300,
      viernes: 250,
      sabado: 200,
      domingo: 150,
    },
    currentWeekIndex: 0,
  }),
}));

describe('GraficaGastos Component', () => {
  it('renders chart correctly', () => {
    render(<GraficaGastos />);
    const chartElement = screen.getByText('Expenses - This week');
    expect(chartElement).toBeInTheDocument();
  });

});
