import React from 'react';
import { render } from '@testing-library/react';
import BalanceSemana from '../components/BalanceSemana';
import { DatosProvider } from '../Context/DatosContext';

test('renders balance total de gastos de la semana', () => {
  const { getByText } = render(
    <DatosProvider>
      <BalanceSemana />
    </DatosProvider>
  );

  const balanceSemanaElement = getByText(/balance de gastos de la semana/i);
  expect(balanceSemanaElement).toBeInTheDocument();
});