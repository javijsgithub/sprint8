import React from 'react';
import { render, screen } from '@testing-library/react';
import BalanceSemana from './BalanceSemana';

jest.mock('../Context/DatosContext', () => ({
  useDatosContext: () => ({
    balanceSemana: 100, 
    currentWeekIndex: 0,
    goToPreviousWeek: jest.fn(),
    goToNextWeek: jest.fn(),
  }),
}));

describe('BalanceSemana Component', () => {
  it('renders balance correctly', () => {
    render(<BalanceSemana />);
    const balanceElement = screen.getByText('100 €'); 
    expect(balanceElement).toBeInTheDocument();
  });

  it('renders navigation buttons correctly', () => {
    render(<BalanceSemana />);
    const backButton = screen.getByTestId('back-button');
    const forwardButton = screen.getByTestId('forward-button');

    expect(backButton).toBeInTheDocument();
    expect(forwardButton).toBeInTheDocument();
  });

});