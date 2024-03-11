import React from 'react';
import { render, screen } from '@testing-library/react';
import GastosHoy from './GastosHoy';

jest.mock('../Context/DatosContext', () => ({
  useDatosContext: () => ({
    gastoHoy: 50,
    variacion: 10,
  }),
}));

describe('GastosHoy Component', () => {
  it('renders expense for today correctly', () => {
    render(<GastosHoy />);
    const expenseElement = screen.getByText('50 €');
    expect(expenseElement).toBeInTheDocument();
  });

  it('renders variation percentage correctly', () => {
    render(<GastosHoy />);
    const variationElement = screen.getByText('10 %'); 
    expect(variationElement).toBeInTheDocument();
  });

});
