import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./Context/DatosContext', () => ({
  DatosProvider: ({ children }) => <div>{children}</div>,
  useDatosContext: () => ({
    balanceSemana: 0,
    gastoHoy: 0,
    variacion: 0,
    currentWeekIndex: 0,
    goToPreviousWeek: jest.fn(),
    goToNextWeek: jest.fn(),
    gastosPorDia: {
      lunes: 0,
      martes: 0,
      miercoles: 0,
      jueves: 0,
      viernes: 0,
      sabado: 0,
      domingo: 0,
    },
    setGastosPorDia: jest.fn(),
  }),
}));

describe('App Component', () => {
  it('renders language buttons correctly', () => {
    render(<App />);
    const spainButton = screen.getByText('España');
    const ukButton = screen.getByText('UK');
    const cataloniaButton = screen.getByText('Catalonia');

    expect(spainButton).toBeInTheDocument();
    expect(ukButton).toBeInTheDocument();
    expect(cataloniaButton).toBeInTheDocument();
  });

});